import { soliditySha3, AbiItem } from 'web3-utils';
import UP, { UPAuthMessage, UPAuthResponse, UPCoreType } from 'up-core-test';
import {
  ChainID,
  UPRangersConfig,
  UPRangersConfigOption,
  UP_MAIN_CONFIG,
  UP_TEST_CONFIG,
} from './config';
import { ENTRY_ABI } from './abi/entry.abi';
import { ASSET_ABI } from './abi/asset.abi';
import Web3 from '@rangersprotocolweb3/web3';
import { Contract } from 'web3-eth-contract';
import { convertUPAuthResponse, emailHash, submitTransaction } from './utils';
export enum ActionType {
  TRANSFER_ETH = 0,
  TRANSFER_TOKEN,
  CALL,
}

export class UPRangers {
  private _config: UPRangersConfig;
  private _web3: Web3;
  private _initialized: boolean;

  private _username: string; // UniPass username
  private _email: string; // UniPass user email hash
  private _entryContract: Contract; // UniPass UserInfo contract on Rangers blockchain
  private _assetContract: Contract; // UniPass User Asset contract on Rangers blockchain

  private _upCoreInitialized: boolean; // up-core sdk initialized
  private _authorize: (message: UPAuthMessage) => Promise<UPAuthResponse>; // authorize function

  constructor(options: UPRangersConfigOption) {
    this.initConfig(options);
    this.initWeb3();

    // if no upCoreConfig, up-core sdk will not initialized
    if (options.upCoreConfig) {
      UP.config(options.upCoreConfig);
      this._upCoreInitialized = true;
    } else {
      this._upCoreInitialized = false;
    }

    this._initialized = false;
  }

  /**
   * init configurations
   * @param options
   */
  private initConfig(options: UPRangersConfigOption) {
    this._config = {
      rangersRPC: [''],
      unipassRPC: '',
      chainID: ChainID.testnet,
      userInfoContract: '',
    };

    this._config.chainID = options.chainID || ChainID.testnet;
    const defaultConfig =
      this._config.chainID === ChainID.testnet
        ? UP_TEST_CONFIG
        : UP_MAIN_CONFIG;

    this._config.rangersRPC = options.rangersRPC || defaultConfig.rangersRPC;
    this._config.unipassRPC = options.unipassRPC || defaultConfig.unipassRPC;
    this._config.userInfoContract =
      options.userInfoContract || defaultConfig.userInfoContract;
  }

  private initWeb3() {
    this._web3 = new Web3(
      this._config.rangersRPC[0],
      this._config.rangersRPC[1],
      this._config.rangersRPC[2]
    );

    this._entryContract = new this._web3.eth.Contract(
      ENTRY_ABI.abi as AbiItem[],
      this._config.userInfoContract
    );
  }

  /**
   * get call options for web3 querys
   * @returns
   */
  private getOption() {
    return {};
  }

  /**
   * get UniPass user asset contract's nonce for next asset operation
   * @returns
   */
  private async getNewTransactionNonce(): Promise<number> {
    const nonce = await this._assetContract.methods
      .g_nonce()
      .call(this.getOption());
    return Number(nonce) + 1;
  }

  /**
   * get rangers web3 instance
   * @returns
   */
  public getWeb3(): Web3 {
    return this._web3;
  }

  /**
   * get up-core instance if up-core initialized
   * @returns
   */
  public getUPCore(): UPCoreType {
    if (this._upCoreInitialized) {
      return UP;
    } else {
      throw new Error(`upcore not initialized`);
    }
  }

  /**
   * initialize Rangers with user's username and email
   * @param username UniPass username
   * @param email UniPass user email
   * @param authorize optional, customized authorize function. default is up-sdk's authorize funciton.
   */
  public async initUniPass(
    username: string,
    email: string,
    authorize?: (message: UPAuthMessage) => Promise<UPAuthResponse>
  ) {
    if (!username || !email) {
      throw new Error(`neither username nor email can be empty`);
    }

    this._username = username;
    this._authorize = authorize ? authorize : UP.authorize;
    this._email = emailHash(email);

    console.log('[up-rangers] this.email hash', this._email);

    // call userInfo contract to get user asset contract
    const { assetContractAddress } = await this._entryContract.methods
      .users(this._email)
      .call(this.getOption());
    if (assetContractAddress === '0x0000000000000000000000000000000000000000') {
      throw new Error(`UniPass User ${username} not found`);
    }
    this._assetContract = new this._web3.eth.Contract(
      ASSET_ABI.abi as AbiItem[],
      assetContractAddress
    );

    this._initialized = true;
  }

  /**
   * get UniPass user's asset contract address on rangers.
   *
   * @returns asset contract address
   */
  public getAddress(): string {
    if (!this._initialized) {
      throw new Error(`UPRangers is not initialized`);
    }
    return this._assetContract.options.address;
  }

  /**
   * call user's asset contract to send eth to a specified account
   *
   * @param to the receiver's address
   * @param amount the send amount, unit: wei
   * @returns the send transaction hash
   */
  public async transferEth(to: string, amount: string): Promise<string> {
    const nonce = await this.getNewTransactionNonce();
    // build signature Request
    const hash = soliditySha3(
      { v: this._config.chainID, t: 'uint8' },
      { v: this.getAddress(), t: 'address' },
      { v: ActionType.TRANSFER_ETH, t: 'uint8' },
      { v: nonce, t: 'uint32' },
      { v: to, t: 'address' },
      { v: amount, t: 'uint256' }
    );

    // call up-core to sign
    const { key, type, sig } = convertUPAuthResponse(
      await this._authorize(new UPAuthMessage('CKB_TX', this._username, hash))
    );

    // build asset contract call request and send it to UniPass transaction submitter
    const request = {
      method: 'transferEth',
      params: [nonce, to, amount, type, key, sig],
      email: this._email,
    };

    return submitTransaction(
      this._config.unipassRPC,
      request.email,
      request.method,
      request.params
    );
  }

  /**
   * call user's asset contract to send erc20 token to a specified account
   *
   * @param token the erc20 token contract address
   * @param to the receiver's address
   * @param amount token amount to be sent, unit: wei
   * @returns the send transaction hash
   */
  public async transferToken(
    token: string,
    to: string,
    amount: string
  ): Promise<string> {
    const nonce = await this.getNewTransactionNonce();
    // build signature Request
    const hash = soliditySha3(
      { v: this._config.chainID, t: 'uint8' },
      { v: this.getAddress(), t: 'address' },
      { v: ActionType.TRANSFER_TOKEN, t: 'uint8' },
      { v: nonce, t: 'uint32' },
      { v: token, t: 'address' },
      { v: to, t: 'address' },
      { v: amount, t: 'uint256' }
    );

    // call UniPass to sign
    const { key, type, sig } = convertUPAuthResponse(
      await this._authorize(new UPAuthMessage('CKB_TX', this._username, hash))
    );

    // build asset contract call request and send it to UniPass transaction submitter
    const request = {
      method: 'transferToken',
      params: [nonce, token, to, amount, type, key, sig],
    };

    return submitTransaction(
      this._config.unipassRPC,
      this._email,
      request.method,
      request.params
    );
  }

  /**
   * call user's asset contract to execute a contract call
   *
   * @param to the contract will be called by asset contract
   * @param value the value will be sent to the called contract
   * @param callData the call data
   * @returns the call transaction hash
   */
  public async executeCall(
    to: string,
    value: string,
    callData: string
  ): Promise<string> {
    const nonce = await this.getNewTransactionNonce();
    // build signature Request
    const hash = soliditySha3(
      { v: this._config.chainID, t: 'uint8' },
      { v: this.getAddress(), t: 'address' },
      { v: ActionType.CALL, t: 'uint8' },
      { v: nonce, t: 'uint32' },
      { v: to, t: 'address' },
      { v: value, t: 'uint256' },
      { v: callData, t: 'bytes' }
    );

    // call UniPass to sign
    const { key, type, sig } = convertUPAuthResponse(
      await this._authorize(new UPAuthMessage('CKB_TX', this._username, hash))
    );

    // build asset contract call request and send it to UniPass transaction submitter
    const request = {
      method: 'call',
      params: [nonce, to, value, callData, type, key, sig],
    };
    return submitTransaction(
      this._config.unipassRPC,
      this._email,
      request.method,
      request.params
    );
  }

  /**
   * verify UniPass user signed message and sig on Rangers contract
   *
   * @param msg the message to be signed
   * @param authResp the signature response returned by UniPass
   * @returns boolean true: pass verification, false: failed verification
   */
  public async verifyUserSig(
    msg: string,
    authResp: UPAuthResponse
  ): Promise<boolean> {
    const { key, type, sig } = convertUPAuthResponse(authResp);
    const ret = await this._entryContract.methods
      .verifyUserSig(this._email, msg, type, key, sig)
      .call(this.getOption());
    return ret;
  }
}

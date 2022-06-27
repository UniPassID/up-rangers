import { soliditySha3, AbiItem } from 'web3-utils';
import UP, {
  EvmTransactionType,
  Token,
  UPAuthMessage,
  UPAuthResponse,
  UPCoreType,
} from 'up-core-test';
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

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export enum ActionType {
  TRANSFER_ETH = 0,
  TRANSFER_TOKEN,
  CALL,
}

export interface RangersTxOption {
  feeToken: Token;
  feeAmount: string;
  transactionType?: EvmTransactionType;
  description?: string;
}

const DEFAULT_FEE_OPTION: RangersTxOption = {
  feeToken: {
    address: ZERO_ADDRESS,
    symbol: 'RPG',
    decimals: 18,
  },
  feeAmount: '1',
};

export class UPRangers {
  private _config: UPRangersConfig;
  private _web3: Web3;
  private _initialized: boolean;
  private _chainID: number = -1;

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

  private async getChainID(): Promise<number> {
    if (this._chainID < 0) {
      this._chainID = await this._web3.eth.getChainId();
    }
    return this._chainID;
  }

  private async getKeyIndex(type: number, key: string): Promise<number> {
    const data = await this._entryContract.methods
      .checkUserKey(this._email, type, key)
      .call();
    console.log('keyIndex', data);
    if (data && data[0] === true) {
      return data[1];
    } else {
      throw new Error('key not exist');
    }
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
      .assetNonce()
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
    let tryTimes = 0;
    let assetContractAddress = ZERO_ADDRESS;
    while (tryTimes++ < 3) {
      console.log(`[up-rangers] fetch asset address times = ${tryTimes}`);
      const user = await this._entryContract.methods
        .users(this._email)
        .call(this.getOption());
      assetContractAddress = user.assetContractAddress;

      if (assetContractAddress !== ZERO_ADDRESS || tryTimes >= 3) break;

      // sleep 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (assetContractAddress === ZERO_ADDRESS) {
      throw new Error(`UniPass User ${username} not found, try again later`);
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
   * get user's address by email
   *
   * @param email user email
   * @returns user's asset contract address
   */
  public async getAddressByEmail(email: string): Promise<string> {
    const hash = emailHash(email);
    const { assetContractAddress } = await this._entryContract.methods
      .users(hash)
      .call(this.getOption());

    if (assetContractAddress === '0x0000000000000000000000000000000000000000') {
      throw new Error(`UniPass User ${email} not found`);
    }
    return assetContractAddress;
  }

  /**
   * call user's asset contract to send eth to a specified account
   *
   * @param to the receiver's address
   * @param amount the send amount, unit: wei
   * @returns the send transaction hash
   */
  public async transferNativeToken(
    to: string,
    amount: string,
    feeOption?: RangersTxOption
  ): Promise<string> {
    if (!feeOption) {
      feeOption = DEFAULT_FEE_OPTION;
    }
    const { feeToken, feeAmount, description } = feeOption;

    const nonce = await this.getNewTransactionNonce();
    // build signature Request
    const hash = soliditySha3(
      { v: await this.getChainID(), t: 'uint256' },
      { v: this.getAddress(), t: 'address' },
      { v: ActionType.TRANSFER_ETH, t: 'uint8' },
      { v: nonce, t: 'uint32' },
      { v: to, t: 'address' },
      { v: amount, t: 'uint256' },
      { v: feeToken.address, t: 'address' },
      { v: feeAmount, t: 'uint256' }
    );

    // call up-core to sign
    const { key, type, sig } = convertUPAuthResponse(
      await this._authorize(
        new UPAuthMessage('EVM_TX', this._username, {
          raw: hash,
          type: EvmTransactionType.TRANSFER,
          to: to,
          value: amount,
          feeToken,
          feeAmount,
          description: description ? description : '',
        })
      )
    );

    const keyIndex = await this.getKeyIndex(type, key);
    // build asset contract call request and send it to UniPass transaction submitter
    const url = `${this._config.unipassRPC}/transfer_native`;
    const params = {
      assetContract: this._assetContract.options.address,
      registerEmail: this._email,
      nonce: nonce.toString(),
      to,
      amount,
      feeToken: feeToken.address,
      feeAmount,
      sig,
      sigKeyIndex: keyIndex.toString(),
    };

    return submitTransaction(url, params);
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
    token: Token,
    to: string,
    amount: string,
    feeOption?: RangersTxOption
  ): Promise<string> {
    if (!feeOption) {
      feeOption = DEFAULT_FEE_OPTION;
    }
    const { feeToken, feeAmount, description } = feeOption;

    const nonce = await this.getNewTransactionNonce();
    // build signature Request
    const hash = soliditySha3(
      { v: await this.getChainID(), t: 'uint256' },
      { v: this.getAddress(), t: 'address' },
      { v: ActionType.TRANSFER_TOKEN, t: 'uint8' },
      { v: nonce, t: 'uint32' },
      { v: token.address, t: 'address' },
      { v: to, t: 'address' },
      { v: amount, t: 'uint256' },
      { v: feeToken.address, t: 'address' },
      { v: feeAmount, t: 'uint256' }
    );

    // call UniPass to sign
    const { key, type, sig } = convertUPAuthResponse(
      await this._authorize(
        new UPAuthMessage('EVM_TX', this._username, {
          raw: hash,
          type: EvmTransactionType.TRANSFER_TOKEN,
          to: to,
          value: '0',
          token,
          tokenAmount: amount,
          feeToken,
          feeAmount,
          description: description ? description : '',
        })
      )
    );

    const keyIndex = await this.getKeyIndex(type, key);
    // build asset contract call request and send it to UniPass transaction submitter
    const url = `${this._config.unipassRPC}/transfer_token`;
    const params = {
      assetContract: this._assetContract.options.address,
      registerEmail: this._email,
      nonce: nonce.toString(),
      token: token.address,
      to,
      amount,
      feeToken: feeToken.address,
      feeAmount,
      sig,
      sigKeyIndex: keyIndex.toString(),
    };

    return submitTransaction(url, params);

    // return await this._assetContract.methods.transferToken(
    //   nonce,
    //   token,
    //   to,
    //   amount,
    //   feeToken,
    //   feeAmount,
    //   sig,
    //   keyIndex
    // ).send({from: this._web3.eth.accounts.wallet[0].address})
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
    callData: string,
    feeOption?: RangersTxOption
  ): Promise<string> {
    if (!feeOption) {
      feeOption = DEFAULT_FEE_OPTION;
    }
    const { feeToken, feeAmount, description, transactionType } = feeOption;

    const nonce = await this.getNewTransactionNonce();
    // build signature Request
    const hash = soliditySha3(
      { v: await this.getChainID(), t: 'uint256' },
      { v: this.getAddress(), t: 'address' },
      { v: ActionType.CALL, t: 'uint8' },
      { v: nonce, t: 'uint32' },
      { v: to, t: 'address' },
      { v: value, t: 'uint256' },
      { v: callData, t: 'bytes' },
      { v: feeToken.address, t: 'address' },
      { v: feeAmount, t: 'uint256' }
    );

    // call UniPass to sign
    const { key, type, sig } = convertUPAuthResponse(
      await this._authorize(
        new UPAuthMessage('EVM_TX', this._username, {
          raw: hash,
          type: transactionType
            ? transactionType
            : EvmTransactionType.CONTRACT_CALL,
          to: to,
          value,
          data: callData,
          feeToken,
          feeAmount,
          description: description ? description : '',
        })
      )
    );

    const keyIndex = await this.getKeyIndex(type, key);
    // build asset contract call request and send it to UniPass transaction submitter
    const url = `${this._config.unipassRPC}/execute`;
    const params = {
      assetContract: this._assetContract.options.address,
      registerEmail: this._email,
      nonce: nonce.toString(),
      to,
      value,
      callData,
      feeToken: feeToken.address,
      feeAmount,
      sig,
      sigKeyIndex: keyIndex.toString(),
    };

    return submitTransaction(url, params);
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

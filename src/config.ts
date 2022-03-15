import { UPConfigOption } from 'up-core-test/dist/config';
export enum ChainID {
  testnet = 0,
  mainnet = 1,
}
export interface UPRangersConfig {
  rangersRPC: string[]; // Rangers Node RPC List
  unipassRPC: string; // UniPass Transaction Submitter RPC
  chainID: ChainID; // Chain ID
  userInfoContract: string; // UniPass UserInfo Contract
}

// default testnet config
export const UP_TEST_CONFIG: UPRangersConfig = {
  rangersRPC: [
    'wss://robin.rangersprotocol.com/pubhub/api/reader',
    'wss://robin.rangersprotocol.com/pubhub/api/writer',
    'wss://robin-sub.rangersprotocol.com',
  ],
  unipassRPC: 'https://t.sync.unipass.id/api/v1/transaction/asset',
  chainID: ChainID.testnet,
  userInfoContract: '',
};

// default mainnet config
export const UP_MAIN_CONFIG: UPRangersConfig = {
  rangersRPC: [''],
  unipassRPC: '',
  chainID: ChainID.mainnet,
  userInfoContract: '',
};

// config options
export type UPRangersConfigOption = {
  readonly rangersRPC?: string[]; // Rangers Node RPC list
  readonly unipassRPC?: string; // UniPass Transaction Submitter RPC
  readonly chainID?: ChainID; // Chain ID
  readonly userInfoContract?: string; // UniPass UserInfo Contract

  readonly upCoreConfig?: UPConfigOption; // UniPass up-core sdk configuration options

  readonly [key: string]: any; // other options
};

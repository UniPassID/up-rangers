export const ASSET_ABI = {
  abi: [
    {
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'address payable',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'callData',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'sigKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'sigKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'sig',
          type: 'bytes',
        },
      ],
      name: 'call',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'chainID',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'entryContract',
      outputs: [
        {
          internalType: 'contract Entry',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'g_nonce',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: '_registerEmail',
          type: 'bytes32',
        },
      ],
      name: 'init',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'registerEmail',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'address payable',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'sigKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'sigKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'sig',
          type: 'bytes',
        },
      ],
      name: 'transferEth',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'address payable',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'sigKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'sigKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'sig',
          type: 'bytes',
        },
      ],
      name: 'transferToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
};

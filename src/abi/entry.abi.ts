export const ENTRY_ABI = {
  abi: [
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'newkeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'newKeySig',
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
      name: 'addLocalKey',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
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
      name: 'cancelRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
      ],
      name: 'completeRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'delKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'delKey',
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
      name: 'delLocalKey',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'logicaddr',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'event_addLocalKey',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'event_cancelRecovery',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'event_completeRecovery',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'event_delLocalKey',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      name: 'event_quickAddLocalKey',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'event_quickregister',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'event_register',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'event_startRecovery',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'event_updateRecoveryEmail',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'newKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'newKeySig',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'adminSig',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'emailHeaders',
          type: 'bytes[]',
        },
      ],
      name: 'quickAddLocalKey',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'string',
          name: 'originUsername',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'keyType',
          type: 'uint8',
        },
        {
          internalType: 'bytes',
          name: 'key',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'sig',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'adminSig',
          type: 'bytes',
        },
        {
          internalType: 'string',
          name: 'source',
          type: 'string',
        },
      ],
      name: 'quickRegister',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'string',
          name: 'originUsername',
          type: 'string',
        },
        {
          internalType: 'bytes',
          name: 'emailHeader',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'keyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'key',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'sig',
          type: 'bytes',
        },
        {
          internalType: 'string',
          name: 'source',
          type: 'string',
        },
      ],
      name: 'register',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'resetKeys',
          type: 'bool',
        },
        {
          internalType: 'uint256',
          name: 'newKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'newKeySig',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'emailHeaders',
          type: 'bytes[]',
        },
      ],
      name: 'startRecovery',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'quickLogin',
          type: 'bool',
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
      name: 'updateQuickLogin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'bytes32[]',
          name: 'emails',
          type: 'bytes32[]',
        },
        {
          internalType: 'uint256',
          name: 'threshold',
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
      name: 'updateRecoveryEmail',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'username',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'newKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'newKeySig',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'adminSig',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'emailHeaders',
          type: 'bytes[]',
        },
      ],
      name: '_quickAddLocalKeyCheck',
      outputs: [],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: 'newKeySig',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'emailHeader',
          type: 'bytes',
        },
      ],
      name: '_quickAddLocalKeyCheck2',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: 'newKeySig',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: 'emailHeaders',
          type: 'bytes[]',
        },
      ],
      name: '_startRecoveryCheck',
      outputs: [],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'uint256',
          name: 'keyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'key',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
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
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
      ],
      name: 'getUserKeys',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'keyType',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: 'key',
              type: 'bytes',
            },
          ],
          internalType: 'struct Entry.PubKey[]',
          name: 'keys',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
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
      ],
      name: 'isUserKey',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'logic',
      outputs: [
        {
          internalType: 'contract Logic',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newAdminKeyType',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'newAdminKey',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'newadminSig',
          type: 'bytes',
        },
        {
          internalType: 'bytes',
          name: 'oldadminSig',
          type: 'bytes',
        },
      ],
      name: 'setAdmin',
      outputs: [],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalUsers',
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
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'users',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'quickLogin',
          type: 'bool',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'threshold',
              type: 'uint256',
            },
            {
              internalType: 'bytes32[]',
              name: 'emails',
              type: 'bytes32[]',
            },
          ],
          internalType: 'struct Entry.RecoveryEmail',
          name: 'recoveryEmails',
          type: 'tuple',
        },
        {
          internalType: 'address',
          name: 'assetContractAddress',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'isRecovering',
          type: 'bool',
        },
        {
          components: [
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'keyType',
                  type: 'uint256',
                },
                {
                  internalType: 'bytes',
                  name: 'key',
                  type: 'bytes',
                },
              ],
              internalType: 'struct Entry.PubKey',
              name: 'key',
              type: 'tuple',
            },
            {
              internalType: 'uint256',
              name: 'timestamp',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'resetKeys',
              type: 'bool',
            },
          ],
          internalType: 'struct Entry.PendingState',
          name: 'pendingState',
          type: 'tuple',
        },
        {
          internalType: 'bytes',
          name: 'source',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 'hash',
          type: 'bytes32',
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
      name: 'verify',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'registerEmail',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: 'message',
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
      name: 'verifyUserSig',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
};

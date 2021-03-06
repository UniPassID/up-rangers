export const ENTRY_ABI = {
  abi: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "E_AddLocalKey",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "E_CancelRecovery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "E_CompleteRecovery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "E_DelLocalKey",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "E_QuickAddLocalKey",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "E_QuickRegister",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "E_Register",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "E_SetAdmin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "timeLockSwitch",
          "type": "bool"
        }
      ],
      "name": "E_SetTimeLockSwitch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "E_StartRecovery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "name": "E_UpdateQuickLogin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "E_UpdateRecoveryEmail",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newKeyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "newKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "newKeySig",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyIndex",
          "type": "uint256"
        }
      ],
      "name": "addLocalKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyIndex",
          "type": "uint256"
        }
      ],
      "name": "cancelRecovery",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        }
      ],
      "name": "completeRecovery",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "delKeyIndex",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyIndex",
          "type": "uint256"
        }
      ],
      "name": "delLocalKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_logic",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "_chainID",
          "type": "uint8"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newKeyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "newKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "newKeySig",
          "type": "bytes"
        },
        {
          "internalType": "bytes[]",
          "name": "emailHeaders",
          "type": "bytes[]"
        }
      ],
      "name": "quickAddLocalKey",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "originUsername",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "key",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "string",
          "name": "source",
          "type": "string"
        }
      ],
      "name": "quickRegister",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "originUsername",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "emailHeader",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "key",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "string",
          "name": "source",
          "type": "string"
        }
      ],
      "name": "register",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newAdmin",
          "type": "address"
        }
      ],
      "name": "setAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_switch",
          "type": "bool"
        }
      ],
      "name": "setTimeLockSwitch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "resetKeys",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "newKeyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "newKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "newKeySig",
          "type": "bytes"
        },
        {
          "internalType": "bytes[]",
          "name": "emailHeaders",
          "type": "bytes[]"
        }
      ],
      "name": "startRecovery",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "quickLogin",
          "type": "bool"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyIndex",
          "type": "uint256"
        }
      ],
      "name": "updateQuickLogin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "username",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "bytes32[]",
          "name": "emails",
          "type": "bytes32[]"
        },
        {
          "internalType": "uint256",
          "name": "threshold",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyIndex",
          "type": "uint256"
        }
      ],
      "name": "updateRecoveryEmail",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "chainID",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "keyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "key",
          "type": "bytes"
        }
      ],
      "name": "checkUserKey",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        }
      ],
      "name": "getUserKeys",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "keyType",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "key",
              "type": "bytes"
            }
          ],
          "internalType": "struct UnipassUtils.PubKey[]",
          "name": "keys",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        }
      ],
      "name": "getUserName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        }
      ],
      "name": "getUserNonce",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        }
      ],
      "name": "getUserPendingState",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "keyType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "key",
                  "type": "bytes"
                }
              ],
              "internalType": "struct UnipassUtils.PubKey",
              "name": "key",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "resetKeys",
              "type": "bool"
            }
          ],
          "internalType": "struct Entry.PendingState",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        }
      ],
      "name": "isUseEmailRegister",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "sigKey",
          "type": "bytes"
        }
      ],
      "name": "isUserKey",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "logic",
      "outputs": [
        {
          "internalType": "contract Logic",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "timeLockSwitch",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalUsers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "originUsername",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isUseEmailRegister",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "quickLogin",
          "type": "bool"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "threshold",
              "type": "uint256"
            },
            {
              "internalType": "bytes32[]",
              "name": "emails",
              "type": "bytes32[]"
            }
          ],
          "internalType": "struct Entry.RecoveryEmail",
          "name": "recoveryEmails",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "assetContractAddress",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "isRecovering",
          "type": "bool"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "keyType",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "key",
                  "type": "bytes"
                }
              ],
              "internalType": "struct UnipassUtils.PubKey",
              "name": "key",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "resetKeys",
              "type": "bool"
            }
          ],
          "internalType": "struct Entry.PendingState",
          "name": "pendingState",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "source",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "hash",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyIndex",
          "type": "uint256"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "registerEmail",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "sigKeyType",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "sigKey",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "sig",
          "type": "bytes"
        }
      ],
      "name": "verifyUserSig",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
};

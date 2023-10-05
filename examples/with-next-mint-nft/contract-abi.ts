export const abi = [
  {
    name: "Transfer",
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "tokenAddress",
        type: "address",
      },
    ],
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "setRecipients",
    inputs: [
      {
        name: "_recipients",
        type: "address[100]",
      },
      {
        name: "count",
        type: "uint256",
      },
    ],
    outputs: [],
    gas: 3560726,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "setAmountsAndProbabilities",
    inputs: [
      {
        name: "_amounts",
        type: "uint256[4]",
      },
      {
        name: "_probabilities",
        type: "uint256[4]",
      },
    ],
    outputs: [],
    gas: 289572,
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    name: "sendFunds",
    inputs: [],
    outputs: [],
    gas: 6812187,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 2478,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "recipients",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    gas: 2553,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "amounts",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2583,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "probabilities",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2613,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "recipient_count",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2598,
  },
  {
    stateMutability: "view",
    type: "function",
    name: "last_claimed",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    gas: 2843,
  },
] as const;











// export const abi = [
//   {
//     inputs: [],
//     stateMutability: 'nonpayable',
//     type: 'constructor',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'account',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         indexed: false,
//         internalType: 'bool',
//         name: 'approved',
//         type: 'bool',
//       },
//     ],
//     name: 'ApprovalForAll',
//     type: 'event',
//   },
//   {
//     inputs: [],
//     name: 'mint',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'previousOwner',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'newOwner',
//         type: 'address',
//       },
//     ],
//     name: 'OwnershipTransferred',
//     type: 'event',
//   },
//   {
//     inputs: [],
//     name: 'renounceOwnership',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256[]',
//         name: 'ids',
//         type: 'uint256[]',
//       },
//       {
//         internalType: 'uint256[]',
//         name: 'amounts',
//         type: 'uint256[]',
//       },
//       {
//         internalType: 'bytes',
//         name: 'data',
//         type: 'bytes',
//       },
//     ],
//     name: 'safeBatchTransferFrom',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'id',
//         type: 'uint256',
//       },
//       {
//         internalType: 'uint256',
//         name: 'amount',
//         type: 'uint256',
//       },
//       {
//         internalType: 'bytes',
//         name: 'data',
//         type: 'bytes',
//       },
//     ],
//     name: 'safeTransferFrom',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         internalType: 'bool',
//         name: 'approved',
//         type: 'bool',
//       },
//     ],
//     name: 'setApprovalForAll',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256[]',
//         name: 'ids',
//         type: 'uint256[]',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256[]',
//         name: 'values',
//         type: 'uint256[]',
//       },
//     ],
//     name: 'TransferBatch',
//     type: 'event',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'newOwner',
//         type: 'address',
//       },
//     ],
//     name: 'transferOwnership',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'from',
//         type: 'address',
//       },
//       {
//         indexed: true,
//         internalType: 'address',
//         name: 'to',
//         type: 'address',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'id',
//         type: 'uint256',
//       },
//       {
//         indexed: false,
//         internalType: 'uint256',
//         name: 'value',
//         type: 'uint256',
//       },
//     ],
//     name: 'TransferSingle',
//     type: 'event',
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: 'string',
//         name: 'value',
//         type: 'string',
//       },
//       {
//         indexed: true,
//         internalType: 'uint256',
//         name: 'id',
//         type: 'uint256',
//       },
//     ],
//     name: 'URI',
//     type: 'event',
//   },
//   {
//     inputs: [],
//     name: 'withdrawAll',
//     outputs: [],
//     stateMutability: 'nonpayable',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'account',
//         type: 'address',
//       },
//       {
//         internalType: 'uint256',
//         name: 'id',
//         type: 'uint256',
//       },
//     ],
//     name: 'balanceOf',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address[]',
//         name: 'accounts',
//         type: 'address[]',
//       },
//       {
//         internalType: 'uint256[]',
//         name: 'ids',
//         type: 'uint256[]',
//       },
//     ],
//     name: 'balanceOfBatch',
//     outputs: [
//       {
//         internalType: 'uint256[]',
//         name: '',
//         type: 'uint256[]',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'address',
//         name: 'account',
//         type: 'address',
//       },
//       {
//         internalType: 'address',
//         name: 'operator',
//         type: 'address',
//       },
//     ],
//     name: 'isApprovedForAll',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'owner',
//     outputs: [
//       {
//         internalType: 'address',
//         name: '',
//         type: 'address',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'bytes4',
//         name: 'interfaceId',
//         type: 'bytes4',
//       },
//     ],
//     name: 'supportsInterface',
//     outputs: [
//       {
//         internalType: 'bool',
//         name: '',
//         type: 'bool',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [],
//     name: 'totalSupply',
//     outputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
//   {
//     inputs: [
//       {
//         internalType: 'uint256',
//         name: '',
//         type: 'uint256',
//       },
//     ],
//     name: 'uri',
//     outputs: [
//       {
//         internalType: 'string',
//         name: '',
//         type: 'string',
//       },
//     ],
//     stateMutability: 'view',
//     type: 'function',
//   },
// ] as const;

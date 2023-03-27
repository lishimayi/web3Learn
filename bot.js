const { ethers, providers } = require("ethers");

const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "Closed", type: "event" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "blockRange",
        type: "uint256",
      },
    ],
    name: "NewBlockRange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IExecutionDelegate",
        name: "executionDelegate",
        type: "address",
      },
    ],
    name: "NewExecutionDelegate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "feeRate",
        type: "uint256",
      },
    ],
    name: "NewFeeRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feeRecipient",
        type: "address",
      },
    ],
    name: "NewFeeRecipient",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "governor",
        type: "address",
      },
    ],
    name: "NewGovernor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "NewOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IPolicyManager",
        name: "policyManager",
        type: "address",
      },
    ],
    name: "NewPolicyManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newNonce",
        type: "uint256",
      },
    ],
    name: "NonceIncremented",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "Opened", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        components: [
          { internalType: "address", name: "trader", type: "address" },
          { internalType: "enum Side", name: "side", type: "uint8" },
          { internalType: "address", name: "matchingPolicy", type: "address" },
          { internalType: "address", name: "collection", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "address", name: "paymentToken", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "listingTime", type: "uint256" },
          { internalType: "uint256", name: "expirationTime", type: "uint256" },
          {
            components: [
              { internalType: "uint16", name: "rate", type: "uint16" },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "extraParams", type: "bytes" },
        ],
        indexed: false,
        internalType: "struct Order",
        name: "sell",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "sellHash",
        type: "bytes32",
      },
      {
        components: [
          { internalType: "address", name: "trader", type: "address" },
          { internalType: "enum Side", name: "side", type: "uint8" },
          { internalType: "address", name: "matchingPolicy", type: "address" },
          { internalType: "address", name: "collection", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "address", name: "paymentToken", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "listingTime", type: "uint256" },
          { internalType: "uint256", name: "expirationTime", type: "uint256" },
          {
            components: [
              { internalType: "uint16", name: "rate", type: "uint16" },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "extraParams", type: "bytes" },
        ],
        indexed: false,
        internalType: "struct Order",
        name: "buy",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "buyHash",
        type: "bytes32",
      },
    ],
    name: "OrdersMatched",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "FEE_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVERSE_BASIS_POINT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORACLE_ORDER_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORDER_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "address", name: "trader", type: "address" },
              { internalType: "enum Side", name: "side", type: "uint8" },
              {
                internalType: "address",
                name: "matchingPolicy",
                type: "address",
              },
              { internalType: "address", name: "collection", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "address",
                name: "paymentToken",
                type: "address",
              },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "uint256", name: "listingTime", type: "uint256" },
              {
                internalType: "uint256",
                name: "expirationTime",
                type: "uint256",
              },
              {
                components: [
                  { internalType: "uint16", name: "rate", type: "uint16" },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "extraParams", type: "bytes" },
            ],
            internalType: "struct Order",
            name: "order",
            type: "tuple",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraSignature", type: "bytes" },
          {
            internalType: "enum SignatureVersion",
            name: "signatureVersion",
            type: "uint8",
          },
          { internalType: "uint256", name: "blockNumber", type: "uint256" },
        ],
        internalType: "struct Input",
        name: "sell",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              { internalType: "address", name: "trader", type: "address" },
              { internalType: "enum Side", name: "side", type: "uint8" },
              {
                internalType: "address",
                name: "matchingPolicy",
                type: "address",
              },
              { internalType: "address", name: "collection", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "address",
                name: "paymentToken",
                type: "address",
              },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "uint256", name: "listingTime", type: "uint256" },
              {
                internalType: "uint256",
                name: "expirationTime",
                type: "uint256",
              },
              {
                components: [
                  { internalType: "uint16", name: "rate", type: "uint16" },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "extraParams", type: "bytes" },
            ],
            internalType: "struct Order",
            name: "order",
            type: "tuple",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraSignature", type: "bytes" },
          {
            internalType: "enum SignatureVersion",
            name: "signatureVersion",
            type: "uint8",
          },
          { internalType: "uint256", name: "blockNumber", type: "uint256" },
        ],
        internalType: "struct Input",
        name: "buy",
        type: "tuple",
      },
    ],
    name: "_execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "blockRange",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  { internalType: "address", name: "trader", type: "address" },
                  { internalType: "enum Side", name: "side", type: "uint8" },
                  {
                    internalType: "address",
                    name: "matchingPolicy",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "collection",
                    type: "address",
                  },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  {
                    internalType: "address",
                    name: "paymentToken",
                    type: "address",
                  },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "listingTime",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expirationTime",
                    type: "uint256",
                  },
                  {
                    components: [
                      { internalType: "uint16", name: "rate", type: "uint16" },
                      {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                      },
                    ],
                    internalType: "struct Fee[]",
                    name: "fees",
                    type: "tuple[]",
                  },
                  { internalType: "uint256", name: "salt", type: "uint256" },
                  { internalType: "bytes", name: "extraParams", type: "bytes" },
                ],
                internalType: "struct Order",
                name: "order",
                type: "tuple",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
              { internalType: "bytes", name: "extraSignature", type: "bytes" },
              {
                internalType: "enum SignatureVersion",
                name: "signatureVersion",
                type: "uint8",
              },
              { internalType: "uint256", name: "blockNumber", type: "uint256" },
            ],
            internalType: "struct Input",
            name: "sell",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  { internalType: "address", name: "trader", type: "address" },
                  { internalType: "enum Side", name: "side", type: "uint8" },
                  {
                    internalType: "address",
                    name: "matchingPolicy",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "collection",
                    type: "address",
                  },
                  { internalType: "uint256", name: "tokenId", type: "uint256" },
                  { internalType: "uint256", name: "amount", type: "uint256" },
                  {
                    internalType: "address",
                    name: "paymentToken",
                    type: "address",
                  },
                  { internalType: "uint256", name: "price", type: "uint256" },
                  {
                    internalType: "uint256",
                    name: "listingTime",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "expirationTime",
                    type: "uint256",
                  },
                  {
                    components: [
                      { internalType: "uint16", name: "rate", type: "uint16" },
                      {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                      },
                    ],
                    internalType: "struct Fee[]",
                    name: "fees",
                    type: "tuple[]",
                  },
                  { internalType: "uint256", name: "salt", type: "uint256" },
                  { internalType: "bytes", name: "extraParams", type: "bytes" },
                ],
                internalType: "struct Order",
                name: "order",
                type: "tuple",
              },
              { internalType: "uint8", name: "v", type: "uint8" },
              { internalType: "bytes32", name: "r", type: "bytes32" },
              { internalType: "bytes32", name: "s", type: "bytes32" },
              { internalType: "bytes", name: "extraSignature", type: "bytes" },
              {
                internalType: "enum SignatureVersion",
                name: "signatureVersion",
                type: "uint8",
              },
              { internalType: "uint256", name: "blockNumber", type: "uint256" },
            ],
            internalType: "struct Input",
            name: "buy",
            type: "tuple",
          },
        ],
        internalType: "struct Execution[]",
        name: "executions",
        type: "tuple[]",
      },
    ],
    name: "bulkExecute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "trader", type: "address" },
          { internalType: "enum Side", name: "side", type: "uint8" },
          { internalType: "address", name: "matchingPolicy", type: "address" },
          { internalType: "address", name: "collection", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "address", name: "paymentToken", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "listingTime", type: "uint256" },
          { internalType: "uint256", name: "expirationTime", type: "uint256" },
          {
            components: [
              { internalType: "uint16", name: "rate", type: "uint16" },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "extraParams", type: "bytes" },
        ],
        internalType: "struct Order",
        name: "order",
        type: "tuple",
      },
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "trader", type: "address" },
          { internalType: "enum Side", name: "side", type: "uint8" },
          { internalType: "address", name: "matchingPolicy", type: "address" },
          { internalType: "address", name: "collection", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "address", name: "paymentToken", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "listingTime", type: "uint256" },
          { internalType: "uint256", name: "expirationTime", type: "uint256" },
          {
            components: [
              { internalType: "uint16", name: "rate", type: "uint16" },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct Fee[]",
            name: "fees",
            type: "tuple[]",
          },
          { internalType: "uint256", name: "salt", type: "uint256" },
          { internalType: "bytes", name: "extraParams", type: "bytes" },
        ],
        internalType: "struct Order[]",
        name: "orders",
        type: "tuple[]",
      },
    ],
    name: "cancelOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "cancelledOrFilled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "close",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "address", name: "trader", type: "address" },
              { internalType: "enum Side", name: "side", type: "uint8" },
              {
                internalType: "address",
                name: "matchingPolicy",
                type: "address",
              },
              { internalType: "address", name: "collection", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "address",
                name: "paymentToken",
                type: "address",
              },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "uint256", name: "listingTime", type: "uint256" },
              {
                internalType: "uint256",
                name: "expirationTime",
                type: "uint256",
              },
              {
                components: [
                  { internalType: "uint16", name: "rate", type: "uint16" },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "extraParams", type: "bytes" },
            ],
            internalType: "struct Order",
            name: "order",
            type: "tuple",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraSignature", type: "bytes" },
          {
            internalType: "enum SignatureVersion",
            name: "signatureVersion",
            type: "uint8",
          },
          { internalType: "uint256", name: "blockNumber", type: "uint256" },
        ],
        internalType: "struct Input",
        name: "sell",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              { internalType: "address", name: "trader", type: "address" },
              { internalType: "enum Side", name: "side", type: "uint8" },
              {
                internalType: "address",
                name: "matchingPolicy",
                type: "address",
              },
              { internalType: "address", name: "collection", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "address",
                name: "paymentToken",
                type: "address",
              },
              { internalType: "uint256", name: "price", type: "uint256" },
              { internalType: "uint256", name: "listingTime", type: "uint256" },
              {
                internalType: "uint256",
                name: "expirationTime",
                type: "uint256",
              },
              {
                components: [
                  { internalType: "uint16", name: "rate", type: "uint16" },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct Fee[]",
                name: "fees",
                type: "tuple[]",
              },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes", name: "extraParams", type: "bytes" },
            ],
            internalType: "struct Order",
            name: "order",
            type: "tuple",
          },
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraSignature", type: "bytes" },
          {
            internalType: "enum SignatureVersion",
            name: "signatureVersion",
            type: "uint8",
          },
          { internalType: "uint256", name: "blockNumber", type: "uint256" },
        ],
        internalType: "struct Input",
        name: "buy",
        type: "tuple",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "executionDelegate",
    outputs: [
      {
        internalType: "contract IExecutionDelegate",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRecipient",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IExecutionDelegate",
        name: "_executionDelegate",
        type: "address",
      },
      {
        internalType: "contract IPolicyManager",
        name: "_policyManager",
        type: "address",
      },
      { internalType: "address", name: "_oracle", type: "address" },
      { internalType: "uint256", name: "_blockRange", type: "uint256" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInternal",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOpen",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "open",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "policyManager",
    outputs: [
      { internalType: "contract IPolicyManager", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "remainingETH",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_blockRange", type: "uint256" }],
    name: "setBlockRange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IExecutionDelegate",
        name: "_executionDelegate",
        type: "address",
      },
    ],
    name: "setExecutionDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_feeRate", type: "uint256" }],
    name: "setFeeRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_feeRecipient", type: "address" },
    ],
    name: "setFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_governor", type: "address" }],
    name: "setGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_oracle", type: "address" }],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPolicyManager",
        name: "_policyManager",
        type: "address",
      },
    ],
    name: "setPolicyManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const address = "0x94F04A210701D710b803B2133a7E16e57AF385A2";

const network = "homestead";

const apiKeyObject = {
  etherscan: "KQ1352832CZTH54HRBU7AI61H42NWWDSGM",
  infura: {
    projectSecret: "f9b12da34d2a4c2aa43bf63ef711ea39",
  },
};
const provider = providers.getDefaultProvider(network, apiKeyObject);

// co;
// console.log(provider.providerConfigs);
// console.log(provider.providerConfigs[0].provider.network);
// console.log(provider.providerConfigs[1].provider.apiKey);

const signer = new ethers.Wallet(
  "7eb64836b3849091f12fd32fd28966be328ba3a1a422cbe7c08b2e36962ec2d8",
  provider
);

const contract = new ethers.Contract(address, abi, signer);
async function main() {
  const result = await contract.NAME();
  console.log(result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });

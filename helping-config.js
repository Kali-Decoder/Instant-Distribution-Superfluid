export const superfluidABI = [
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_members",
          type: "address[]",
        },
      ],
      name: "deleteMemberFromPool",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_members",
          type: "address[]",
        },
        {
          internalType: "uint128[]",
          name: "_giveUnits",
          type: "uint128[]",
        },
      ],
      name: "giveUnits",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "instantlyDistribute",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_acceptedToken",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "acceptedToken",
      outputs: [
        {
          internalType: "contract ISETH",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "FEE",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pool",
      outputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  export const superfluidAddress = "0x5AB8bc4DF926903334789EF126563e07560ff779";
  export const superfluidPoolAddress = "0x85b817A9aDB057D99664bf93e936747B756488F2";
  export const superTokenAddress = "0x143ea239159155B408e71CDbE836e8CFD6766732";
  export const superfluidGDAForwarderAddress =
    "0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08";
  
  export const superfluidGDAForwarderAbi = [
    {
      inputs: [
        { internalType: "contract ISuperfluid", name: "host", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "address", name: "memberAddress", type: "address" },
        { internalType: "bytes", name: "userData", type: "bytes" },
      ],
      name: "claimAll",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "bytes", name: "userData", type: "bytes" },
      ],
      name: "connectPool",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "admin", type: "address" },
        {
          components: [
            {
              internalType: "bool",
              name: "transferabilityForUnitsOwner",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "distributionFromAnyAddress",
              type: "bool",
            },
          ],
          internalType: "struct PoolConfig",
          name: "config",
          type: "tuple",
        },
      ],
      name: "createPool",
      outputs: [
        { internalType: "bool", name: "success", type: "bool" },
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "bytes", name: "userData", type: "bytes" },
      ],
      name: "disconnectPool",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "from", type: "address" },
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "uint256", name: "requestedAmount", type: "uint256" },
        { internalType: "bytes", name: "userData", type: "bytes" },
      ],
      name: "distribute",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "from", type: "address" },
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "int96", name: "requestedFlowRate", type: "int96" },
        { internalType: "bytes", name: "userData", type: "bytes" },
      ],
      name: "distributeFlow",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
        { internalType: "uint256", name: "requestedAmount", type: "uint256" },
      ],
      name: "estimateDistributionActualAmount",
      outputs: [
        { internalType: "uint256", name: "actualAmount", type: "uint256" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
        { internalType: "int96", name: "requestedFlowRate", type: "int96" },
      ],
      name: "estimateFlowDistributionActualFlowRate",
      outputs: [
        { internalType: "int96", name: "actualFlowRate", type: "int96" },
        {
          internalType: "int96",
          name: "totalDistributionFlowRate",
          type: "int96",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "from", type: "address" },
        { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
      ],
      name: "getFlowDistributionFlowRate",
      outputs: [{ internalType: "int96", name: "", type: "int96" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "getNetFlow",
      outputs: [{ internalType: "int96", name: "", type: "int96" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
      ],
      name: "getPoolAdjustmentFlowInfo",
      outputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "bytes32", name: "", type: "bytes32" },
        { internalType: "int96", name: "", type: "int96" },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "pool", type: "address" }],
      name: "getPoolAdjustmentFlowRate",
      outputs: [{ internalType: "int96", name: "", type: "int96" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "address", name: "member", type: "address" },
      ],
      name: "isMemberConnected",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidToken",
          name: "token",
          type: "address",
        },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "isPool",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ISuperfluidPool",
          name: "pool",
          type: "address",
        },
        { internalType: "address", name: "memberAddress", type: "address" },
        { internalType: "uint128", name: "newUnits", type: "uint128" },
        { internalType: "bytes", name: "userData", type: "bytes" },
      ],
      name: "updateMemberUnits",
      outputs: [{ internalType: "bool", name: "success", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
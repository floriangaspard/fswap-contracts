/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GLDToken,
  GLDTokenInterface,
} from "../../../contracts/FToken.sol/GLDToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200179b3803806200179b833981810160405281019062000037919062000358565b6040518060400160405280600681526020017f46546f6b656e00000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f46544b00000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000268565b508060049080519060200190620000d492919062000268565b505050620000e93382620000f060201b60201c565b506200052c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015a90620003eb565b60405180910390fd5b62000177600083836200025e60201b60201c565b80600260008282546200018b91906200043c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200023e9190620004aa565b60405180910390a36200025a600083836200026360201b60201c565b5050565b505050565b505050565b8280546200027690620004f6565b90600052602060002090601f0160209004810192826200029a5760008555620002e6565b82601f10620002b557805160ff1916838001178555620002e6565b82800160010185558215620002e6579182015b82811115620002e5578251825591602001919060010190620002c8565b5b509050620002f59190620002f9565b5090565b5b8082111562000314576000816000905550600101620002fa565b5090565b600080fd5b6000819050919050565b62000332816200031d565b81146200033e57600080fd5b50565b600081519050620003528162000327565b92915050565b60006020828403121562000371576200037062000318565b5b6000620003818482850162000341565b91505092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620003d3601f836200038a565b9150620003e0826200039b565b602082019050919050565b600060208201905081810360008301526200040681620003c4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000449826200031d565b915062000456836200031d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200048e576200048d6200040d565b5b828201905092915050565b620004a4816200031d565b82525050565b6000602082019050620004c1600083018462000499565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200050f57607f821691505b60208210811415620005265762000525620004c7565b5b50919050565b61125f806200053c6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b19565b60405180910390f35b6100e660048036038101906100e19190610bd4565b610308565b6040516100f39190610c2f565b60405180910390f35b61010461032b565b6040516101119190610c59565b60405180910390f35b610134600480360381019061012f9190610c74565b610335565b6040516101419190610c2f565b60405180910390f35b610152610364565b60405161015f9190610ce3565b60405180910390f35b610182600480360381019061017d9190610bd4565b61036d565b60405161018f9190610c2f565b60405180910390f35b6101b260048036038101906101ad9190610cfe565b6103a4565b6040516101bf9190610c59565b60405180910390f35b6101d06103ec565b6040516101dd9190610b19565b60405180910390f35b61020060048036038101906101fb9190610bd4565b61047e565b60405161020d9190610c2f565b60405180910390f35b610230600480360381019061022b9190610bd4565b6104f5565b60405161023d9190610c2f565b60405180910390f35b610260600480360381019061025b9190610d2b565b610518565b60405161026d9190610c59565b60405180910390f35b60606003805461028590610d9a565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d9a565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610772565b6103588585856107fe565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610dfb565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d9a565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d9a565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610ec3565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fe565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610f55565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e90610fe7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107659190610c59565b60405180910390a3505050565b600061077e8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f857818110156107ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e190611053565b60405180910390fd5b6107f784848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610865906110e5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d590611177565b60405180910390fd5b6108e9838383610a76565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096690611209565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a5d9190610c59565b60405180910390a3610a70848484610a7b565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610aba578082015181840152602081019050610a9f565b83811115610ac9576000848401525b50505050565b6000601f19601f8301169050919050565b6000610aeb82610a80565b610af58185610a8b565b9350610b05818560208601610a9c565b610b0e81610acf565b840191505092915050565b60006020820190508181036000830152610b338184610ae0565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b6b82610b40565b9050919050565b610b7b81610b60565b8114610b8657600080fd5b50565b600081359050610b9881610b72565b92915050565b6000819050919050565b610bb181610b9e565b8114610bbc57600080fd5b50565b600081359050610bce81610ba8565b92915050565b60008060408385031215610beb57610bea610b3b565b5b6000610bf985828601610b89565b9250506020610c0a85828601610bbf565b9150509250929050565b60008115159050919050565b610c2981610c14565b82525050565b6000602082019050610c446000830184610c20565b92915050565b610c5381610b9e565b82525050565b6000602082019050610c6e6000830184610c4a565b92915050565b600080600060608486031215610c8d57610c8c610b3b565b5b6000610c9b86828701610b89565b9350506020610cac86828701610b89565b9250506040610cbd86828701610bbf565b9150509250925092565b600060ff82169050919050565b610cdd81610cc7565b82525050565b6000602082019050610cf86000830184610cd4565b92915050565b600060208284031215610d1457610d13610b3b565b5b6000610d2284828501610b89565b91505092915050565b60008060408385031215610d4257610d41610b3b565b5b6000610d5085828601610b89565b9250506020610d6185828601610b89565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610db257607f821691505b60208210811415610dc657610dc5610d6b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0682610b9e565b9150610e1183610b9e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e4657610e45610dcc565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610ead602583610a8b565b9150610eb882610e51565b604082019050919050565b60006020820190508181036000830152610edc81610ea0565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f3f602483610a8b565b9150610f4a82610ee3565b604082019050919050565b60006020820190508181036000830152610f6e81610f32565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fd1602283610a8b565b9150610fdc82610f75565b604082019050919050565b6000602082019050818103600083015261100081610fc4565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061103d601d83610a8b565b915061104882611007565b602082019050919050565b6000602082019050818103600083015261106c81611030565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006110cf602583610a8b565b91506110da82611073565b604082019050919050565b600060208201905081810360008301526110fe816110c2565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611161602383610a8b565b915061116c82611105565b604082019050919050565b6000602082019050818103600083015261119081611154565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111f3602683610a8b565b91506111fe82611197565b604082019050919050565b60006020820190508181036000830152611222816111e6565b905091905056fea2646970667358221220bfae5a58c880ee3a4f30eac27b8d27b3338a6aa0857642a9c7601cdb82f08e0964736f6c63430008090033";

type GLDTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GLDTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GLDToken__factory extends ContractFactory {
  constructor(...args: GLDTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GLDToken> {
    return super.deploy(initialSupply, overrides || {}) as Promise<GLDToken>;
  }
  override getDeployTransaction(
    initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override attach(address: string): GLDToken {
    return super.attach(address) as GLDToken;
  }
  override connect(signer: Signer): GLDToken__factory {
    return super.connect(signer) as GLDToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GLDTokenInterface {
    return new utils.Interface(_abi) as GLDTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GLDToken {
    return new Contract(address, _abi, signerOrProvider) as GLDToken;
  }
}

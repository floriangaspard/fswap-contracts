/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FSwapPool, FSwapPoolInterface } from "../../contracts/FSwapPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "balance0",
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
    name: "balance1",
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
        internalType: "uint256",
        name: "_amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount1",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidity",
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
        name: "",
        type: "address",
      },
    ],
    name: "providers",
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
        internalType: "bool",
        name: "_isToken0",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
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
    name: "token1",
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
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200115b3803806200115b833981810160405281019062000037919062000118565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250506000808190555050506200015f565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000e082620000b3565b9050919050565b620000f281620000d3565b8114620000fe57600080fd5b50565b6000815190506200011281620000e7565b92915050565b60008060408385031215620001325762000131620000ae565b5b6000620001428582860162000101565b9250506020620001558582860162000101565b9150509250929050565b60805160a051610f74620001e76000396000818161036f0152818161042c01528181610484015281816104e10152818161050c015281816105c30152818161063e015261078f0152600081816101e601528181610215015281816102400152818161030a01528181610402015281816104ae015281816105ec01526107650152610f746000f3fe60806040526004361061007b5760003560e01c8063c037646a1161004e578063c037646a1461013e578063c45c4f581461015a578063d21220a714610185578063e2bbb158146101b05761007b565b80630787bc27146100805780630dfe1681146100bd5780631a686502146100e85780631c69ad0014610113575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190610ab5565b6101cc565b6040516100b49190610afb565b60405180910390f35b3480156100c957600080fd5b506100d26101e4565b6040516100df9190610b25565b60405180910390f35b3480156100f457600080fd5b506100fd610208565b60405161010a9190610afb565b60405180910390f35b34801561011f57600080fd5b5061012861020e565b6040516101359190610afb565b60405180910390f35b61015860048036038101906101539190610ba4565b6102f5565b005b34801561016657600080fd5b5061016f6104da565b60405161017c9190610afb565b60405180910390f35b34801561019157600080fd5b5061019a6105c1565b6040516101a79190610b25565b60405180910390f35b6101ca60048036038101906101c59190610be4565b6105e5565b005b60016020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005481565b60006102397f0000000000000000000000000000000000000000000000000000000000000000610838565b156102ee577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102979190610b25565b60206040518083038186803b1580156102af57600080fd5b505afa1580156102c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e79190610c39565b90506102f2565b4790505b90565b600081141561030357600080fd5b600061032e7f0000000000000000000000000000000000000000000000000000000000000000610838565b61035d57826103445761033f61020e565b610358565b8161034d61020e565b6103579190610c95565b5b610366565b61036561020e565b5b905060006103937f0000000000000000000000000000000000000000000000000000000000000000610838565b6103c35783156103aa576103a56104da565b6103be565b826103b36104da565b6103bd9190610c95565b5b6103cc565b6103cb6104da565b5b9050831561045657600083836103e29190610cc9565b6000546103ef9190610d4e565b826103fa9190610c95565b9050610426847f0000000000000000000000000000000000000000000000000000000000000000610881565b610450817f0000000000000000000000000000000000000000000000000000000000000000610935565b506104d4565b600083826104649190610cc9565b6000546104719190610d4e565b8361047c9190610c95565b90506104a8847f0000000000000000000000000000000000000000000000000000000000000000610881565b6104d2817f0000000000000000000000000000000000000000000000000000000000000000610935565b505b50505050565b60006105057f0000000000000000000000000000000000000000000000000000000000000000610838565b156105ba577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105639190610b25565b60206040518083038186803b15801561057b57600080fd5b505afa15801561058f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b39190610c39565b90506105be565b4790505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006106107f0000000000000000000000000000000000000000000000000000000000000000610838565b61062c578261061d61020e565b6106279190610c95565b610635565b61063461020e565b5b905060006106627f0000000000000000000000000000000000000000000000000000000000000000610838565b61067e578261066f6104da565b6106799190610c95565b610687565b6106866104da565b5b90506000821415801561069b575060008114155b1561075f57808211156107055780826106b49190610d4e565b83856106c09190610d4e565b14610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790610ddc565b60405180910390fd5b61075e565b81816107119190610d4e565b848461071d9190610d4e565b1461075d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075490610ddc565b60405180910390fd5b5b5b610789847f0000000000000000000000000000000000000000000000000000000000000000610881565b6107b3837f0000000000000000000000000000000000000000000000000000000000000000610881565b600083856107c19190610dfc565b9050806000808282546107d49190610cc9565b9250508190555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461082a9190610cc9565b925050819055505050505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610877576000905061087c565b600190505b919050565b61088a81610838565b15610924578073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016108cc93929190610e56565b602060405180830381600087803b1580156108e657600080fd5b505af11580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e9190610ea2565b50610931565b34821461093057600080fd5b5b5050565b61093e81610838565b156109d6578073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b815260040161097e929190610ecf565b602060405180830381600087803b15801561099857600080fd5b505af11580156109ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d09190610ea2565b50610a4e565b60003373ffffffffffffffffffffffffffffffffffffffff16836040516109fc90610f29565b60006040518083038185875af1925050503d8060008114610a39576040519150601f19603f3d011682016040523d82523d6000602084013e610a3e565b606091505b5050905080610a4c57600080fd5b505b5050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a8282610a57565b9050919050565b610a9281610a77565b8114610a9d57600080fd5b50565b600081359050610aaf81610a89565b92915050565b600060208284031215610acb57610aca610a52565b5b6000610ad984828501610aa0565b91505092915050565b6000819050919050565b610af581610ae2565b82525050565b6000602082019050610b106000830184610aec565b92915050565b610b1f81610a77565b82525050565b6000602082019050610b3a6000830184610b16565b92915050565b60008115159050919050565b610b5581610b40565b8114610b6057600080fd5b50565b600081359050610b7281610b4c565b92915050565b610b8181610ae2565b8114610b8c57600080fd5b50565b600081359050610b9e81610b78565b92915050565b60008060408385031215610bbb57610bba610a52565b5b6000610bc985828601610b63565b9250506020610bda85828601610b8f565b9150509250929050565b60008060408385031215610bfb57610bfa610a52565b5b6000610c0985828601610b8f565b9250506020610c1a85828601610b8f565b9150509250929050565b600081519050610c3381610b78565b92915050565b600060208284031215610c4f57610c4e610a52565b5b6000610c5d84828501610c24565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ca082610ae2565b9150610cab83610ae2565b925082821015610cbe57610cbd610c66565b5b828203905092915050565b6000610cd482610ae2565b9150610cdf83610ae2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d1457610d13610c66565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610d5982610ae2565b9150610d6483610ae2565b925082610d7457610d73610d1f565b5b828204905092915050565b600082825260208201905092915050565b7f426164206c697175696469747920726174696f00000000000000000000000000600082015250565b6000610dc6601383610d7f565b9150610dd182610d90565b602082019050919050565b60006020820190508181036000830152610df581610db9565b9050919050565b6000610e0782610ae2565b9150610e1283610ae2565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e4b57610e4a610c66565b5b828202905092915050565b6000606082019050610e6b6000830186610b16565b610e786020830185610b16565b610e856040830184610aec565b949350505050565b600081519050610e9c81610b4c565b92915050565b600060208284031215610eb857610eb7610a52565b5b6000610ec684828501610e8d565b91505092915050565b6000604082019050610ee46000830185610b16565b610ef16020830184610aec565b9392505050565b600081905092915050565b50565b6000610f13600083610ef8565b9150610f1e82610f03565b600082019050919050565b6000610f3482610f06565b915081905091905056fea2646970667358221220bac9fbb8df09bd4d5219fafd294d801688a3113f8204c87760e4e36db20b220f64736f6c63430008090033";

type FSwapPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FSwapPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FSwapPool__factory extends ContractFactory {
  constructor(...args: FSwapPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FSwapPool> {
    return super.deploy(
      _token0,
      _token1,
      overrides || {}
    ) as Promise<FSwapPool>;
  }
  override getDeployTransaction(
    _token0: PromiseOrValue<string>,
    _token1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token0, _token1, overrides || {});
  }
  override attach(address: string): FSwapPool {
    return super.attach(address) as FSwapPool;
  }
  override connect(signer: Signer): FSwapPool__factory {
    return super.connect(signer) as FSwapPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FSwapPoolInterface {
    return new utils.Interface(_abi) as FSwapPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FSwapPool {
    return new Contract(address, _abi, signerOrProvider) as FSwapPool;
  }
}
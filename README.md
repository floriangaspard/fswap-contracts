# About

This project contains solidity contracts for an experimental decentralized cryptocurrency exchange.

# Getting started

## Running scripts

Follow these instructions to deploy on a local node

1. Start a local node

```
npx hardhat node
```

2. Deploy token

```
npx hardhat run --network localhost scripts/deployToken.ts
```

3. Deploy pool
   Tokens addresses must be defined in scripts/deployPool.ts

```
npx hardhat run --network localhost scripts/deployPool.ts
```

# Contact

floriangaspard.fg@gmail.com

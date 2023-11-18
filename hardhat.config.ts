import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-ethers'

export default {
    solidity: '0.8.9',
    networks: {
        localhost: {
            url: 'http://127.0.0.1:7545',
        },
        sepolia: {
            url: 'https://eth-sepolia.g.alchemy.com/v2/vPBqSx5098yfObH6Gg3hud5qg9hW8Fum',
            accounts: [
                'f7996206ca9d2c8a7efff300c6a24d4188cc57cb560b36229626ca52e255d7da',
            ],
        },
    },
    etherscan: {
        apiKey: 'CEVUJNBYCT9RK1VFM281X2IV6YI5BEWDPW',
    },
}

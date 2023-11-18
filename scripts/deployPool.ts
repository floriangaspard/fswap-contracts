import { ethers } from 'hardhat'

async function main() {
    await deployPool(
        '0x0000000000000000000000000000000000000000',
        '0x9aDC6ead726BA71738549A5741e9da2b16cA869E'
    )
}

async function deployPool(token0: string, token1: string) {
    const poolDeploy = await ethers.getContractFactory('FSwapPool')

    const pool = await poolDeploy.deploy(token0, token1)

    await pool.deployed()

    console.log(`Pool deployed to ${pool.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})

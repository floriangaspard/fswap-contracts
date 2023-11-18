import { ethers } from 'hardhat'

async function main() {
    await deployToken()
}

async function deployToken() {
    const initialSupply = 6666666n * 10n ** 18n
    const FToken = await ethers.getContractFactory('FToken')
    const ftoken = await FToken.deploy(initialSupply)

    await ftoken.deployed()

    console.log(
        `FToken with ${initialSupply} supply deployed to ${ftoken.address}`
    )

    return ftoken
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})

import { BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import { ethers } from 'hardhat'
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers')
const { expect } = require('chai')

describe('FSwapPool contract', function () {
    async function deployTokenFixture() {
        const FSwapPoolFact = await ethers.getContractFactory('FSwapPool')
        const FTokenFact = await ethers.getContractFactory('FToken')
        const GCoinFact = await ethers.getContractFactory('GCoin')

        const [owner, addr1, addr2] = await ethers.getSigners()

        const FToken = await FTokenFact.deploy(parseEther('666666'))
        await FToken.deployed()

        await FToken.approve(addr1.address, parseEther('100'))
        await FToken.transfer(addr1.address, parseEther('100'))

        await FToken.approve(addr2.address, parseEther('100'))
        await FToken.transfer(addr2.address, parseEther('100'))

        const GCoin = await GCoinFact.deploy(parseEther('7777777'))
        await GCoin.deployed()

        await GCoin.approve(addr1.address, parseEther('100'))
        await GCoin.transfer(addr1.address, parseEther('100'))

        await GCoin.approve(addr2.address, parseEther('100'))
        await GCoin.transfer(addr2.address, parseEther('100'))

        const FSwapPool1 = await FSwapPoolFact.deploy(
            '0x0000000000000000000000000000000000000000',
            FToken.address
        )
        await FSwapPool1.deployed()

        const FSwapPool2 = await FSwapPoolFact.deploy(
            FToken.address,
            GCoin.address
        )
        await FSwapPool2.deployed()

        return { FToken, GCoin, FSwapPool1, FSwapPool2, owner, addr1, addr2 }
    }

    interface SwapParameters {
        isToken0: boolean
        amount: BigNumber
    }

    async function SwapPool1(parameters: SwapParameters) {
        const { FToken, FSwapPool1, addr1 } = await loadFixture(
            deployTokenFixture
        )

        await FToken.connect(addr1).approve(
            FSwapPool1.address,
            parseEther('100')
        )
        await FSwapPool1.connect(addr1).deposit(
            parseEther('1'),
            parseEther('10'),
            {
                value: parseEther('1'),
            }
        )

        var b0 = BigInt(await FSwapPool1.balance0())
        var b1 = BigInt(await FSwapPool1.balance1())
        var liq = BigInt(await FSwapPool1.liquidity())
        var toSwap = parameters.amount.toBigInt()

        if (parameters.isToken0) {
            var b1After = liq / (b0 + toSwap)
            var b0After = b0 + toSwap
        } else {
            var b0After = liq / (b1 + toSwap)
            var b1After = b1 + toSwap
        }

        //swap
        await FSwapPool1.connect(addr1).swap(
            parameters.isToken0,
            parameters.amount,
            {
                value: parameters.amount,
            }
        )

        // balances after swap
        expect(await FSwapPool1.balance0()).to.equal(b0After)
        expect(await FSwapPool1.balance1()).to.equal(b1After)
        expect(await FSwapPool1.liquidity()).to.equal(liq)
    }

    async function SwapPool2(parameters: SwapParameters) {
        const { FToken, GCoin, FSwapPool2, addr1 } = await loadFixture(
            deployTokenFixture
        )

        await FToken.connect(addr1).approve(
            FSwapPool2.address,
            parameters.amount.mul(10)
        )
        await GCoin.connect(addr1).approve(
            FSwapPool2.address,
            parameters.amount.mul(10)
        )

        await FSwapPool2.connect(addr1).deposit(
            parameters.amount,
            parameters.amount
        )

        var b0 = BigInt(await FSwapPool2.balance0())
        var b1 = BigInt(await FSwapPool2.balance1())
        var liq = BigInt(await FSwapPool2.liquidity())
        var toSwap = parameters.amount.toBigInt()

        if (parameters.isToken0) {
            var b1After = liq / (b0 + toSwap)
            var b0After = b0 + toSwap
        } else {
            var b0After = liq / (b1 + toSwap)
            var b1After = b1 + toSwap
        }

        //swap
        await FSwapPool2.connect(addr1).swap(parameters.isToken0, toSwap, {
            value: parameters.amount,
        })

        // balances after swap
        expect(await FSwapPool2.balance0()).to.equal(b0After)
        expect(await FSwapPool2.balance1()).to.equal(b1After)
        expect(await FSwapPool2.liquidity()).to.equal(liq)
    }

    it('Deposit ETH and FTK to pool', async function () {
        const { FToken, FSwapPool1, addr1, addr2 } = await loadFixture(
            deployTokenFixture
        )

        await FToken.connect(addr1).approve(FSwapPool1.address, 2000)
        await FToken.connect(addr2).approve(FSwapPool1.address, 2000)

        await FSwapPool1.connect(addr1).deposit(10, 2, { value: 10 })

        expect(await FSwapPool1.balance0()).to.equal(10)
        expect(await FSwapPool1.balance1()).to.equal(2)
        expect(await FSwapPool1.liquidity()).to.equal(20)
        expect(await FSwapPool1.providers(addr1.address)).to.equal(20)

        await FSwapPool1.connect(addr1).deposit(30, 6, { value: 30 })

        expect(await FSwapPool1.liquidity()).to.equal(200)
        expect(await FSwapPool1.providers(addr1.address)).to.equal(200)

        await FSwapPool1.connect(addr2).deposit(20, 4, { value: 20 })
        expect(await FSwapPool1.liquidity()).to.equal(280)
        expect(await FSwapPool1.providers(addr1.address)).to.equal(200)
        expect(await FSwapPool1.providers(addr2.address)).to.equal(80)
    })

    it('Deposit ETH and FTK to pool, bad liquidity ratio', async function () {
        const { FToken, FSwapPool1, addr1 } = await loadFixture(
            deployTokenFixture
        )

        await FToken.connect(addr1).approve(
            FSwapPool1.address,
            parseEther('100')
        )
        await FSwapPool1.connect(addr1).deposit(
            parseEther('2'),
            parseEther('10'),
            { value: parseEther('2') }
        )

        expect(await FSwapPool1.balance0()).to.equal(parseEther('2'))
        expect(await FSwapPool1.balance1()).to.equal(parseEther('10'))
        expect(await FSwapPool1.liquidity()).to.equal(
            parseEther('2').mul(parseEther('10'))
        )
        expect(await FSwapPool1.providers(addr1.address)).to.equal(
            parseEther('2').mul(parseEther('10'))
        )

        await expect(
            FSwapPool1.connect(addr1).deposit(
                parseEther('10'),
                parseEther('2'),
                { value: parseEther('10') }
            )
        ).to.be.revertedWith('Bad liquidity ratio')
        expect(await FSwapPool1.providers(addr1.address)).to.equal(
            parseEther('2').mul(parseEther('10'))
        )

        await expect(
            FSwapPool1.connect(addr1).deposit(
                parseEther('2'),
                parseEther('5'),
                { value: parseEther('2') }
            )
        ).to.be.revertedWith('Bad liquidity ratio')
        expect(await FSwapPool1.providers(addr1.address)).to.equal(
            parseEther('2').mul(parseEther('10'))
        )
    })

    it('Deposit GCO and FTK to pool', async function () {
        const { FToken, GCoin, FSwapPool2, addr1 } = await loadFixture(
            deployTokenFixture
        )

        await FToken.connect(addr1).approve(FSwapPool2.address, 2000)
        await GCoin.connect(addr1).approve(FSwapPool2.address, 2000)
        await FSwapPool2.connect(addr1).deposit(10, 1)

        expect(await FSwapPool2.balance0()).to.equal(10)
        expect(await FSwapPool2.balance1()).to.equal(1)
        expect(await FSwapPool2.liquidity()).to.equal(10)
    })

    it('Swap ETH for FTK', async function () {
        await SwapPool1({ amount: parseEther('3'), isToken0: true })
    })

    it('Swap FTK for ETH', async function () {
        await SwapPool1({ amount: parseEther('3'), isToken0: false })
    })

    it('Swap GCO for FTK', async function () {
        await SwapPool2({ amount: parseEther('0.1'), isToken0: true })
    })

    it('Swap FTK for GCO', async function () {
        await SwapPool2({ amount: parseEther('0.1'), isToken0: false })
    })
})

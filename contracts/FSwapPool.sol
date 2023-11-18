// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract FSwapPool {
    address public immutable token0;
    address public immutable token1;

    uint256 public liquidity;
    mapping(address => uint256) public providers;

    constructor(address _token0, address _token1) {
        token0 = _token0;
        token1 = _token1;
        liquidity = 0;
    }

    function deposit(uint256 _amount0, uint256 _amount1) public payable {
        uint256 b0 = isERC20(token0) ? balance0() : balance0() - _amount0;
        uint256 b1 = isERC20(token1) ? balance1() : balance1() - _amount1;

        if (b0 != 0 && b1 != 0) {
            if (b0 > b1)
                require(_amount0 / _amount1 == b0 / b1, 'Bad liquidity ratio');
            else require(_amount1 / _amount0 == b1 / b0, 'Bad liquidity ratio');
        }

        routeDeposit(_amount0, token0);
        routeDeposit(_amount1, token1);

        uint256 addedLiquidity = _amount0 * _amount1;
        liquidity += addedLiquidity;

        providers[msg.sender] += addedLiquidity;
    }

    function routeDeposit(uint256 _amount, address _token) internal {
        if (isERC20(_token)) {
            IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        } else {
            require(_amount == msg.value);
        }
    }

    function routeWithdraw(uint256 _amount, address _token) internal {
        if (isERC20(_token)) {
            IERC20(_token).transfer(msg.sender, _amount);
        } else {
            (bool success, ) = msg.sender.call{value: _amount}('');
            require(success);
        }
    }

    function balance0() public view returns (uint256) {
        if (isERC20(token0)) {
            return IERC20(token0).balanceOf(address(this));
        }
        return address(this).balance;
    }

    function balance1() public view returns (uint256) {
        if (isERC20(token1)) {
            return IERC20(token1).balanceOf(address(this));
        }
        return address(this).balance;
    }

    function isERC20(address _token) internal pure returns (bool) {
        if (_token == address(0x0000000000000000000000000000000000000000)) {
            return false;
        }
        return true;
    }

    function swap(bool _isToken0, uint256 _amount) public payable {
        require(_amount != 0);

        uint256 b0 = isERC20(token0) ? balance0() : _isToken0
            ? balance0() - _amount
            : balance0();
        uint256 b1 = isERC20(token1) ? balance1() : !_isToken0
            ? balance1() - _amount
            : balance1();

        if (_isToken0) {
            uint256 toPay = b1 - (liquidity / (b0 + _amount));
            routeDeposit(_amount, token0);
            routeWithdraw(toPay, token1);
        } else {
            uint256 toPay = b0 - (liquidity / (b1 + _amount));
            routeDeposit(_amount, token1);
            routeWithdraw(toPay, token0);
        }
    }
}

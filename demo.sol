// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./interfaces/IZDemo.sol";

contract demo is IZDemo {
    uint c;
    function add(uint a, uint b) 
        external
    {
        c = a + b;
    }
}
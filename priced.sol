// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.1 <0.9.0;
contract priced {
    // Modifiers can receive arguments:
    modifier costs(uint price) {
        if (msg.value >= price) {
            _;
        }
    }
}

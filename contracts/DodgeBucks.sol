// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DodgeBucks {
    string public name = "DodgeBucks";
    string public symbol = "DBUCKS";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000000 * (10 ** uint256(decimals));
    mapping(address => uint256) public balanceOf;

    address public owner = 0x373c989C2721963264932BF266605C8c7f503f65;

    constructor() {
        balanceOf[owner] = totalSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        return true;
    }
}

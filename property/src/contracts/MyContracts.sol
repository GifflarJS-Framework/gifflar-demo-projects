pragma solidity 0.6.0;

contract Contract1{
//VARIABLES
address payable public owner = 0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef;
string public propertyAddress = "Address property 1";
uint256 public number = 12;
bool public forSale = false;
uint256 public priceInCrypto = 2000000000000000000000;


//FUNCTIONS
function setowner(address payable newowner) public{
owner = newowner;
}

function setpriceInCrypto(uint256 newpriceInCrypto) public{
priceInCrypto = newpriceInCrypto;
}

function buy(address payable _payer) public payable{
require(msg.value == priceInCrypto, "Invalid amount");
owner.transfer(msg.value);
forSale = false;
owner = _payer;
}

}

pragma solidity 0.6.0;

contract Contract2{
//VARIABLES
address payable public owner = 0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef;
string public propertyAddress = "Address property 1";
uint256 public number = 12;
string public builtDate = "12/02/1996";
bool public forSale = false;
uint256 public priceInCrypto = 2000000000000000000000;


//FUNCTIONS
function setowner(address payable newowner) public{
owner = newowner;
}

function setpriceInCrypto(uint256 newpriceInCrypto) public{
priceInCrypto = newpriceInCrypto;
}

function buy(address payable _payer) public payable{
require(msg.value == priceInCrypto, "Invalid amount");
owner.transfer(msg.value);
forSale = false;
owner = _payer;
}

}

pragma solidity 0.6.0;

contract Contract3{
//VARIABLES
address payable public owner = 0x8BB0516Ed242C2e1EDD507f51497fFF83CbAA5ef;
string public propertyAddress = "Address property 1";
uint256 public number = 12;
string public builtDate = "12/02/1996";
bool public forSale = false;
uint256 public priceInCrypto = 2000000000000000000000;
address public renter;


//FUNCTIONS
function setowner(address payable newowner) public{
owner = newowner;
}

function setpriceInCrypto(uint256 newpriceInCrypto) public{
priceInCrypto = newpriceInCrypto;
}

function buy(address payable _payer) public payable{
require(msg.value == priceInCrypto, "Invalid amount");
owner.transfer(msg.value);
forSale = false;
owner = _payer;
}

function setRenter(address newRenter) public{
renter = newRenter;
}

function payRent(address _renter) public payable{
require(_renter == renter, "Payer is not renter.");
owner.transfer(msg.value);
}

}


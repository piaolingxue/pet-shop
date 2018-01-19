// additional information that only compiler care about
pragma solidity^0.4.17;

contract Adoption {
  // address are ethereum address, stored as 20 byte values.
  // every account and smart contract on the ethereum blockchain has an address
  // and can send or receive ether to and from the address
  address[16] public adopters;

  // adopt a pet
  function adopt(uint petId) public returns (uint) {
    require(petId >= 0 && petId <= 15);
    adopters[petId] = msg.sender;
    return petId;
  }

  // retriving the adopters
  function getAdopters() public view returns (address[16]) {
    return adopters;
  }


}

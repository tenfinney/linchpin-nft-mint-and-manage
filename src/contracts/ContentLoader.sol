pragma solidity ^0.5.0;

contract ContentLoader {
  string public name;
  string public contentHash;


    constructor() public {
        name = "Web3vm Content Loader";
    }
  function setContent(string memory _contentHash) public {
    contentHash = _contentHash;

  }

  function getContent() public view returns (string memory) {
    return contentHash;
  }
}

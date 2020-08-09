pragma solidity ^0.5.0;

contract ClaimManager {
    string public name;
    uint public claimCount = 0;
    mapping(uint => Claim) public claims;

    struct Claim {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    event ClaimCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ClaimPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "WorldLaw Claim Manager";
    }

    function createClaim(string memory _name, uint _price) public {
        // Require a valid name
        require(bytes(_name).length > 0);
        // Require a valid price
        require(_price > 0);
        // Increment claim count
        claimCount ++;
        // Create the claim
        claims[claimCount] = Claim(claimCount, _name, _price, msg.sender, false);
        // Trigger an event
        emit ClaimCreated(claimCount, _name, _price, msg.sender, false);
    }

    function purchaseClaim(uint _id) public payable {
        // Fetch the claim
        Claim memory _claim = claims[_id];
        // Fetch the owner
        address payable _seller = _claim.owner;
        // Make sure the claim has a valid id
        require(_claim.id > 0 && _claim.id <= claimCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= _claim.price);
        // Require that the claim has not been purchased already
        require(!_claim.purchased);
        // Require that the buyer is not the seller
        require(_seller != msg.sender);
        // Transfer ownership to the buyer
        _claim.owner = msg.sender;
        // Mark as purchased
        _claim.purchased = true;
        // Update the claim
        claims[_id] = _claim;
        // Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        // Trigger an event
        emit ClaimPurchased(claimCount, _claim.name, _claim.price, msg.sender, true);
    }
}

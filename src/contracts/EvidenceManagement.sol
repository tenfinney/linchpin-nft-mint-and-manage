pragma solidity ^0.5.0;

contract EvidenceManagement {
    string public name;
    uint public postCount = 0;
    mapping(uint => Post) public posts;

    struct Post {
        uint id;
        string content;
        uint txAmount;
        address payable author;
    }

    event PostCreated(
        uint id,
        string content,
        uint txAmount,
        address payable author
    );

    event PostTxd(
        uint id,
        string content,
        uint txAmount,
        address payable author
    );

    constructor() public {
        name = "WorldLaw Evidence and Claim Management";
    }

    function createPost(string memory _content) public {
        // Require valid content
        require(bytes(_content).length > 0);
        // Increment the post count
        postCount ++;
        // Create the post
        posts[postCount] = Post(postCount, _content, 0, msg.sender);
        // Trigger event
        emit PostCreated(postCount, _content, 0, msg.sender);
    }

    function txAmtPost(uint _id) public payable {
        // Make sure the id is valid
        require(_id > 0 && _id <= postCount);
        // Fetch the post
        Post memory _post = posts[_id];
        // Fetch the author
        address payable _author = _post.author;
        // Pay the author by sending them Ether
        address(_author).transfer(msg.value);
        // Incremet the tip amount
        _post.txAmount = _post.txAmount + msg.value;
        // Update the post
        posts[_id] = _post;
        // Trigger an event
        emit PostTxd(postCount, _post.content, _post.txAmount, _author);
    }
}

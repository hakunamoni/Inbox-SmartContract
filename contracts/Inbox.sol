pragma solidity ^0.4.26;

contract Inbox {
    string public message;
    
    function Inbox(string intialMessage) public{
        message = intialMessage;
    }
    
    function setMessage(string newMessage) public{
        message = newMessage;
    }
}
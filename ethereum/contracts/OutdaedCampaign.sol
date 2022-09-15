pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint256 minimum, string eventName) public {
        address newCampaign = new Campaign(minimum, eventName, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Tickets {
    // using SafeMath for uint256;

    struct Ticket {
        string eventName;
        address showContractAddress;
    }

    mapping(address => Ticket[]) public userTickets;

    function createTicket(
        string memory eventName,
        address showContractAddress,
        uint256 price,
        address _to,
        address _toAlso
    ) public payable {
        Ticket memory newTicket = Ticket({
            eventName: eventName,
            showContractAddress: showContractAddress
        });

        require(msg.value > price);
        _to.call.value((msg.value * 50) / 100).gas(23000)();
        _toAlso.call.value((msg.value * 50) / 100).gas(23000)();

        userTickets[msg.sender].push(newTicket);
    }

    function getTicketsCount(address sender) public view returns (uint256) {
        return userTickets[sender].length;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    string eventName;
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(
        uint256 minimum,
        string name,
        address creator
    ) public {
        manager = creator;
        minimumContribution = minimum;
        eventName = name;
    }

    // function contribute() public payable {
    //     require(msg.value > minimumContribution);

    //     approvers[msg.sender] = true;
    //     approversCount++;
    // }

    function contribute(address _to, address _toAlso) public payable {
        require(msg.value >= minimumContribution);
        _to.call.value((msg.value * 50) / 100).gas(23000)();
        _toAlso.call.value((msg.value * 50) / 100).gas(23000)();
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (
            uint256,
            string,
            uint256,
            uint256,
            uint256,
            address
        )
    {
        return (
            minimumContribution,
            eventName,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}

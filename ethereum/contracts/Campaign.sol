pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(
        uint256 minimum,
        string eventLocation,
        string bandName,
        uint32 amountOfPayees,
        address[] payeeAddresses,
        uint256[] payeePercentages,
        string eventTime
    ) public {
        address newCampaign = new Campaign(
            minimum,
            eventLocation,
            bandName,
            amountOfPayees,
            msg.sender,
            payeeAddresses,
            payeePercentages,
            eventTime
        );

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
        uint256 price,
        string eventName,
        address[] payeeAddresses,
        uint256[] payeePercentages,
        address showContractAddress
    ) public payable {
        Ticket memory newTicket = Ticket({
            eventName: eventName,
            showContractAddress: showContractAddress
        });

        require(msg.value == price);
        for (uint256 i = 0; i < payeeAddresses.length; i++) {
            payeeAddresses[i]
                .call
                .value((msg.value * payeePercentages[i]) / 100)
                .gas(23000)();
        }

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
    string showName;
    string eventLocation;
    uint32 amountPayees;
    address[] payeeAddresses;
    uint256[] percentageAmounts;
    string eventTimeInfo;
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(
        uint256 minimum,
        string location,
        string newEventName,
        uint32 payees,
        address creator,
        address[] payeeArray,
        uint256[] percentageArray,
        string time
    ) public {
        minimumContribution = minimum;
        manager = creator;
        eventLocation = location;
        showName = newEventName;
        amountPayees = payees;
        payeeAddresses = payeeArray;
        percentageAmounts = percentageArray;
        eventTimeInfo = time;
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
            address,
            string,
            string,
            uint256,
            address[],
            uint256[],
            string
        )
    {
        return (
            // minimumContribution,
            // eventName,
            // this.balance,
            // requests.length,
            // approversCount,
            // manager

            minimumContribution,
            manager,
            eventLocation,
            showName,
            amountPayees,
            payeeAddresses,
            percentageAmounts,
            eventTimeInfo
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}

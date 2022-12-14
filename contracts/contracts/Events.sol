// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Events {
    struct CreateEvent {
        bytes32 eventId;
        string eventName;
        address eventOwner;
        uint256 eventTimestamp;
        uint256 fees;
        uint256 maxCapacity;
        address[] confirmedRSVPs;
        address[] claimedRSVPs;
        bool paidOut;
    }
    event NewEventCreated(
        bytes32 eventId,
        address creatorAddress,
        uint256 eventTimestamp,
        uint256 maxCapacity,
        uint256 fees,
        string eventName
    );

    event NewRSVP(bytes32 eventId, address attendeeAddress);
    event ConfirmedAttendee(bytes32 eventId, address attendeeAddress);
    event DepositsPaidOut(bytes32 eventId);

    mapping(bytes32 => CreateEvent) public idToEvent;

    function createNewEvent(
        uint256 eventTimestamp,
        uint256 fees,
        uint256 maxCapacity,
        string calldata eventName
    ) external {
        bytes32 eventId = keccak256(
            abi.encodePacked(
                msg.sender,
                address(this),
                eventTimestamp,
                fees,
                maxCapacity
            )
        );

        address[] memory confirmedRSVPs;
        address[] memory claimedRSVPs;

        idToEvent[eventId] = CreateEvent(
            eventId,
            eventName,
            msg.sender,
            eventTimestamp,
            fees,
            maxCapacity,
            confirmedRSVPs,
            claimedRSVPs,
            false
        );

        emit NewEventCreated(
            eventId,
            msg.sender,
            eventTimestamp,
            maxCapacity,
            fees,
            eventName
        );
    }

    function createNewRSVP(bytes32 eventId) external payable {
        CreateEvent storage myEvent = idToEvent[eventId];

        require(msg.value == myEvent.fees, "NOT ENOUGH");

        require(block.timestamp <= myEvent.eventTimestamp, "ALREADY HAPPENED");

        require(
            myEvent.confirmedRSVPs.length < myEvent.maxCapacity,
            "THIS EVENT HAS REACHED MAX CAPACITY"
        );

        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            require(
                myEvent.confirmedRSVPs[i] != msg.sender,
                "ALREADY CONFIRMED"
            );
        }

        myEvent.confirmedRSVPs.push(payable(msg.sender));

        emit NewRSVP(eventId, msg.sender);
    }

    function confirmAttendee(bytes32 eventId, address attendee) public {
        CreateEvent storage myEvent = idToEvent[eventId];

        require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

        address rsvpConfirm;

        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            if (myEvent.confirmedRSVPs[i] == attendee) {
                rsvpConfirm = myEvent.confirmedRSVPs[i];
            }
        }
        require(rsvpConfirm == attendee, "NO RSVP TO CONFIRM");

        for (uint8 i = 0; i < myEvent.claimedRSVPs.length; i++) {
            require(myEvent.claimedRSVPs[i] != attendee, "ALREADY CLAIMED");
        }

        require(myEvent.paidOut == false, "ALREADY PAID OUT");

        myEvent.claimedRSVPs.push(attendee);

        (bool sent, ) = attendee.call{value: myEvent.fees}("");

        if (!sent) {
            myEvent.claimedRSVPs.pop();
        }

        require(sent, "FAILED TO SEND ETHER");

        emit ConfirmedAttendee(eventId, attendee);
    }

    function confirmAllAttendees(bytes32 eventId) external {
        CreateEvent memory myEvent = idToEvent[eventId];

        require(msg.sender == myEvent.eventOwner, "NOT AUTHORIZED");

        for (uint8 i = 0; i < myEvent.confirmedRSVPs.length; i++) {
            confirmAttendee(eventId, myEvent.confirmedRSVPs[i]);
        }
    }

    function withdrawUnclaimedDeposits(bytes32 eventId, address recipient)
        external
    {
        CreateEvent memory myEvent = idToEvent[eventId];

        require(!myEvent.paidOut, "ALREADY PAID");

        require(
            block.timestamp >= (myEvent.eventTimestamp + 7 days),
            "TOO EARLY"
        );

        require(msg.sender == myEvent.eventOwner, "MUST BE EVENT OWNER");

        uint256 unclaimed = myEvent.confirmedRSVPs.length -
            myEvent.claimedRSVPs.length;

        uint256 payout = unclaimed * myEvent.fees;

        myEvent.paidOut = true;

        (bool sent, ) = recipient.call{value: payout}("");

        if (!sent) {
            myEvent.paidOut = false;
        }

        require(sent, "FAILED TO SEND ETHER");
        emit DepositsPaidOut(eventId);
    }
}

//0x5FbDB2315678afecb367f032d93F642f64180aa3

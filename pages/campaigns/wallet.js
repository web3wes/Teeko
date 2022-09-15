import React, { Component, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import Ticket from "../../ethereum/tickets";
import TicketRow from "../../components/TicketRow";
import web3 from "../../ethereum/web3";
import QRCode from "react-qr-code";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    // const [count, setCount] = useState(0);
    const ticketsCount = await Ticket.methods
      .getTicketsCount(props.query.address)
      .call();
    // const approversCount = await campaign.methods.approversCount().call();
    const water = "Water";
    const tickets = await Promise.all(
      Array(parseInt(ticketsCount))
        .fill()
        .map((element, index) => {
          return Ticket.methods.userTickets(props.query.address, index).call();
        })
    );

    return { tickets, ticketsCount, water };

    // 0x544aB7D5741863278E85383B933A7e15Cb7e809f
  }

  handleClick() {
    console.log("this is:", this);
  }

  renderRows() {
    // <input ref={this.props.inputRef} />;
    return this.props.tickets.map((tickets, index) => {
      return (
        <a
          href={
            "https://mumbai.polygonscan.com/tx/0x12dfa029c42bd72932c9dac3a7cfe7de138fcb794e01dcd18ff37e2e5f3c8f51"
          }
        >
          <TicketRow
            key={index}
            id={index}
            address={tickets.showContractAddress}
            show={tickets.eventName}
            onClick={console.log("This")}
            // c={() => this.handleClick}
            // address={this.props.address}
            // approversCount={this.props.approversCount}
          />
        </a>
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        {/* <h3>Requests</h3> */}
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            {/* <Button primary floated="right" style={{ marginBottom: 10 }}>
              Add Request
            </Button> */}
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>show</HeaderCell>
              <HeaderCell>address</HeaderCell>
              {/* <HeaderCell>Amount</HeaderCell> */}
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>

        {/* <div>Found {this.props.ticketsCount} test requests.</div> */}
        <div
          style={{
            color: "white",
            backgroundColor: "black",
            marginBottom: "20px",
          }}
        >
          Current ticket's QRCode
        </div>
        <div>
          <a
            href={
              "https://mumbai.polygonscan.com/tx/0x12dfa029c42bd72932c9dac3a7cfe7de138fcb794e01dcd18ff37e2e5f3c8f51"
            }
          >
            <QRCode
              className="ticket-qr"
              size="300"
              value={
                "https://rinkeby.etherscan.io/address/0x807A21f7D22E1Dba5b878661BD455F0d31D62858"
              }
            />
          </a>
        </div>
      </Layout>
    );
  }
}

export default RequestIndex;

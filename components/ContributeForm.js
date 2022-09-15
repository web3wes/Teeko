import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import Ticket from "../ethereum/tickets";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    console.log("Tickets");

    const summary = await campaign.methods.getSummary().call();

    try {
      const accounts = await web3.eth.getAccounts();
      // price = await campaign.methods.getSummary();
      await Ticket.methods
        .createTicket(
          summary[0],
          summary[3],
          summary[5],
          summary[6],
          this.props.address
        )
        .send({
          from: accounts[0],
          value: summary[0],
          // web3.utils.toWei(summary[0], "ether"),
        });
      // Router.replaceRoute(`/campaigns/wallet`);
      Router.replaceRoute(`/shows`);
    } catch (err) {}
  };

  render() {
    return (
      <Form id="buy-button-id" onSubmit={this.onSubmit}>
        <button class="buy-button" onSubmit={this.onSubmit}>
          Buy tickets
        </button>
      </Form>
    );
  }
}

export default ContributeForm;

import React, { Component } from "react"
import { Card, Grid, GridRow, Button } from "semantic-ui-react"
import Layout from "../../components/Layout"
// import Qrcode from "../../components/qrcode";
import Campaign from "../../ethereum/campaign"
import web3 from "../../ethereum/web3"
import ContributeForm from "../../components/ContributeForm"
// import React from "react";
import ReactDOM from "react-dom"
import QRCode from "react-qr-code"
import { Link } from "../../routes"

const CampaignShow = (props) => {
  // class CampaignShow extends Component {
  // static async getInitialProps(props) {
  //   const campaign = await Campaign(
  //     props.query.address
  //       ? props.query.address
  //       : "0x807A21f7D22E1Dba5b878661BD455F0d31D62858"
  //   )

  //   const summary = await campaign.methods.getSummary().call()

  //   this.imageRef = React.createRef()

  //   return {
  //     address: props.query.address,
  //     minimumContribution: summary[0],
  //     manager: summary[1],
  //     eventLocation: summary[2],
  //     bandName: summary[3],
  //     payeeCount: summary[4],
  //     payeeAddresses: summary[5],
  //     payeePercentages: summary[6],
  //     showTime: summary[7],
  //   }
  // }

  console.log(props)

  function renderCards() {
    const {
      address,
      minimumContribution,
      manager,
      eventLocation,
      bandName,
      payeeCount,
      payeeAddresses,
      payeePercentages,
      showTime,
    } = props

    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: eventLocation,
        meta: "Name of Show",
        description: "This is the gig related to the this ticket",
        style: { overflowWrap: "break-word" },
      },

      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: bandName,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },
      {
        header: showTime,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
    ]

    return <Card.Group items={items} />
  }

  // render() {
  // var qrcode
  //     qrcode = qrcode
  return (
    <Layout>
      <h3>Campaign Show</h3>
      <div>
        <Grid class="test">
          <Grid.Column width={12} height={2}>
            {renderCards()}
          </Grid.Column>
          {/* <Grid.Column width={0} height={0}> */}
          {/* <GridRow>
              {/* <ContributeForm address={this.props.address} /> */}
          {/* </GridRow> */}
          {/* <GridRow> */}
          {/* <a
                href={
                  "https://rinkeby.etherscan.io/address/" + this.props.address
                }
              >
                <QRCode
                  className="qr"
                  size="150"
                  value={
                    "https://rinkeby.etherscan.io/address/" + this.props.address
                  }
                />
              </a> */}
          {/* </GridRow> */}
          {/* </Grid.Column> */}
          {/* <Grid.Column width={3}>
          <GridRow ui small image qr >
              
            </GridRow>
            </Grid.Column> */}
        </Grid>
        <ContributeForm address={props.address} />

        <a href={"https://rinkeby.etherscan.io/address/" + props.address}>
          <QRCode
            className="qr top-right"
            size="300"
            value={"https://rinkeby.etherscan.io/address/" + props.address}
          />
        </a>
      </div>
    </Layout>
  )
}
// }

export default CampaignShow

export async function getServerSideProps(props) {
  let contractAddress = props.resolvedUrl.split("/campaigns/")[1]

  let campaign = await Campaign(contractAddress)

  let summary = await campaign.methods.getSummary().call()

  let imageRef = React.createRef()

  // return {
  //   address: props.query.address,
  //   minimumContribution: summary[0],
  //   manager: summary[1],
  //   eventLocation: summary[2],
  //   bandName: summary[3],
  //   payeeCount: summary[4],
  //   payeeAddresses: summary[5],
  //   payeePercentages: summary[6],
  //   showTime: summary[7],
  // }

  return {
    props: {
      address: props.query.address,
      minimumContribution: summary[0],
      manager: summary[1],
      eventLocation: summary[2],
      bandName: summary[3],
      payeeCount: summary[4],
      payeeAddresses: summary[5],
      payeePercentages: summary[6],
      showTime: summary[7],
    },
  }
}

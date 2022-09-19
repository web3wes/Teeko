import React, { Component } from "react"
import { Card, Button, Image } from "semantic-ui-react"
import factory from "../ethereum/factory"
import Layout from "../components/Layout"
import { Link } from "../routes"
import Connect from "../components/connect"
import { useWeb3 } from "@3rdweb/hooks"
import web3 from "../ethereum/web3"
import CampaignNew from "./campaigns/new"
import Campaign from "../ethereum/campaign"

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    // const allCampaigns = await Promise.all(
    //   Array(parseInt(campaigns.length))
    //     .fill()
    //     .map((element, index) => {
    //       let campaign = Campaign(element);
    //       return campaign.methods.getSummary().call();
    //     })
    // );

    return { campaigns }
  }

  renderRow() {
    return this.props.campaigns.map((oneCampaign) => {
      // let campaign = Campaign(oneCampaign);
      return campaign.methods.getSummary().call()
    })
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address, showName) => {
      async function get() {
        let campaign = Campaign(address)
        let oneCampaign = await campaign.methods.getSummary().call()
        console.log(oneCampaign)
        // expected output: "resolved"
      }

      get()

      return {
        Image:
          "https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a",
        // header: address,
        description: (
          <Link route={`campaigns/${address}`}>
            <div class="row">
              <div class="col-1-of-3">
                <img
                  class="show-page-image"
                  src="https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a"
                ></img>
              </div>
              <div class="col-2-of-3 break-word">
                {address}
                <p class>{address}</p>
                <p class>{address}</p>
                <button class="ui primary right floated button buy">
                  Show Details
                </button>
              </div>
            </div>
          </Link>
        ),
        fluid: true,
      }
    })
    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        {/* <div class="top-space flex flex-col text-2xl sm:text-2xl">
          <div class="flex1 row">
            <div class="col-2-of-3 scroll-y">{this.renderCampaigns()}</div>

            <div class="content blue col-1-of-3">
              <CampaignNew />
            </div>
          </div>
        </div> */}

        <div class="flex flex-col lg:flex-row lg:grid grid-cols-2 gap-4 lg:h-0 ">
          <div class="col-2-of-3 scroll-y lg:h-4/5  mt-8 ">
            {this.renderCampaigns()}
          </div>
          <CampaignNew />
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex

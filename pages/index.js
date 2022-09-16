import React, { Component } from "react"
import { Card, Button } from "semantic-ui-react"
import factory from "../ethereum/factory"
import Layout from "../components/Layout"
import { Link } from "../routes"
import Connect from "../components/connect"
import { useWeb3 } from "@3rdweb/hooks"
import web3 from "../ethereum/web3"

class CampaignIndex extends Component {
  static async getInitialProps() {
    //accounts = web3.eth.getAccounts()

    const accounts = await web3.eth.getAccounts()
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    const isBackgroundRed = true

    return { campaigns, accounts }
  }

  handleCallback = (childData) => {
    this.setState({ address: childData })
  }

  renderCampaigns() {
    console.log(this.props)

    const items = this.props.campaigns.map((address) => {
      return {
        header: "some show",
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      }
    })
    return <Card.Group items={items} />
  }

  // showAddress(){
  //   // address = this.useWeb3(address)
  //   this.props.campaigns
  // }

  // handleClick() {
  //   console.log('Click happened');
  // }

  changeBackground() {
    document.body.classList.add("grayed")
  }
  revertBackground() {
    document.body.classList.remove("grayed")
  }

  render() {
    return (
      <body>
        <header class="header w-full">
          <div class="header__text-box">
            <h1 class="heading-primary">
              <span class="heading-primary--main xs:text-2xl sm:text-3xl">
                Teeko
              </span>
              <span class="heading-primary--sub xs:text-base xs:tracking-wider sm:text-xl sm:tracking-widest">
                will show for crypto
              </span>
            </h1>

            <a href="/shows" class="btn btn--white btn--animated">
              {/* Read <Link href="/posts/first-post">this page!</Link> */} Find
              Upcoming events{" "}
            </a>
          </div>
        </header>
      </body>
    )
  }
}

export default CampaignIndex

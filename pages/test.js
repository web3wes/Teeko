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
      <Layout>
        <div
          class="white flex scroll `${isBackgroundRed}`"
          onHover={this.changeBackground}
          onMouseLeave={this.revertBackground}
        >
          <article
            class="styles__Tile-sc-1qs70fb-6 jaTUjK standoff"
            onMouseEnter={this.changeBackground}
            // onMouseOut={this.revertBackground}
          >
            <a
              href="/"
              data-testid="customLink"
              class="styles__Link-sc-5mbfao-0 irQQqi"
            >
              <div
                data-testid="preSaleInfo"
                class="styles__PreSaleInfo-sc-1qs70fb-2 gOOGEI"
              >
                <img
                  class="image"
                  src="https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a"
                ></img>
              </div>
            </a>
            <div class="styles__InfoSection-sc-1qs70fb-1 gHxutW">
              <h2
                data-testid="eventDate"
                class="styles__EventDate-sc-1qs70fb-3 gnIwmH"
              >
                THU · AUG 25 · 7:00 PM
              </h2>
              <a
                href="https://www.ticketmaster.com/duran-duran-future-past-new-york-new-york-08-25-2022/event/3B005C6D0BC628E0"
                data-testid="customLink"
                class="styles__Link-sc-5mbfao-0 irQQqi"
              >
                <h1
                  data-testid="eventName"
                  class="styles__EventTitle-sc-1qs70fb-4 dOTGiI"
                >
                  J.Cole
                </h1>
              </a>
              <p
                data-testid="eventInfo"
                class="styles__EventInfo-sc-1qs70fb-5 fmogqT"
              >
                New York, NY · Madison Square Garden
              </p>
            </div>
          </article>
          <article
            class="styles__Tile-sc-1qs70fb-6 jaTUjK standoff"
            onMouseEnter={this.changeBackground}
          >
            <a
              href="https://www.ticketmaster.com/van-morrison-philadelphia-pennsylvania-09-08-2022/event/02005C73A1C92AEE"
              data-testid="customLink"
              class="styles__Link-sc-5mbfao-0 irQQqi"
            >
              <div
                data-testid="preSaleInfo"
                class="styles__PreSaleInfo-sc-1qs70fb-2 gOOGEI"
              >
                <img src="https://media.vanityfair.com/photos/5c8d3e49faa84649abb66ed3/master/pass/sam-smith-non-binary.jpg"></img>
              </div>
            </a>
            <div class="styles__InfoSection-sc-1qs70fb-1 gHxutW">
              <h2
                data-testid="eventDate"
                class="styles__EventDate-sc-1qs70fb-3 gnIwmH"
              >
                THU · SEP 8 · 7:00 PM
              </h2>
              <a
                href="https://www.ticketmaster.com/van-morrison-philadelphia-pennsylvania-09-08-2022/event/02005C73A1C92AEE"
                data-testid="customLink"
                class="styles__Link-sc-5mbfao-0 irQQqi"
              >
                <h1
                  data-testid="eventName"
                  class="styles__EventTitle-sc-1qs70fb-4 dOTGiI"
                >
                  Sam Smith
                </h1>
              </a>
              <p
                data-testid="eventInfo"
                class="styles__EventInfo-sc-1qs70fb-5 fmogqT"
              >
                Philadelphia, PA · TD Pavilion at the Mann
              </p>
            </div>
          </article>
          <article
            class="styles__Tile-sc-1qs70fb-6 jaTUjK standoff"
            onMouseEnter={this.changeBackground}
          >
            <a
              href="https://www.ticketmaster.com/khruangbin-brooklyn-new-york-08-04-2022/event/00005C72D0A053D2"
              data-testid="customLink"
              class="styles__Link-sc-5mbfao-0 irQQqi"
            >
              <div
                data-testid="preSaleInfo"
                class="styles__PreSaleInfo-sc-1qs70fb-2 gOOGEI"
              >
                <img src="https://media.gq.com/photos/58f7eb4356a8ad0ae979ee0d/1:1/w_2467,h_2467,c_limit/Toro-y-moi-lede-2-16x9.jpg"></img>
              </div>
            </a>
            <div class="styles__InfoSection-sc-1qs70fb-1 gHxutW">
              <h2
                data-testid="eventDate"
                class="styles__EventDate-sc-1qs70fb-3 gnIwmH"
              >
                THU · AUG 4 · 7:00 PM
              </h2>
              <a
                href="https://www.ticketmaster.com/khruangbin-brooklyn-new-york-08-04-2022/event/00005C72D0A053D2"
                data-testid="customLink"
                class="styles__Link-sc-5mbfao-0 irQQqi"
              >
                <h1
                  data-testid="eventName"
                  class="styles__EventTitle-sc-1qs70fb-4 dOTGiI"
                >
                  Toro y moi
                </h1>
              </a>
              <p
                data-testid="eventInfo"
                class="styles__EventInfo-sc-1qs70fb-5 fmogqT"
              >
                Brooklyn, NY · BRIC Celebrate Brooklyn! Festival at Prospect
                Park Bandshell
              </p>
            </div>
          </article>
          <Link route={`/shows`}>
            <article
              class="styles__Tile-sc-1qs70fb-6 jaTUjK standoff"
              onMouseEnter={this.changeBackground}
              onClick={this.revertBackground}
            >
              <a
                href="https://www.americanexpress.com/us/credit-cards/features-benefits/entertainment/index.html"
                data-testid="customLink"
                class="styles__Link-sc-5mbfao-0 irQQqi"
              >
                <div
                  resource="https://spon.ticketmaster.net/amex-smart-widget/static/AmexPromoTileImage.png"
                  data-testid="promoImage"
                  class="styles__ImageContainer-sc-1qs70fb-0 styles__PromoImageContainer-sc-17spxpb-3 cjuAai kBVjtj"
                ></div>
              </a>
              <div class="styles__InfoSection-sc-1qs70fb-1 gHxutW big-picture">
                <a
                  href="https://www.americanexpress.com/us/credit-cards/features-benefits/entertainment/index.html"
                  data-testid="customLink"
                  class="styles__Link-sc-5mbfao-0 irQQqi"
                >
                  <div
                    data-testid="preSaleInfo"
                    class="styles__PreSaleInfo-sc-1qs70fb-2 gOOGEIbig-picture"
                  >
                    <img src="https://media.npr.org/assets/img/2017/10/31/sabrina%20claudio_brick-25399529b67d0f61159792c4f09b94cd1d833a1d.jpg"></img>
                  </div>
                  <p
                    data-testid="promoText"
                    class="styles__EventInfo-sc-1qs70fb-5 styles__Info-sc-17spxpb-1 fmogqT bXSjTM"
                  >
                    To view more cick here
                  </p>
                  <span class="styles__Link-sc-17spxpb-2 jHtAnZ">
                    Learn More
                  </span>
                </a>
              </div>
            </article>
          </Link>
        </div>
        <div>Adding sidebar</div>
        <button class="btn btn-blue">Button</button>
      </Layout>
    )
  }
}

// adding develop
// adding feature

export default CampaignIndex

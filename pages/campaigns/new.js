import React, { Component } from "react"
import { Form, Button, Input, Message } from "semantic-ui-react"
import Layout from "../../components/Layout"
import factory from "../../ethereum/factory"
import web3 from "../../ethereum/web3"
import { Router } from "../../routes"
import Payees from "../../components/Payees"

class CampaignNew extends Component {
  state = {
    ticketPrice: "",
    bandName: "",
    numberOfPayees: "",
    location: "",
    allArray: [""],
    percentageArray: [""],
    showTime: "",
    errorMessage: "",
    loading: false,
    payees: "",
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({ loading: true, errorMessage: "" })

    try {
      const accounts = await web3.eth.getAccounts()
      await factory.methods
        .createCampaign(
          this.state.ticketPrice,
          this.state.location,
          this.state.bandName,
          this.state.payees,
          this.state.allArray,
          this.state.percentageArray,
          this.state.showTime
        )
        .send({
          from: accounts[0],
        })

      Router.pushRoute("/")
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }
    this.setState({ loading: false })
  }

  // let  handlePayee(e) => {
  //     e.preventDefault();
  //     console.log(this.state.allArray);
  //   }

  handlePayee = (a) => {
    a.preventDefault()
    console.log(this.state.allArray)
  }
  Makefields = (e) => {
    if (e > 0) {
      const generateArrays = Array.from(Array(Number(e)).keys())
      // this.setState({ payees: e });
      console.log("Making Inputs")

      // function passArray(e, payee, payees) {
      //   let allArray = [];
      //   if (payees > allArray.length) {
      //     let previous = [...allArray];
      //     console.log(previous);
      //     allArray[payee] = e;
      //     //Spread operater as workaround to get array to state contract
      //   }
      // }
      ;() => a + b + 100

      let bob = (a) => this.setState({ allArray: a })
      let rob = (a) => this.setState({ percentageArray: a })
      // console.log(this.state.allArray);
      let allArray = []
      let history = []
      let percentageArray = []

      function addressSetter(e, payee, payees, stateArray) {
        if (payees > allArray.length && stateArray == "") {
          allArray[payee] = e
        } else if ((payees = allArray.length)) {
          history = allArray
          bob(history)
        } else if ([stateArray]) {
          console.log(stateArray)
          stateArray[payee] = e
          bob(stateArray)
        } else {
          // bob(allArray);
        }
      }

      function percentageSetter(e, payee, payees, stateArray) {
        if (payees > percentageArray.length && stateArray == "") {
          percentageArray[payee] = e
        } else if ((payees = percentageArray.length)) {
          history = percentageArray
          rob(history)
        } else if ([stateArray]) {
          console.log(stateArray)
          stateArray[payee] = e
          rob(stateArray)
        } else {
          // bob(allArray);
        }
      }

      return generateArrays.map((payee) => (
        <div class="payee-wrapper">
          <div>
            <label htmlFor="PercentageForPayee">
              {" "}
              Payee {payee + 1} address{" "}
            </label>
            <input
              type="text"
              className="form-control-payee"
              name="payee"
              key={payee + 1}
              onChange={(event) =>
                // this.setState({ ticketPrice: event.target.value })
                addressSetter(
                  event.target.value,
                  payee,
                  this.state.payees,
                  this.state.allArray
                )
              }

              //value={question}
              //onChange={onChangeQuestion}
              //validations={[required, validQuestion]}
            />

            <label htmlFor="PercentageForPayee">
              {" "}
              Payee {payee + 1} percentage{" "}
            </label>
            <input
              type="text"
              className="form-control-payee"
              name="payee"
              key={payee + 2}
              onChange={(event) =>
                // this.setState({ ticketPrice: event.target.value })
                percentageSetter(
                  event.target.value,
                  payee,
                  this.state.payees,
                  this.state.percentageArray
                )
              }
              //value={question}
              //onChange={onChangeQuestion}
              //validations={[required, validQuestion]}
            />
          </div>
        </div>
      ))
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <h2 class="heading centered">Add Your Show</h2>
          <label>Ticket Price</label>
          <Input
            placeholder="Wei value"
            value={this.state.ticketPrice}
            onChange={(event) =>
              this.setState({ ticketPrice: event.target.value })
            }
          />
          <label>Band Name</label>
          <Input
            placeholder="Band Name"
            value={this.state.bandName}
            onChange={(event) =>
              this.setState({ bandName: event.target.value })
            }
          />
          <label># of Payees</label>
          <Input
            placeholder="Payees"
            value={this.state.payees}
            onChange={
              (event) => this.setState({ payees: event.target.value }) //&&
              // this.Makefields(event.target.value)
            }
          />

          <label>Payee information</label>
          <Payees />
          <label>Show Location</label>
          <Input
            placeholder="Physical show address"
            value={this.state.location}
            onChange={(event) =>
              this.setState({ location: event.target.value })
            }
          />

          <label>Payee information</label>
          <Input
            placeholder="Event Time"
            value={this.state.showTime}
            onChange={(event) =>
              this.setState({ showTime: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <div class="centered">
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </div>
      </Form>
    )
  }
}

export default CampaignNew

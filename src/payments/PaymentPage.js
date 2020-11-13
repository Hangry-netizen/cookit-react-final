import React, { Component } from "react";
import "braintree-web";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { url } from "../App";
import {
  Jumbotron,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import grab from "../assets/grab.png";

class Payment extends Component {
  instance;

  state = {
    clientToken: null,
  };

  async componentDidMount() {
    try {
      // Get a client token for authorization from your server
      const response = await axios.get(`${url}/transactions/new`);
      const clientToken = response.data.client_token;

      this.setState({ clientToken });
    } catch (err) {
      console.error(err);
    }
  }

  async buy() {
    try {
      // Send the nonce to your server
      const { nonce } = await this.instance.requestPaymentMethod();
      const response = await axios.post(`${url}/transactions/checkout`, {
        headers: {
          "Access-Control-Allow-Origin": "application/json",
        },
        payment_method_nonce: nonce,
        numOfMeals: 2,
        user: 2,
        meal: 5,
      });
      console.log(response);
      // if response success then redirect
      this.props.history.push('/success')
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div style={{ paddingTop: "15%", textAlign: "center" }}>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div style={{ paddingTop: "5%" }}>
          {/* <Card style={{ width: "60vw", margin: "auto", border: "0" }}>
            <CardBody>
              <img src={this.props.checkoutMeal.url} />

              <CardTitle tag="h5">{this.props.checkoutMeal.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Preparation time: {this.props.checkoutMeal.prep_time}
              </CardSubtitle>

              <CardText>
                Cookware required:
                {this.props.checkoutMeal.cookware}
              </CardText>

              <CardTitle tag="h1">15 MYR</CardTitle>
            </CardBody>
          </Card> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "2%",
            }}
          >
            <div>
              <h1>1 x {this.props.checkoutMeal.name}</h1>
              <h3>Total Payment: 15 RM</h3>
              <h5>
                Please pay with Credit/Debit Card or scan Grab Wallet QR Code
              </h5>
            </div>

            <div>
              <img style={{ width: "40%" }} src={grab} />
            </div>
          </div>
          <DropIn
            style={{ height: "30vh", width: "20vw" }}
            options={{
              authorization: this.state.clientToken,
            }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <Button
            style={{
              marginBottom: "5%",
              width: "10vw",
              marginLeft: "2%",
              backgroundColor: "#ff914d",
              border:"none",
              color: "whitesmoke"
            }}
            onClick={this.buy.bind(this)}
          >
            Buy
          </Button>
        </div>
      );
    }
  }
}

export default Payment;

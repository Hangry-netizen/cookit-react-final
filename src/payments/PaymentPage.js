import React, { Component } from 'react';
import 'braintree-web';
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react';
import { url } from "../App"

class Payment extends Component {
  instance;

  state = {
    clientToken: null
  };

  async componentDidMount() {
    try {
      // Get a client token for authorization from your server
      const response = await axios.get(
        `${url}/transactions/new`
      );
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
      const response = await axios.post(
        `${url}/transactions/checkout`,
          {
          headers: {
              'Access-Control-Allow-Origin' : 'application/json'
          },
          "payment_method_nonce": nonce,
          'numOfMeals': 2,
          'user': 2,
          'meal': 5
        });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (!this.state.clientToken) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <DropIn
            options={{
              authorization: this.state.clientToken
            }}
            onInstance={(instance) => (this.instance = instance)}
          />
          <button onClick={this.buy.bind(this)}>Buy</button>
        </div>
      );
    }
  }
}

export default Payment;
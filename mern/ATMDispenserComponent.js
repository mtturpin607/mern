import React, { Component } from 'react';
import FindMinDenominations from './assessment3-q2.js';

class ATMDispenser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      billlist: [],
    };
  }

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.amount !== 0) {
      this.setState((prevState) => ({
          billlist: FindMinDenominations(amount),
          amount: 0
      }));
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
            placeholder="Enter withdrawal amount"
          />
          <button type="submit">Calculate Denominations Needed</button>
        </form>
        
        {this.state.billlist}
        
      </div>
    );
  }
}

export default ATMDispenser;
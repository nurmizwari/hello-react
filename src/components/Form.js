import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { valu: "", kamu: "" };

    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlechange(e) {
    this.setState((state, props) => {
      return { valu: e.target.value };
    });
  }

  handlesubmit() {
    alert("pesan input adalah = " + this.state.valu);
  }
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <input type="text" value={this.state.valu} />
        <input type="submit" value="submit data" />
      </form>
    );
  }
}

export default Form;

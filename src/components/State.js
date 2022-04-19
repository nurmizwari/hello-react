import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satu: "nur mizwari ganteng",
      dua: "jelas lah banget",
      default: "nur mizwari",
    };
    this.ganti = this.ganti.bind(this);
  }
  ganti(e) {
    this.setState({ default: e.target.value });
  }
  render() {
    return (
      <div>
        <input type=" text" value={this.state.default} onChange={this.ganti} />
      </div>
    );
  }
}
export default State;

import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "ini adalah state 1 ",
      datalist: this.props.lisa,
      statusrendering: true,
      cinta: true,
      gajah: true,
      monyet: ".............coba ketik disini.....",
    };
    this.handlePesan2 = this.handlePesan2.bind(this);
    this.handleElement = this.handleElement.bind(this);
    this.gantiLur = this.gantiLur.bind(this);
    this.gajah1 = this.gajah1.bind(this);
    this.monyet1 = this.monyet1.bind(this);
  }
  handlePesan2() {
    alert(this.state.daftar);
  }

  componentDidMount() {
    // COMPONENT DIDMOUNT AKAN JALAN SETELAH RENDER JALAN
    console.log("jalan | didmount");
  }

  handleElement() {
    // conditional rendering 3
    this.setState((state, props) => {
      return { statusrendering: !state.statusrendering };
    });
  }
  gajah1() {
    this.setState((state, props) => {
      return { gajah: !state.gajah };
    });
  }
  gantiLur() {
    this.setState((state, props) => {
      return { cinta: !state.cinta };
    });
  }
  monyet1(e) {
    this.setState((state, props) => {
      return { monyet: e.target.value };
    });
  }

  render() {
    console.log("jalan| render");
    console.log(this.state.statusrendering);
    return (
      // <div>
      //   <p>{this.state.datalist}</p>
      //   <p>{this.state.daftar}</p>
      //   <h1>makanan khas indonesia class Component</h1>
      //   <a href="/" onClick={this.handlePesan2}>
      //     Ini adalah handle event onclick class Component
      //   </a>
      // </div>

      // conditional rendering
      <div>
        <h1>{this.state.monyet}</h1>
        <input type="text" onChange={this.monyet1} />

        {this.state.statusrendering === true ? ( // jika true maka akan muncul selamat datang
          <div>
            <h1>selamat datang</h1>
            <h1>selamat nur </h1>
          </div>
        ) : (
          <h1>selamat tinggal</h1>
        )}

        <button onClick={this.handleElement}>change</button>

        {this.state.cinta === true ? (
          <h1>nur mizwari true</h1>
        ) : (
          <h1>nur mizwari bukan false</h1>
        )}
        <button onClick={this.gantiLur}>Ganti conditional rendering</button>

        {this.state.gajah === true ? (
          <div>
            <h1>gajah true</h1>
          </div>
        ) : (
          <div>
            <h1> gajah false</h1>
          </div>
        )}
        <button onClick={this.gajah1}>Ganti slur</button>
      </div>
    );
  }
}

export default Header;

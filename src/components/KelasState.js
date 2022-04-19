import React, { Component } from "react";

class KelasState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      satu: "nur mizwari",
      dua: "ganteng",
      makanan: [
        {
          nama: "ayam goreng",
          harga: 24000,
        },
        {
          nama: "ubi bakar",
          harga: 13000,
        },
      ],
      minuman: [
        {
          nama: "coca cola",
          harga: 15000,
        },
        {
          nama: "rujak cingur",
          harga: 20000,
        },
      ],
    };
    this.ganti = this.ganti.bind(this);
  }

  ganti() {
    this.setState((state, props) => {
      return {
        satu: state.dua,
        dua: state.satu,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.satu}</h1>
        <h1>{this.state.dua}</h1>
        <button onClick={this.ganti}>Ganti slur</button>
        <h1>{this.state.satu}</h1>
        <input type="text" onChange={this.katakanlah} />

        {this.state.makanan.map((value, index) => {
          // materi list dan key dari state
          console.table(value);
          return (
            <div key={index}>
              <p>no:{index + 1}</p>
              <p>nama:{value.nama}</p>
              <p>harga:{value.harga}</p>
            </div>
          );
        })}

        {this.state.minuman.map((value, index) => {
          return (
            <div key={index}>
              <p>no:{index + 1}</p>
              <p>nama: {value.nama}</p>
              <p>harga: {value.harga}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default KelasState;

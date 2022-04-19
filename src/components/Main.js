import React, { Component } from "react";
import umpan from "./lib/food";

const dagang = [
  //  materi list dan key dari internal file
  {
    nama: "ayam goreng",
    harga: 20000,
  },
  {
    nama: "gurame",
    harga: 30000,
  },
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tittle: "menu makanan",
      tittle2: "menu minuman",
      satu: "nur mizwari",
      dua: "ganteng",
      setDefault: "",
      setKota: "",
      tiga: "",
      empat: "",
      menuMakanan: [
        {
          nama: "ayam goreng",
          harga: 20000,
        },
        {
          nama: "gurame",
          harga: 30000,
        },
      ],
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.ganti = this.ganti.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
  }
  //   handlePesan() {
  //     this.setState({ tittle: "makanan sudah diganti lur" }); // ini cara penulisan setstate pertama
  handlePesan() {
    this.setState((state, props) => {
      return {
        tittle: state.tittle2,
        tittle2: state.tittle,
      }; // cara penulisan setstate yang kedua yang harus digunakan
    });
  }

  ganti() {
    this.setState((state, props) => {
      return {
        satu: state.dua,
        dua: state.satu,
      };
    });
  }

  // menghubungkan state dan invut value
  handleOnchange(value, e) {
    // this.setState({ setDefault: e.target.value }); pake ini kalau simpel satu input saja
    // dynamic method biar dua inputan
    this.setState({ [value]: e.target.value });
  }

  handleGanti(value, e) {
    this.setState({ [value]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.tittle}</h1>
        <h1>{this.state.tittle2}</h1>
        <button onClick={this.handlePesan}>rubah data</button>
        <h1>{this.state.satu}</h1>
        <h1>{this.state.dua}</h1>
        <button onClick={this.ganti}>GANTI SLUR</button>
        <input
          type="text"
          value={this.state.setDefault}
          onChange={(e) => this.handleOnchange("setDefault", e)}
          placeholder="nama"
        />
        <input
          type="text"
          value={this.state.setKota}
          placeholder="kota"
          onChange={(e) => this.handleOnchange("setKota", e)} // ini pake dynamic method lurr jangan lupaa
        />
        <br />
        <input
          type="text"
          value={this.state.tiga}
          placeholder="tiga"
          onChange={(e) => this.handleGanti("tiga", e)}
        />
        <input
          type="text"
          value={this.state.empat}
          placeholder="empat"
          onChange={(e) => this.handleGanti("empat", e)}
        />
        // list dan key dari state
        {this.state.menuMakanan.map((value, index) => {
          console.log(value);
          console.log(index);
          return (
            <div key={index}>
              <p>no: {index + 1} </p>
              <p>nama: {value.nama} </p>
              <p>harga: {value.harga} </p>
            </div>
          );
        })}
        /* list dan key dari internal file */
        {dagang.map((value, index) => {
          console.log(value);
          console.log(index);
          return (
            <div key={index}>
              <p>no: {index + 1} </p>
              <p>nama: {value.nama} </p>
              <p>harga: {value.harga} </p>
            </div>
          );
        })}
        // list dan key dari external file
        {umpan.map((value, index) => {
          return (
            <div key={index}>
              <p>no: {index + 1} </p>
              <p>nama: {value.nama} </p>
              <p>harga: {value.harga} </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Main;

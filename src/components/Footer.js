import React from "react";

const Footer = (props) => {
  // arrow function
  return (
    <div>
      <h4>Halaman Footer Function Component {props.name} </h4>
      <p>@{props.tahun}</p>
    </div>
  );
};
export default Footer;

import React from "react";
import Image from "./Image";

const List = () => {
  return (
    <ol>
      <li>Nasi Padang</li>
      <Image
        linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"
        lebar="400"
      />
      <li>Sate</li>
      <Image
        linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
        lebar="300"
      />
      <li>Soto Lamongan </li>
      <Image
        linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
        lebar="200"
      />
    </ol>
  );
};

export default List;

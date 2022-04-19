import React from "react";

const Menu = () => {
  const handlePencet = () => {
    alert("selamat malam ini pake handle pencet");
  };

  const handleKu = (valu, e) => {
    e.preventDefault(); // ini untuk supaya tidak merefresh webnya
    alert(valu);
  };

  return (
    <div class="menu">
      <a href="/" onClick={handlePencet}>
        klik sini buat handle
      </a>
      <br></br>
      <a href="/" onClick={(e) => handleKu("ini handle pake parameter", e)}>
        klik sini buat handle
      </a>
      <div class="dua">2</div>
      <div class="tiga">3</div>
    </div>
  );
};

export default Menu;

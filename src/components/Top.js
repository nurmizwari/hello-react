import React from "react";

const Top = () => {
  const handlePesan = (value, e) => {
    e.preventDefault();
    alert("Halaman Top Tampil");
    alert(value);
  };
  const handleKlik = (mute, e) => {
    e.preventDefault();
    alert(mute);
  };
  return (
    <div>
      <a
        href="/"
        onClick={(e) =>
          handlePesan("ini halaman dari handle event pake parameter", e)
        }
      >
        Halaman Top Handling event onClick
      </a>
      <br />
      <a
        href="/"
        onClick={(e) => handleKlik("ini adalah handle event pake parameter", e)}
      >
        contoh handling event onClick 2
      </a>
    </div>
  );
};

export default Top;

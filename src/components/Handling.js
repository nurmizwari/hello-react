import React from "react";

const Handling = () => {
  const ganti = (gan, e) => {
    alert(gan);
  };
  return (
    <div>
      <button onClick={(e) => ganti("SELAMAT ANDA KENA PRANK", e)}>
        KLIK ganti
      </button>
    </div>
  );
};

export default Handling;

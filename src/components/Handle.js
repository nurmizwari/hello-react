import React from "react";

const Handle = () => {
  const ubah = (e) => {
    console.log(e.target.value);
  };
  const klik = (ha, e) => {
    e.preventDefault();
    alert(ha);
  };

  return (
    <div>
      <label>handle onchange</label>
      <input type="text" onChange={ubah} />
      <button onClick={(e) => klik("nur mizwari ganteng banget ", e)}>
        tekan disini
      </button>
    </div>
  );
};

export default Handle;

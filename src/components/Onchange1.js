import React from "react";

const Onchange1 = (props) => {
  const rubah = (e) => {
    console.log(e.target.value);
  };

  const rubah2 = (musa, e) => {
    e.preventDefault();
    alert(musa);
  };

  return (
    <div>
      <button onClick={(e) => rubah2("nur mizwari ganteng", e)}>
        Klik Disini
      </button>
      <p>rubah kata</p>
      <input type="text" onChange={rubah} />
    </div>
  );
};
export default Onchange1;

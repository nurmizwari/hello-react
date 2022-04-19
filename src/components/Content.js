import React from "react";

const Content = (props) => {
  const handlingEvent = (e) => {
    return console.log(e.target.value);
  };
  const handlingAja = (value, e) => {
    e.preventDefault();
    return alert(value);
  };

  const abc = (e) => {
    console.log(e.target.value);
  };
  const bbb = (mutu, e) => {
    e.preventDefault();
    alert(mutu);
  };

  return (
    <div>
      <h1>MIZWARI GROUP {props.lina}</h1>
      <input type="text" onChange={handlingEvent} />
      <input type="text" onChange={abc} />
      <a
        href="/"
        onClick={(e) => handlingAja("nur  mizwari ganteng banget", e)}
      >
        Tekan DIsini
      </a>
      <button onClick={(e) => bbb("nur mizwari ganteng lagi", e)}>
        Ganti Lagi
      </button>
    </div>
  );
};
export default Content;

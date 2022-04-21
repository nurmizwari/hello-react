import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import Content from "./Content";
import Top from "./Top";
import Menu from "./Menu";
import Main from "./Main";
import Handling from "./Handling";
import Handle from "./Handle";
import State from "./State";
import KelasState from "./KelasState";
import Onchange1 from "./Onchange1";
import Form from "./Form";

function App() {
  return (
    <div>
      <Form />
      <Onchange1 nama="nur mizwari" />
      <KelasState />
      <State />
      <Handle />
      <Main />
      <h1>Rendering Element</h1>
      <Top />
      <Header lisa="3 terbaik props atau state" />
      <List />
      <Content lina="halo ini props 2" />
      <Footer name="makanan nusantara" tahun="2023" />
      <Menu namae="haloo reaact" />
      <Handling />
    </div>
  );
}

export default App;

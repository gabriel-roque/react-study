import React from "react";

import FirstComponent from "./components/FristComponent";
import { CompA, CompB } from "./components/MultipleComponents";
import MultiElements from "./components/MultipleElements";
import Props from "./components/UsingProsp";
import Family from "./components/Family";
import Member from "./components/Member";
import ComponentFunction from "./components/ComponentFunction";

const App = () => (
  <div>
    <FirstComponent />
    <Props value="Hello!" />

    <CompA value="I am comp A" />
    <CompB value="I am comp B" />

    <MultiElements />

    <Family lastname="Roque">
      <Member name="Gabriel" />
      <Member name="Lucas" />
      <Member name="Camila" />
    </Family>

    <ComponentFunction />
  </div>
);
export default App;

import React from "react";

import Family from "./components/Family/Family";
import Member from "./components/Family/Member";
import ComponentFunction from "./components/ComponentFunction";
import ComponentClass from "./components/ComponentByClass";
import CounterByClass from "./components/CounterByClass";
import CounterByHooks from "./components/CounterByHooks";

const App = () => (
  <div>
    <Family lastname="Roque">
      <Member name="Gabriel" />
      <Member name="Lucas" />
      <Member name="Camila" />
    </Family>

    <ComponentFunction />

    <ComponentClass value="22154" />
    <ComponentClass />

    <CounterByClass number={12} />

    <CounterByHooks number={12} />
  </div>
);
export default App;

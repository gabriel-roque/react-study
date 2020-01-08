import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("pair");

  useEffect(() => {
    count % 2 === 0 ? setStatus("pair") : setStatus("unpaired");
  }, [count]);

  return (
    <div>
      <hr />
      <h1>Using React Hooks</h1>
      <h3>
        Cont: {count} | Status: {status}
      </h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

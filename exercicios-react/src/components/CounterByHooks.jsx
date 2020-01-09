import React, { useState, useEffect } from "react";

export default props => {
  const [count, setCount] = useState(props.number);
  const [status, setStatus] = useState("pair");

  useEffect(() => {
    count % 2 === 0 ? setStatus("pair") : setStatus("unpaired");
  }, [count]);

  return (
    <div>
      <hr />
      <h3>Using React Hooks</h3>
      <h3>
        Cont: {count} | Status: {status}
      </h3>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
};

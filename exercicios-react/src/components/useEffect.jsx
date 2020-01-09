import React, { useState, useEffect, useLayoutEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} onces!`;
  });

  useLayoutEffect(() => {
    document.title = `You clicked ${count} onces!`;
  });

  return (
    <div>
      <p>You clicked {count} onces!</p>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
};

// https://pt-br.reactjs.org/docs/hooks-reference.html#uselayouteffect

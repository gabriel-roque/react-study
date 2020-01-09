import React from "react";

const aproved = ["Paula", "Roberta", "Gustavo"];

export default props => {
  const makeItens = itens => {
    return itens.map(item => <li key={itens.indexOf(item)}>{item}</li>);
  };

  return (
    <div>
      <h3>Component List</h3>
      <ul>{makeItens(aproved)}</ul>
    </div>
  );
};

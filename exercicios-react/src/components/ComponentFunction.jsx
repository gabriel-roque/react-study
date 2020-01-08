import React from "react";

const aproved = ["Paula", "Roberta", "Gustavo"];

export default props => {
  const makeItens = itens => {
    return itens.map(item => <li key={itens.indexOf(item)}>{item}</li>);
  };

  return (
    <div>
      <ul>{makeItens(aproved)}</ul>
    </div>
  );
};

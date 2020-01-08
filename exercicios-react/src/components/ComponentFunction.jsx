import React from "react";

const aproved = ["Paula", "Roberta", "Gustavo"];

export default props => {
  const makeItens = itens => {
    return itens.map(item => <li>{item}</li>);
  };

  return <ul>{makeItens(aproved)}</ul>;
};

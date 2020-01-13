import React from "react";

export default function PageHeader(props) {
  return (
    <header className="page-header mt-3">
      <h2>
        <b>{props.name}</b>
        <small> | {props.small}</small>
      </h2>
      <hr />
    </header>
  );
}

import React from "react";

const Rout = (props) => {
  let test = props.match.params.test_params;
  return (
    <div>
      <h2>Rout</h2>
      <p>{test}</p>
    </div>
  );
};

export default Rout;

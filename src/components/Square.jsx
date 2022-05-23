import React from "react";

const Square = (props) => {
  const classes = `${props.className} xblock`;
  return (
    <p className={classes} onClick={props.onClick}>
      {props.state}
    </p>
  );
};

export default Square;

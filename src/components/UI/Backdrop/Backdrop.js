import React from "react";
import classes from "./BackDrop.module.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
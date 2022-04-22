import React from "react";
import classes from "./Input.module.scss";

type ComponentProps = {
  children: any;
  controlName: string;
  // controlProps: string;
};

const Input = ({ children, controlName }: ComponentProps) => {
  return (
    <div className={classes.form__group}>
      <label>{controlName}</label>
      {children}
    </div>
  );
};

export default Input;

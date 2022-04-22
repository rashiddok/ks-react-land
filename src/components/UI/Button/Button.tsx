import React from "react";
import classes from "./Button.module.scss";

type ComponentProps = {
  children: any;
  [props: string]: any;
};

const Button = ({ children, ...props }: ComponentProps) => {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;

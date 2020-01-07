import React from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type: string;
}

const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  return <button {...props}>{children} </button>;
};

export default Button;

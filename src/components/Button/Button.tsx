import React, { FC } from "react";


export interface ButtonProps {
  label: string;
  onClick: () => void;
  

}

const Button : FC<ButtonProps> = ({label, ...props}) => {
  return( 
    <button {...props}>
      {label}
    </button>);
};

export default Button;
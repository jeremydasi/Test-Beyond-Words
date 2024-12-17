import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  isActive?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({ onClick, label }) => {
  return (
    <div className='containerButton' onClick={onClick}>
      <a>{label}</a>
    </div>
  );
};

export default Button;
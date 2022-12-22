import React from "react";

interface InputProps {
  attr: {
    name: string;
    type: string;
    autoComplete?: string;
    placeholder?: string;
  };
  value?: string;
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className={props.className}>
      {props.label && <label htmlFor={props.attr.name}>{props.label}</label>}
      <input
        id={props.attr.name}
        className="block rounded-md h-12 w-full border-gray-300 border px-3 text-black"
        {...props.attr}
        defaultValue={props.value}
      />
    </div>
  );
};

export default Input;

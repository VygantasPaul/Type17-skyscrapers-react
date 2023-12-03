import React from "react";
const Input = React.forwardRef(({ value, onChange, placeholder }, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});

export default Input;

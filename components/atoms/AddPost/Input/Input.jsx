import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(({ value, setValue, placeholder }, ref) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
});

export default Input;

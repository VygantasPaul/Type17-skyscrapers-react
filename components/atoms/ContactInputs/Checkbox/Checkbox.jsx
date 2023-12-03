import React from "react";
import styles from "./Checkbox.module.css";
const Checkbox = ({ checked, onChange }) => {
  return (
    <label htmlFor="checkif" className={styles.checkbox}>
      <input
        type="checkbox"
        id="checkif"
        checked={checked}
        onChange={onChange}
      />
      Check if you agree
    </label>
  );
};

export default Checkbox;

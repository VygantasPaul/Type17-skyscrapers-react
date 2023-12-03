import React from "react";
import styles from "./Textarea.module.css";
const Textarea = React.forwardRef(({ value, setValue }, ref) => {
  return (
    <textarea
      className={styles.textArea}
      value={value}
      ref={ref}
      name=""
      cols="30"
      rows="10"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Description"
    ></textarea>
  );
});

export default Textarea;

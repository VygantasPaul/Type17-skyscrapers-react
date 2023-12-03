// components/atoms/Error/Error.js
import React from "react";
import styles from "./Error.module.css";

const Error = ({ error }) => {
  return error ? <div className={styles.error}>{error}</div> : null;
};

export default Error;

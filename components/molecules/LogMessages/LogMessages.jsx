import React from "react";
import styles from "./LogMessages.module.css";
const LogMessages = ({ logMessages }) => {
  return (
    <>
      {logMessages.length > 0 && (
        <div className={styles.logMessages}>
          <div className={styles.logMessages}>
            <h3>You message:</h3>
            <div>
              {logMessages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogMessages;

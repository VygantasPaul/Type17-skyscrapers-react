import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hamburger.module.css";
import { useState } from "react";
function Hamburger({ onClick, isOpen }) {
  const handleClick = () => {
    onClick && onClick(!isOpen);
  };

  return (
    <button className={styles.burgerButton} onClick={handleClick}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </button>
  );
}

export default Hamburger;

import React, { useState } from "react";
import styles from "./Header.module.css";

import Logo from "@/components/molecules/Logo/Logo";
import Hamburger from "@/components/molecules/Hamburger/Hamburger";
import Navbar from "@/components/molecules/Navbar/Navbar";

const Header = ({}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Logo />
          <Hamburger isOpen={showMenu} onClick={toggleMenu} />
          {showMenu && <Navbar onClick={toggleMenu} />}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
    />
  );
};

export default Logo;

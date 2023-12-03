import React from "react";
import homecss from "@/styles/Home.module.css";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Navbar = ({ onClick, isOpen }) => {
  const handleClick = () => {
    onClick && onClick(!isOpen);
  };
  return (
    <nav className={` ${styles.navbar} ${homecss.main} ${inter.className}`}>
      <ul>
        <li>
          <Link href="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/skycapers" onClick={handleClick}>
            Skycapers
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={handleClick}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/contacts" onClick={handleClick}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

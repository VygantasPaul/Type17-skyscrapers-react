import React from "react";
import styles from "./Skycaper.module.css";
import Link from "next/link";
const Skyscaper = ({ skycaper }) => {
  const imageUrl = skycaper.photo || "https://placeholder.com/150";
  return (
    <Link href={`/skycaper/${skycaper.id}`} className={styles.skycaperPage}>
      <img src={imageUrl} alt="" className={styles.photo} />
      <p> {skycaper.title}</p>
      <p>{skycaper.location}</p>
    </Link>
  );
};

export default Skyscaper;

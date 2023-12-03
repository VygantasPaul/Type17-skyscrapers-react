import React from "react";
import { useEffect, useState } from "react";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import homecss from "@/styles/Home.module.css";
import styles from "./Gallery.module.css";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
import axios from "axios";
import Gallery from "@/components/organisms/Gallery/Gallery";

const gallery = () => {
  const [galleries, setGalleries] = useState([]);

  const fetchData = async () => {
    try {
      const skycapers = await axios.get(
        "https://656599ffeb8bb4b70ef1ebb4.mockapi.io/skyscrapers"
      );
      console.log(skycapers.data);
      setGalleries(skycapers.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className={`${homecss.main} ${inter.className}`}>
        {galleries ? <Gallery galleries={galleries} /> : <div>Loading..</div>}
      </main>
      <Footer />
    </>
  );
};

export default gallery;

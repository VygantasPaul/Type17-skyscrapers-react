import React from "react";
import { useState, useEffect } from "react";
import Skyscapers from "@/components/organisms/Skycapers/Skycapers";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/styles/Home.module.css";
import Form from "@/components/organisms/Form/Form";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from "next/font/google";
const skycapers = ({
  skycaperTitle,
  skycaperLocation,
  skycaperPhoto,
  skycaperDescription,
  skycaperYearbuild,
}) => {
  const [skycapers, setSkycapers] = useState(null);

  const getskycapersData = async () => {
    try {
      const skycapers = await axios.get(
        "https://656599ffeb8bb4b70ef1ebb4.mockapi.io/skyscrapers"
      );
      setSkycapers(skycapers.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getskycapersData();
  }, []);

  return (
    <>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <Form
          skycaperTitle={skycaperTitle}
          skycaperLocation={skycaperLocation}
          skycaperYearbuild={skycaperYearbuild}
          skycaperPhoto={skycaperPhoto}
          skycaperDescription={skycaperDescription}
          getskycapersData={getskycapersData}
        />

        {skycapers ? (
          <>
            <Skyscapers skycapers={skycapers} />
          </>
        ) : (
          <div>Loading</div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default skycapers;

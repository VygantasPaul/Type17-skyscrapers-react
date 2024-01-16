import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import homecss from "@/styles/Home.module.css";
import styles from "./SkycaperId.module.css";
import Button from "@/components/atoms/Button/Button";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const SkycaperId = () => {
  const [skycaper, setSkycaper] = useState(null);
  const router = useRouter();

  const fetchSkycaper = async (skycaperId) => {
    const response = await axios.get(
      `https://656599ffeb8bb4b70ef1ebb4.mockapi.io/skyscrapers/${skycaperId}`
    );
    console.log(response.data);
    setSkycaper(response.data);
  };

  const deleteButton = async (id) => {
    await axios.delete(
      `https://656599ffeb8bb4b70ef1ebb4.mockapi.io/skyscrapers/${id}`
    );
    router.push("/skycapers");
    alert("Successfully deleted");
    setSkycaper(null);
  };

  useEffect(() => {
    router.query.skycaperId && fetchSkycaper(router.query.skycaperId);
  }, [router.query]);
  const emptyImage =
    "https://attainmedspa.com/wp-content/uploads/2022/02/500x500-placeholder.jpg";
  return (
    <>
      <Header />
      <main className={`${homecss.main} ${inter.className}`}>
        {skycaper && (
          <div className={styles.insidePage}>
            {skycaper.photo ? (
              <div className={styles.photoBig}>
                <img src={skycaper.photo} alt="" />
              </div>
            ) : (
              <div className={styles.photoBig}>
                <img src={emptyImage} alt="" />
              </div>
            )}
            <div className={styles.content}>
              <div className={styles.inside}>
                <small>{skycaper.createdAt}</small>
                <h2>{skycaper.title}</h2>
                <h3>Location: {skycaper.location}</h3>
                <h4>Height: {skycaper.building_height}m</h4>
                <h4>Floors: {skycaper.numbers_floors}</h4>
                <h4>Year build: {skycaper.years_build}</h4>

                <p>{skycaper.description}</p>
              </div>
              <Button onClick={() => deleteButton(skycaper.id)} text="Delete" />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SkycaperId;

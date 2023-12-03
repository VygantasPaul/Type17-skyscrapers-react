import React from "react";
import styles from "./Gallery.module.css"; // Import your CSS module
import homecss from "@/styles/Home.module.css";
const Gallery = ({ galleries }) => {
  const emptyImage =
    "https://attainmedspa.com/wp-content/uploads/2022/02/500x500-placeholder.jpg";
  return (
    <>
      {galleries ? (
        <div className={styles.galleryWrap}>
          <div className={homecss.heading}>
            <h2>Gallery</h2>
          </div>
          <div className={styles.galleryPage}>
            {galleries.map((gallery) => (
              <div className={styles.photo} key={gallery.id}>
                {gallery.photo ? (
                  <div className={styles.photoItem} key={gallery.id}>
                    <img src={gallery.photo} alt="" />
                  </div>
                ) : (
                  <div className={styles.photoItem}>
                    <img src={emptyImage} alt="" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Gallery;

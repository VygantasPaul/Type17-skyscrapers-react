import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Gallery.module.css"; // Import your CSS module
import homecss from "@/styles/Home.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Gallery = ({ galleries }) => {
  const emptyImage =
    "https://attainmedspa.com/wp-content/uploads/2022/02/500x500-placeholder.jpg";

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <>
      {galleries ? (
        <div className={styles.galleryWrap}>
          <div className={homecss.heading}>
            <h2>Gallery</h2>
          </div>
          <div className={styles.galleryPage}>
            {galleries.map((gallery) => (
              <div
                className={styles.photo}
                key={gallery.id}
                onClick={() => setSelectedPhoto(gallery.photo)}
              >
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
          {selectedPhoto && (
            <div className={styles.modal}>
              <div
                className={styles.modal_image}
                style={{ backgroundImage: `url(${selectedPhoto})` }}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setSelectedPhoto(!selectedPhoto)}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Gallery;

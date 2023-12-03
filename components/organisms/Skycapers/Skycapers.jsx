import styles from "./Skycapers.module.css";
import Skyscaper from "../Skycaper/Skycaper";
import homecss from "@/styles/Home.module.css";
const Skycapers = ({ skycapers }) => {
  return (
    <>
      {skycapers ? (
        <div className={styles.skycapersWrap}>
          <div className={homecss.heading}>
            <h2>Skycapers</h2>
          </div>
          <div className={styles.skycapers}>
            {skycapers.map((skycaper) => (
              <div className={styles.skycaper} key={skycaper.id}>
                <Skyscaper skycaper={skycaper} />
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

export default Skycapers;

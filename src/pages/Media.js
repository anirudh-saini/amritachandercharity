import React from "react";
import styles from "./media.module.scss";
export const Media = () => {
  return (
    <div className={`container ${styles.media}`}>
      <div>
        <div>
          <img src="/media/m1.png" alt="media" />
        </div>
        <div>
          <img src="/media/m4.png" alt="media" />
        </div>
      </div>
      <div>
        <img src="/media/m3.png" alt="media" />
      </div>
      <div>
        <img src="/media/m2.jpeg" alt="media" />
      </div>
      <div className={styles.news}>
        <div className={styles.video}>
          <video width="320" height="120" controls>
            <source src="/media/media1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.para}>
            <p>Amrita Chander Jankalyan Charitable Trust </p>
          </div>
        </div>
        <div className={styles.video}>
          <video width="320" height="120" controls>
            <source src="/media/media2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.para}>
            <p>Amrita Chander Jankalyan Charitable Trust </p>
          </div>
        </div>
      </div>
    </div>
  );
};

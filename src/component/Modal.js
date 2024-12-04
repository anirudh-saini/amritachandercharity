import React from "react";
import styles from "./modal.module.scss";

export const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          src="/banner.jpeg" // Replace with your banner image URL
          alt="Banner"
          className={styles.bannerImage}
        />
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

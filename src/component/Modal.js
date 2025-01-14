import React from "react";
import styles from "./modal.module.scss";

export const Modal = ({ onClose }) => {
    const apiUrl = process.env.REACT_APP_BASE_URL;
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <img
                    src={`${apiUrl}/banner.jpeg`}
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

import React from "react";
import styles from "./contact.module.scss";
export const Contact = () => {
    return (
        <>
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.679984047412!2d77.2800968!3d28.632159800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcac87f20d59%3A0xd82b1e71a3f08e0c!2sAmrita%20Chander%20Jankalyan%20Charitable%20Trust!5e0!3m2!1sen!2sin!4v1732732032323!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div></div>
        </>
    );
};

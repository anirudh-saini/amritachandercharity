import React from "react";
import styles from "./footer.module.scss";
export const Footer = () => {
    return (
        <div className={styles.color}>
            <div className={`container ${styles.footer}`}>
                <div className={styles.container}>
                    <div className={styles.about}>
                        <div>
                            <a href="/">
                                <h2>
                                    Amrita Chander Jankalyan Charitable Trust
                                </h2>
                            </a>
                        </div>
                        <div>
                            <p>
                                Amrita Chander Jankalyan Charitable Trust, a
                                non-profit Organisation in India is working
                                towards bringing sustainable growth in the life
                                of underprivileged Children, Youth and Senior
                                Citizen through relevant education, innovation
                                healthcare and food distribution programs.
                            </p>
                        </div>
                    </div>
                    <div className={styles.link}>
                        <div>
                            <h2>Links</h2>
                        </div>
                        <div>
                            <div>
                                <a href="/">Home</a>
                                <a href="/about-us">About Us</a>
                                <a href="/contact-us">Contact Us</a>
                                <a href="/donate">Donate</a>
                                <a href="/gallery">Gallery</a>
                            </div>
                            <div>
                                <a href="/media">Media</a>
                                <a href="/privacy-policy">Privacy Policy</a>
                                <a href="/terms_and_conditions.pdf" download>
                                    Terms and Conditions
                                </a>
                                <a href="/refund_policy.pdf" download>
                                    Refund Policy
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.address}>
                        <div>
                            <h2>Address</h2>
                        </div>
                        <div>
                            <div className={styles.add}>
                                <p>Branch Office</p>
                                <p>
                                    {" "}
                                    DA-8, Basement, Vikas Marg, Shakarpur, New
                                    Delhi-110092
                                </p>
                            </div>
                            <div className={styles.add}>
                                <p>Administrative Office</p>
                                <p>
                                    Sri Sai House, H-97, Sector 63, Noida, Uttar
                                    Pradesh-201301.
                                </p>
                            </div>

                            <div className={styles.number}>
                                <a href="tel:+91 93545 58249">
                                    +91 93545 58249
                                </a>
                                <a href="tel:+91 1144753285">+91 1144753285</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copy}>
                    <p>
                        Ⓒ 2024 Amrita Chander Jankalyan Charitable Trust | All
                        rights reserved.
                    </p>
                    <p>
                        Powered by{" "}
                        <a href="https://circledigital.in/" target="_black">
                            Circle Digital Solutions
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

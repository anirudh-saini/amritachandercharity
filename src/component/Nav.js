import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const Url = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    const donate = () => {
        setIsOpen(false);
        navigate("/donate");
        document.body.style.overflow = "";
    };
    return (
        <>
            <div className={styles.socialcolor}>
                <div className={`container ${styles.social}`}>
                    <div>
                        <a href="tel:+91 1144753285">
                            <img src={`${Url}/phone.svg`} alt="phone" />
                            <p>+91 1144753285</p>
                        </a>
                        <a href="mailto:mail@amritachandercharity.org.in">
                            <img src={`${Url}/email.svg`} alt="mail" />
                            <p>mail@amritachandercharity.org.in</p>
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.instagram.com/amritachandercharity?igsh=MTVtcmw0ZmU0MXZhbA=="
                            target="_black"
                        >
                            <img src={`${Url}/insta.svg`} alt="social" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/amritachandercharity/"
                            target="_black"
                        >
                            <img src={`${Url}/linkedin.svg`} alt="social" />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Amrita-Chander-Charity/100084226626591/"
                            target="_black"
                        >
                            <img src={`${Url}/facebook.svg`} alt="social" />
                        </a>
                        <a
                            href="https://youtube.com/@amritachandercharitabletrust?si=HEOCo0X-PufbicGq"
                            target="_black"
                        >
                            <img src={`${Url}/youtube.svg`} alt="social" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.color}>
                <nav className={`container ${styles.navbar}`}>
                    <div className={styles.navbar_logo}>
                        <a href="/">
                            <img
                                src={`${Url}/logo.png?cache-bust=${Date.now()}`}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <div
                            className={`${styles.bar} ${
                                isOpen ? styles.open : ""
                            }`}
                        ></div>
                        <div
                            className={`${styles.bar} ${
                                isOpen ? styles.open : ""
                            }`}
                        ></div>
                        <div
                            className={`${styles.bar} ${
                                isOpen ? styles.open : ""
                            }`}
                        ></div>
                    </div>
                    <ul
                        className={`${styles.nav_links} ${
                            isOpen ? styles.open : ""
                        }`}
                    >
                        <div>
                            <li>
                                <a href="/">HOME</a>
                            </li>
                            <li>
                                <a href="/about-us">ABOUT US</a>
                            </li>
                            <li>
                                <a href="/gallery">GALLERY</a>
                            </li>
                            <li>
                                <a href="/media">MEDIA</a>
                            </li>
                            <li>
                                <a href="/contact-us">CONTACT</a>
                            </li>
                            <li>
                                <button onClick={donate}>DONATE NOW</button>
                            </li>
                        </div>
                        <div>
                            <li>
                                <div className={styles.media}>
                                    <div>
                                        <a
                                            href="https://www.instagram.com/amritachandercharity?igsh=MTVtcmw0ZmU0MXZhbA=="
                                            target="_black"
                                        >
                                            <img
                                                src={`${Url}/insta_nav.svg`}
                                                alt="social"
                                            />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/amritachandercharity/"
                                            target="_black"
                                        >
                                            <img
                                                src={`${Url}/linkedin_nav.svg`}
                                                alt="social"
                                            />
                                        </a>
                                        <a
                                            href="https://www.facebook.com/people/Amrita-Chander-Charity/100084226626591/"
                                            target="_black"
                                        >
                                            <img
                                                src={`${Url}/facebook_nav.svg`}
                                                alt="social"
                                            />
                                        </a>
                                        <a
                                            href="https://youtube.com/@amritachandercharitabletrust?si=HEOCo0X-PufbicGq"
                                            target="_black"
                                        >
                                            <img
                                                src={`${Url}/youtube_nav.svg`}
                                                alt="social"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <img
                                            src={`${Url}/logo.svg`}
                                            alt="logo"
                                        />
                                    </div>
                                </div>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
};

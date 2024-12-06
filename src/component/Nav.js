import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
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
        navigate("/donate");
    };
    return (
        <>
            <div className={styles.socialcolor}>
                <div className={`container ${styles.social}`}>
                    <div>
                        <a href="tel:+91 1144753285">
                            <img
                               
                src="http://localhost:3000/phone.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/phone.svg';"
                alt="phone"
                           
              />
                            <p>+91 1144753285</p>
                        </a>
                        <a href="mailto:mail@amritachandercharity.org.in">
                            <img
                               
                src="http://localhost:3000/email.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/email.svg';"
                alt="mail"
                           
              />
                            <p>mail@amritachandercharity.org.in</p>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img
                               
                src="http://localhost:3000/insta.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/insta.svg';"
                alt="social"
                           
              />
                        </a>
                        <a href="/">
                            <img
                               
                src="http://localhost:3000/linkedin.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/linkedin.svg';"
                alt="social"
                           
              />
                        </a>
                        <a href="/">
                            <img
                               
                src="http://localhost:3000/facebook.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/facebook.svg';"
                alt="social"
                           
              />
                        </a>
                        <a href="/">
                            <img
                               
                src="http://localhost:3000/youtube.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/youtube.svg';"
                alt="social"
                           
              />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.color}>
                <nav className={`container ${styles.navbar}`}>
                    <div className={styles.navbar_logo}>
                        <a href="/">
                            <img
                               
                src="http://localhost:3000/logo.svg"
                               
                onError="this.onerror=null; this.src='http://13.127.143.155/logo.svg';"
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
                                        <a href="/">
                                            <img
                                               
                        src="http://localhost:3000/insta_nav.svg"
                                               
                        onError="this.onerror=null; this.src='http://13.127.143.155/insta_nav.svg';"
                        alt="social"
                                           
                      />
                                        </a>
                                        <a href="/">
                                            <img
                                                src="http://localhost:3000/linkedin_nav.svg"
                                                onError="this.onerror=null; this.src='http://13.127.143.155/linkedin_nav.svg';"
                        alt="social"
                                            />
                                        </a>
                                        <a href="/">
                                            <img
                                                src="http://localhost:3000/facebook_nav.svg"
                                                onError="this.onerror=null; this.src='http://13.127.143.155/facebook_nav.svg';"
                        alt="social"
                                            />
                                        </a>
                                        <a href="/">
                                            <img
                                                src="http://localhost:3000/youtube_nav.svg"
                                                onError="this.onerror=null; this.src='http://13.127.143.155/youtube_nav.svg';"
                        alt="social"
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <img
                                           
                      src="http://localhost:3000/logo.svg"
                                           
                      onError="this.onerror=null; this.src='http://13.127.143.155/logo.svg';"
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

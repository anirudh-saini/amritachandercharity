import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const apiUrl = process.env.REACT_APP_API_URL;

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
    setIsOpen(!isOpen);
    navigate("/donate");
  };
  return (
    <>
      <div className={styles.socialcolor}>
        <div className={`container ${styles.social}`}>
          <div>
            <a href="tel:+91 1144753285">
              <img src={`${apiUrl}/phone.svg`} alt="phone" />
              <p>+91 1144753285</p>
            </a>
            <a href="mailto:mail@amritachandercharity.org.in">
              <img src={`${apiUrl}/email.svg`} alt="mail" />
              <p>mail@amritachandercharity.org.in</p>
            </a>
          </div>
          <div>
            <a href="/">
              <img src={`${apiUrl}/insta.svg`} alt="social" />
            </a>
            <a href="/">
              <img src={`${apiUrl}/linkedin.svg`} alt="social" />
            </a>
            <a href="/">
              <img src={`${apiUrl}/facebook.svg`} alt="social" />
            </a>
            <a href="/">
              <img src={`${apiUrl}/youtube.svg`} alt="social" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.color}>
        <nav className={`container ${styles.navbar}`}>
          <div className={styles.navbar_logo}>
            <a href="/">
              <img src={`${apiUrl}/logo.svg`} alt="logo" />
            </a>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
            <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
            <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
          </div>
          <ul className={`${styles.nav_links} ${isOpen ? styles.open : ""}`}>
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
                      <img src={`${apiUrl}/insta_nav.svg`} alt="social" />
                    </a>
                    <a href="/">
                      <img src={`${apiUrl}/linkedin_nav.svg`} alt="social" />
                    </a>
                    <a href="/">
                      <img src={`${apiUrl}/facebook_nav.svg`} alt="social" />
                    </a>
                    <a href="/">
                      <img src={`${apiUrl}/youtube_nav.svg`} alt="social" />
                    </a>
                  </div>
                  <div>
                    <img src={`${apiUrl}/logo.svg`} alt="logo" />
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

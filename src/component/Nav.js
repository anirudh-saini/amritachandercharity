import React, { useState } from "react";
import styles from "./nav.module.scss";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={` ${styles.navbar}`}>
      <div className={styles.navbar_logo}>
        <a href="/">
          <img src="logo.svg" alt="logo" />
        </a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.open : ""}`}></div>
      </div>
      <ul className={`${styles.nav_links} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT US</a>
        </li>
        <li>
          <a href="/">GALLERY</a>
        </li>
        <li>
          <a href="/">MEDIA</a>
        </li>
        <li>
          <a href="/">CONTACT</a>
        </li>
        <li>
          <button>DONATE NOW</button>
        </li>
      </ul>
    </nav>
  );
};

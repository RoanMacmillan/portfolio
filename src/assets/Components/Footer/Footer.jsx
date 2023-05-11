import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ className }) => {
  return (
    <footer>
      <nav className={`${styles.footerNav} ${className}`}>
        <div className={styles.linksContainer}>
          <p className={styles.attribution}>Follow me</p>

          <a
            href="https://github.com/roanmacmillan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/roan-macmillan-8b9261273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/Petequinnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.frontendmentor.io/profile/RoanMacmillan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
        </div>

        <div className={styles.attributionWrapper}>
          <p className={styles.attribution}>Skill Icons created by Freepik - Flaticon</p>
        </div>
      </nav>

      <p className={styles.year}>Roan Macmillan - 2023</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";


const Footer = ({className}) => {
  return (
    <footer>
      

      <nav className={`${styles.footerNav} ${className}`}>

      <p>Follow me</p>
      <div className={styles.linksContainer}>
      <Link>Github</Link>
      <Link>Linkedin</Link>
      <Link>Twitter</Link>
      </div>
      <p>Roan Macmillan 2023</p>

      </nav>
      
    </footer>
  );
};

export default Footer;

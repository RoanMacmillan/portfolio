import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import hamburger from "../../Images/hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import close from "../../Images/icon-close.svg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDetailPage = location.pathname.includes("/portfolio/");

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`${isDetailPage ? styles.detailHeader : ""} ${
        isMenuOpen ? styles.menuOpen : ""
      }`}
    >
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} to="/" onClick={handleLinkClick}>
          rm
        </Link>

        <nav className={styles.headerNav}>
          <img
            className={styles.hamburger}
            src={hamburger}
            onClick={handleHamburgerClick}
          ></img>

          <div
            className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
          >
            <div className={styles.headerWrapper}>
              <Link
                className={styles.logoMobile}
                to="/"
                onClick={handleLinkClick}
              >
                rm
              </Link>

              <img
                className={styles.hamburger}
                src={close}
                onClick={handleHamburgerClick}
              ></img>
            </div>

            <div
              className={`${styles.mobileLinksContainer} ${
                isMenuOpen ? styles.open : ""
              }`}
            >
              <Link to="/" onClick={handleLinkClick}>
                Portfolio
              </Link>
              <Link to="/about" onClick={handleLinkClick}>
                About me
              </Link>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
            <div className={styles.mobileMenuFooter}>
              <div className={styles.linksContainer}>
                <p>Follow me</p>

                <Link>Github</Link>
                <Link>Linkedin</Link>
                <Link>Twitter</Link>
              </div>
              <p className={styles.date}>Portfolio / 2023</p>
            </div>
          </div>

          <div className={styles.desktopLinks}>
            <Link to="/">Portfolio</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import hamburger from "../../Images/hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import useInterSectionObserver from "../userInterSectionObserver/useInterSectionObserver";

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
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <div className={styles.mobileContentWrapper}>
                <div className={styles.menuLeft}>
                <div className={styles.mobileLinksContainer}>
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
                  </div>
                </div>

                <div className={styles.menuRight}>
                  <p>
                    Aspiring Frontend Developer based in Edinburgh, Scotland.
                    You can check out my latest project below
                  </p>
                  <Link to="/">Audio Ecommerce Site</Link>
                  <div className={styles.siteLine}></div>
                </div>
              </div>
            </div>
          )}
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

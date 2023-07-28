import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import hamburger from "../../Images/hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import close from "../../Images/icon-close.svg";
import classNames from "classnames";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDetailPage = location.pathname.includes("/portfolio/");

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname === path;
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.classList.add(styles.noScroll);
  //   } else {
  //     document.body.classList.remove(styles.noScroll);
  //   }
  // }, [isMenuOpen]);

  return (
    <>
      {/* <div className={styles.bar}></div> */}

      <header
        className={`${isDetailPage ? styles.detailHeader : ""} ${
          isMenuOpen ? styles.menuOpen : ""
        }`}
      >
        <div className={styles.headerWrapper}>
          <Link className={styles.logo} to="/">
            rm
          </Link>


          <nav onClick={handleHamburgerClick} className={styles.headerNav}>
            <div className={styles.hamburger}>
              <div className={styles.hamLine}></div>

              <div className={styles.hamLine}></div>
            </div>

            <div
              className={`${styles.mobileMenu} ${
                isMenuOpen ? styles.open : ""
              }`}
            >
              {/* <div className={styles.bar}></div> */}

              <div className={styles.headerWrapper}>
                <Link
                  className={styles.logoMobile}
                  to="/"
                  onClick={handleMenuLinkClick}
                >
                  rm
                </Link>

                <img
                  className={styles.hamburger}
                  alt={hamburger}
                  src={close}
                  onClick={handleHamburgerClick}
                ></img>
              </div>

              <div className={styles.mobileLinksWrapper}>
                <div
                  className={`${styles.mobileLinksContainer} ${
                    isMenuOpen ? styles.open : ""
                  }`}
                >
                  <Link to="/" onClick={handleMenuLinkClick}>
                    Portfolio
                  </Link>
                  <Link to="/about" onClick={handleMenuLinkClick}>
                    About me
                  </Link>
                  <Link to="/contact" onClick={handleMenuLinkClick}>
                    Contact
                  </Link>
                </div>
              </div>
              <div className={styles.mobileMenuFooter}>
                <div className={styles.linksContainer}>
                  <div className={styles.top}>
                    <p>Follow me</p>

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
                      href="https://twitter.com/_roanmacmillan"
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

                  <p>Icons created by Freepik - Flaticon</p>
                </div>
                {/* <p className={styles.date}>Portfolio / 2023</p> */}
              </div>
            </div>

            <div className={styles.desktopLinks}>
              <Link
                className={classNames(styles.link, {
                  [styles.activeLink]: isActive("/"),
                })}
                to="/"
              >
                Portfolio
              </Link>
              <Link
                className={classNames(styles.link, {
                  [styles.activeLink]: isActive("/about"),
                })}
                to="/about"
              >
                About
              </Link>
              <Link
                className={classNames(styles.link, {
                  [styles.activeLink]: isActive("/contact"),
                })}
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

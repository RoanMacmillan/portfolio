import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import hamburger from "../../Images/hamburger.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import close from "../../Images/icon-close.svg";
import PageLoadingModal from "../PageLoadingModal/PageLoadingModal";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const isDetailPage = location.pathname.includes("/portfolio/");



  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkTo) => {
    if (linkTo === "/") {
      if (location.pathname !== "/") {
        setTimeout(() => {
          setIsMenuOpen(false);
        }, 525); // Adjust the delay as needed
      } else {
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
    }
  };
  

  useEffect(() => { 
    if (isMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
  }, [isMenuOpen]);

  return (
    <>
    <header
      className={`${isDetailPage ? styles.detailHeader : ""} ${
        isMenuOpen ? styles.menuOpen : ""
      }`}
    >
      <div className={styles.headerWrapper}>
        

        <CustomLink
            className={styles.logo}
            to="/"
            // showModal={showLoadingModal}
            setShowModal={setShowLoadingModal}
            handleLinkClick={handleLinkClick}
          >
            rm
          </CustomLink>

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
              

              <CustomLink
            className={styles.logoMobile}
            to="/"
            // showModal={showLoadingModal}
            setShowModal={setShowLoadingModal}
            handleLinkClick={handleLinkClick}
          >
            rm
          </CustomLink>

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
              <CustomLink
            // className={styles.logoMobile}
            to="/"
            // showModal={showLoadingModal}
            setShowModal={setShowLoadingModal}
            handleLinkClick={handleLinkClick}
          >
            Portfolio
          </CustomLink>
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

<PageLoadingModal showModal={showLoadingModal} />

</>
  );
};

export default Header;

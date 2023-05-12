import React from "react";
import styles from "./ContactLink.module.css";
import { Link } from "react-router-dom";
import arrowUp from "../../Images/icon-arrow-up.svg";
import useInterSectionObserver from "../../Components/userInterSectionObserver/useInterSectionObserver";

const ContactLink = ({
  h3Text,
  strongText,
  linkText,
  linkTo,
  hideContactLine,
}) => {
  const [scrollBtnRef, scrollBtnVisible] = useInterSectionObserver();
  const [contactWrapperRef, contactWrapperVisible] = useInterSectionObserver();
  const [contactLineRef, contactLineVisible] = useInterSectionObserver();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className={styles.contactLink}>
      <div
  ref={contactLineRef}
  className={`${styles.contactLine} ${
    hideContactLine ? styles.hide : ""
  } ${contactLineVisible ? styles.lineLoad : styles.lineHidden}`}
></div>
        <div
          ref={contactWrapperRef}
          className={`${styles.contactWrapper} ${
            contactWrapperVisible ? "fadeInLoad" : "hidden"
          }`}
        >
          <h3>
            {h3Text}
            <br />
            <strong>{strongText}</strong>
          </h3>
          <div className={styles.cLinkContainer}>
            <Link to={linkTo} className={styles.contactA}>
              {linkText}
            </Link>
            <div className={styles.contactUnderline}>
              <div className={styles.loadingLine}></div>
            </div>
          </div>
        </div>

        <div
          ref={scrollBtnRef}
          className={`${styles.scrollBtn} ${
            scrollBtnVisible ? "fadeInRight" : "hiddenRight"
          }`}
          onClick={scrollToTop}
        >
          <p className={styles.scrollBtnText}>Scroll to top</p>
          <img src={arrowUp} alt={arrowUp} className={styles.arrowUp}></img>
        </div>
      </div>
    </>
  );
};

export default ContactLink;

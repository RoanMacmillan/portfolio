import React, { useState } from "react";
import styles from './ContactLink.module.css';
import { Link } from 'react-router-dom';
import arrowUp  from '../../Images/icon-arrow-up.svg'
import useInterSectionObserver from '../../Components/userInterSectionObserver/useInterSectionObserver';
import CustomLink from '../../Components/CustomLink/CustomLink'
import PageLoadingModal from '../../Components/PageLoadingModal/PageLoadingModal'


const ContactLink = ({ h3Text, strongText, linkText, linkTo }) => {


  const [scrollBtnRef, scrollBtnVisible] = useInterSectionObserver();
  const [contactWrapperRef, contactWrapperVisible] = useInterSectionObserver();
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  const handleLinkClick = (linkTo) => {
    if (linkTo === "/") {
      setShowLoadingModal(true);
      setTimeout(() => {
        setShowLoadingModal(false);
      }, 1250); // Adjust the delay as needed
    }
  };

  return (
    <>
    <div className={styles.contactLink}>
      <div className={styles.contactLine}></div>
      <div ref={contactWrapperRef} className={`${styles.contactWrapper} ${contactWrapperVisible ? 'fadeInLoad' : 'hidden'}`}>

      <h3>
        {h3Text}
        <br />
        <strong>{strongText}</strong>
      </h3>
      <div className={styles.cLinkContainer}>
      {linkTo === "/" ? (
  <CustomLink
    to={linkTo}
    className={styles.contactA}
    setShowModal={setShowLoadingModal}
    handleLinkClick={handleLinkClick}

  >
    {linkText}
  </CustomLink>
) : (
  <Link to={linkTo} className={styles.contactA}>
    {linkText}
  </Link>
)}        <div className={styles.contactUnderline}>

          <div className={styles.loadingLine}></div>
        </div>
      </div>
      </div>

      <div ref={scrollBtnRef} className={`${styles.scrollBtn} ${scrollBtnVisible ? 'fadeInRight' : 'hiddenRight'}`} onClick={scrollToTop}>

      <p className={styles.scrollBtnText}>Scroll to top</p>
      <img src={arrowUp} alt={arrowUp} className={styles.arrowUp} ></img>

      </div>

    </div>

    <PageLoadingModal showModal={showLoadingModal} />

    </>
  );
};

export default ContactLink;

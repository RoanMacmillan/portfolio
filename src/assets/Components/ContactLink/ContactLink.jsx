import React from 'react';
import styles from './ContactLink.module.css';
import { Link } from 'react-router-dom';
import arrowUp  from '../../Images/icon-arrow-up.svg'
import useInterSectionObserver from '../../Components/userInterSectionObserver/useInterSectionObserver';



const ContactLink = ({ h3Text, strongText, linkText, linkTo }) => {


  const [scrollBtnRef, scrollBtnVisible] = useInterSectionObserver({}, true);
  const [contactWrapperRef, contactWrapperVisible] = useInterSectionObserver({}, true);


  return (
    <div className={styles.contactLink}>
      <div className={styles.contactLine}></div>
      <div ref={contactWrapperRef} className={`${styles.contactWrapper} ${contactWrapperVisible ? 'fadeInLoad' : 'hidden'}`}>

      <h3>
        {h3Text}
        <br />
        <strong>{strongText}</strong>
      </h3>
      <div className={styles.cLinkContainer}>
        <Link to={linkTo} className={styles.contactA}>{linkText}</Link>
        <div className={styles.contactUnderline}>

          <div className={styles.loadingLine}></div>
        </div>
      </div>
      </div>
      {/* <div className={styles.scrollBtn}> */}

        <div ref={scrollBtnRef} className={`${styles.scrollBtn} ${scrollBtnVisible ? 'fadeInRight' : 'hiddenRight'}`}>

      <p className={styles.scrollBtnText}>Scroll to top</p>
      <img src={arrowUp} alt={arrowUp} className={styles.arrowUp} ></img>

      </div>

    </div>
  );
};

export default ContactLink;

import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioDetail.module.css";
import ContactLink from "../ContactLink/ContactLink";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";
import LinkBtn from "../Link/LinkBtn";

const PortfolioDetail = ({ portfolioData }) => {
  const { id } = useParams();
  const item = portfolioData.find((item) => item.id === id);

  const [staticWrapperRef, staticWrapperVisible] = useIntersectionObserver();
  const [staticWrapperRef2, staticWrapperVisible2] = useIntersectionObserver();

  return (
    <div className={styles.portfolioDetail}>
      <div
        ref={staticWrapperRef}
        className={`${styles.heroWrapper} ${
          staticWrapperVisible ? "fadeInLoadOpacity" : "hidden"
        }`}
      >
        <span>{`0${item.id}-03`}</span>
        <h2>{item.detailTitle}</h2>
        <div className={styles.line}></div>
        <p className={styles.titleDesc}>{item.description}</p>
      </div>
      <div className={styles.portfolioDetailContent}>
        <div
          ref={staticWrapperRef}
          className={`${styles.staticWrapper} ${
            staticWrapperVisible ? "fadeInLoadDelay2" : "hidden"
          }`}
        >
          <img className={styles.staticImg} src={item.detailStatic1}></img>
        </div>

        <div className={styles.test}>
          <div>
            <p className={styles.about}>About</p>
            <h3 className={styles.description}>{item.smallDescription}</h3>
          </div>
          <div className={styles.test2}>
            <p className={styles.background}>{item.background}</p>
            <div className={styles.detailLinks}>
              <LinkBtn linkToPage={item.demoURL} linkContent="View Demo" />
              <LinkBtn linkToPage={item.codeURL} linkContent="View Code" />
            </div>
          </div>
        </div>

        <div className={styles.staticColumn}>
          <div
            ref={staticWrapperRef2}
            className={`${styles.staticWrapper} ${
              staticWrapperVisible2 ? "fadeInLoadDelay2" : "hidden"
            }`}
          >
            <img className={styles.staticImg} src={item.detailStatic3}></img>
          </div>
        </div>

        {/* <div className={styles.backgroundCont}>
          <h3 className={`${styles.description} ${styles.backgroundTitle}`}>
            Project background
          </h3>

          <p className={styles.backgroundText}>
            We visited interesting interior designs in the modern plebiscite.
            Please check and view the collection. Creative projects are gaining
            new popularity as they surprise recipients with new possibilities.
            We pay attention to the user experience when viewing projects to
            create an advantage.
          </p>
          <div className={styles.linkContainer}>
            <LinkBtn linkToPage={item.demoURL} linkContent="View Demo" />
            <LinkBtn linkToPage={item.codeURL} linkContent="View Code" />
          </div>

        </div>



        <div className={styles.bigImgContainer}>

<img src={item.detailStatic2}></img>

</div> */}


      </div>
      <ContactLink
        h3Text="See"
        strongText="More"
        linkText="Portfolio"
        linkTo="/"
      />
    </div>
  );
};

export default PortfolioDetail;

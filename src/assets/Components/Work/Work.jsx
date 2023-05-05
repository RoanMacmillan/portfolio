import React, { useState, useEffect } from "react";
import styles from "./Work.module.css";
import arrowDown from "../../Images/arrow-down.svg";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import portfolioData from "../../../../portfolioItemsData.json";
import ContactLink from "../ContactLink/ContactLink";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";

const Work = () => {
  const [textContainerRef, textContainerVisible] = useIntersectionObserver();

  const isLargeScreen = window.innerHeight >= 1035;
  const isLargerScreen = window.innerHeight >= 1345;
  const isMobile = window.innerWidth < 700;


 

  return (
    <main>
      <div
        ref={textContainerRef}
        className={`${styles.textContainer} ${
          textContainerVisible ? "fadeInLoad" : "hidden"
        } `}
      >
        <h1>
          check<br></br> <strong>my</strong>
          <br className={styles.secondBreak}></br> portfolio
        </h1>
        <div className={styles.headingLine}></div>
        <p className={styles.titleP}>
          An aspiring frontend developer<br></br> who loves to build<br></br>{" "}
          visually appealing sites
        </p>
      </div>

      <div className={styles.portfolioContainer}>


        <div className={styles.row}>
          <PortfolioItem
            key={portfolioData[0].id}
            id={portfolioData[0].id}
            thumbnail={portfolioData[0].thumbnail}
            label={portfolioData[0].label}
            title={portfolioData[0].title}
            description={portfolioData[0].description}
            liveSite={portfolioData[0].liveSite}
            
            // transitionDuration={0.7}
            // transitionDelay={1.25}
          />
          <div className={styles.itemLine}></div>

          <PortfolioItem
            key={portfolioData[1].id}
            id={portfolioData[1].id}
            thumbnail={portfolioData[1].thumbnail}
            label={portfolioData[1].label}
            title={portfolioData[1].title}
            description={portfolioData[1].description}
            liveSite={portfolioData[1].liveSite}
            // transitionDelay={isLargerScreen ? 1.25 : 0}
            // transitionDuration={0.7}
          />

          <div className={styles.itemLine}></div>
        </div>
        <div className={styles.row2}>
          <PortfolioItem
            key={portfolioData[2].id}
            id={portfolioData[2].id}
            thumbnail={portfolioData[2].thumbnail}
            label={portfolioData[2].label}
            title={portfolioData[2].title}
            description={portfolioData[2].description}
            liveSite={portfolioData[2].liveSite}
            className={styles.min}
            // transitionDuration={0.7}
            // transitionDelay={isMobile ? 0 : 1.25}
          />
                    <div className={styles.itemLine}></div>

          <PortfolioItem
            key={portfolioData[3].id}
            id={portfolioData[3].id}
            thumbnail={portfolioData[3].thumbnail}
            label={portfolioData[3].label}
            title={portfolioData[3].title}
            description={portfolioData[3].description}
            liveSite={portfolioData[3].liveSite}
            // transitionDelay={isLargeScreen ? 1.25 : 0}
            // transitionDuration={0.7}


          />
        </div>
      </div>
      <ContactLink
        h3Text="Let's"
        strongText="Talk"
        linkText="Contact"
        linkTo="/contact"
      />
    </main>
  );
};

export default Work;

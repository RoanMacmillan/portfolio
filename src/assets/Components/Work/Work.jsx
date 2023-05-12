import React, { useEffect, useState } from 'react';
import styles from "./Work.module.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import portfolioData from "../../../../portfolioItemsData.json";
import ContactLink from "../ContactLink/ContactLink";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";
import LoadingModal from '../LoadingModal/LoadingModal';

const Work = () => {



  const [transitionsEnabled, setTransitionsEnabled] = useState(false);
  const [textContainerRef, textContainerVisible] = useIntersectionObserver({ transitionsEnabled: transitionsEnabled });
  const [portfolioItemRef, portfolioItemVisible] = useIntersectionObserver({ transitionsEnabled: transitionsEnabled });
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTransitionsEnabled(true);
      console.log('Transitions enabled:', transitionsEnabled); // Add this line to log the state
    }, 3000);
  
    return () => {
      clearTimeout(timer);
    };
  }, []);
  

  return (

    <>
    {loading && <LoadingModal />}
    <main>
      <div
        ref={textContainerRef}
        className={`${styles.textContainer} ${
          textContainerVisible ? "fadeInLoadOpacity" : "hidden"
        } `}
      >
        <h1>
          check<br></br>My<br className={styles.secondBreak}></br>
          <strong className={styles.workStrong}>Portfolio</strong>
        </h1>
        <div className={styles.headingLine}></div>
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
    </>
  );
};

export default Work;

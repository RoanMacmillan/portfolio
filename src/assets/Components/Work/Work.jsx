import React, { useEffect, useState } from "react";
import styles from "./Work.module.css";
import portfolioData from "../../../../portfolioItemsData.json";
import ContactLink from "../ContactLink/ContactLink";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";
import LoadingModal from "../LoadingModal/LoadingModal";
import { Link } from "react-router-dom";

const Work = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [transitionsEnabled, setTransitionsEnabled] = useState(false);
  const [textContainerRef, textContainerVisible] = useIntersectionObserver({ transitionsEnabled });
  const [itemWrapperRef, itemWrapperVisible] = useIntersectionObserver({ transitionsEnabled });
  const [itemWrapperRef1, itemWrapperVisible1] = useIntersectionObserver({ transitionsEnabled });
  const [itemWrapperRef2, itemWrapperVisible2] = useIntersectionObserver({ transitionsEnabled });
  const [itemWrapperRef3, itemWrapperVisible3] = useIntersectionObserver({ transitionsEnabled });
  
  useEffect(() => {
    // Hide the loading modal after 3 seconds
    const timer = setTimeout(() => {
      setModalVisible(false);
    }, 1500);

    // Enable the transitions after the modal has disappeared
    const transitionTimer = setTimeout(() => {
      setTransitionsEnabled(true);
    }, 2500); // This should be greater than the time taken by the modal to disappear

    return () => {
      clearTimeout(timer);
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <>
    <LoadingModal isVisible={modalVisible} />
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
            <div className={`${styles.portfolioItem}  `}>
              <div
                ref={itemWrapperRef}
                className={`${styles.itemWrapper} ${
                  itemWrapperVisible ? "fadeInLoadDelay2" : "hidden"
                }`}
              >
                <Link to={`/portfolio/${portfolioData[0].id}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={portfolioData[0].thumbnail}
                      alt={portfolioData[0].title}
                    />
                  </div>
                </Link>
                <p className={styles.label}>{portfolioData[0].label}</p>
                <h3>{portfolioData[0].title}</h3>
                <p className={styles.description}>
                  {portfolioData[0].description}
                </p>
              </div>
            </div>

            <div className={styles.itemLine}></div>

            <div className={`${styles.portfolioItem}  `}>
              <div
                ref={itemWrapperRef1}
                className={`${styles.itemWrapper} ${
                  itemWrapperVisible1 ? "fadeInLoadDelay2" : "hidden"
                }`}
              >
                <Link to={`/portfolio/${portfolioData[1].id}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={portfolioData[1].thumbnail}
                      alt={portfolioData[1].title}
                    />
                  </div>
                </Link>
                <p className={styles.label}>{portfolioData[1].label}</p>
                <h3>{portfolioData[1].title}</h3>
                <p className={styles.description}>
                  {portfolioData[1].description}
                </p>
              </div>
            </div>

            <div className={styles.itemLine}></div>
          </div>
          <div className={styles.row2}>

          <div className={`${styles.portfolioItem}  `}>
              <div
                ref={itemWrapperRef2}
                className={`${styles.itemWrapper} ${
                  itemWrapperVisible2 ? "fadeInLoadDelay2" : "hidden"
                }`}
              >
                <Link to={`/portfolio/${portfolioData[2].id}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={portfolioData[2].thumbnail}
                      alt={portfolioData[2].title}
                    />
                  </div>
                </Link>
                <p className={styles.label}>{portfolioData[2].label}</p>
                <h3>{portfolioData[2].title}</h3>
                <p className={styles.description}>
                  {portfolioData[2].description}
                </p>
              </div>
            </div>
            <div className={styles.itemLine}></div>

            <div className={`${styles.portfolioItem}  `}>
              <div
                ref={itemWrapperRef3}
                className={`${styles.itemWrapper} ${
                  itemWrapperVisible3 ? "fadeInLoadDelay2" : "hidden"
                }`}
              >
                <Link to={`/portfolio/${portfolioData[3].id}`}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={portfolioData[3].thumbnail}
                      alt={portfolioData[3].title}
                    />
                  </div>
                </Link>
                <p className={styles.label}>{portfolioData[3].label}</p>
                <h3>{portfolioData[3].title}</h3>
                <p className={styles.description}>
                  {portfolioData[3].description}
                </p>
              </div>
            </div>
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

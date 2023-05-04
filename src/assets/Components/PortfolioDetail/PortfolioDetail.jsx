import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioDetail.module.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import ContactLink from "../ContactLink/ContactLink";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";
import LinkBtn from "../Link/LinkBtn";

const PortfolioDetail = ({ portfolioData }) => {
  // extracts id parameter to fetch details for corresponding portfolio item
  const { id } = useParams();
  console.log(id);
  const item = portfolioData.find((item) => item.id === id);
  console.log(item);
  const detailTitleArray = item.detailTitle.split(" ");
  const detailTitle = detailTitleArray.join("<br>");

  const [staticWrapperRef, staticWrapperVisible] = useIntersectionObserver();
  const [staticWrapperRef2, staticWrapperVisible2] = useIntersectionObserver();


  // const heroStyle = {
  //   backgroundImage: `url(${item.detailHero})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "700px",
  // };

  return (
    <div className={styles.portfolioDetail}>
      {/* <div className={styles.heroWrapper}> */}
      <div ref={staticWrapperRef} className={`${styles.heroWrapper} ${staticWrapperVisible ? 'fadeInLoadOpacity' : 'hidden'}`}>

        <span>{`0${item.id}-03`}</span>
        <h2 dangerouslySetInnerHTML={{ __html: detailTitle }}></h2>
        <div className={styles.line}></div>
        <p className={styles.titleDesc}>
          This e-commerce site is a platform for selling audio equipment,
          complete with a functional cart and checkout system.
        </p>
      </div>
      <div className={styles.portfolioDetailContent}>
        <div ref={staticWrapperRef} className={`${styles.staticWrapper} ${staticWrapperVisible ? 'fadeInLoadDelay' : 'hidden'}`}>

          <img className={styles.staticImg} src={item.detailStatic1}></img>
        </div>
        {/* <div className={styles.backgroundWrapper}>
        <div className={styles.backgroundContainer}> */}
        <div className={styles.test}>
          <div>
            <p className={styles.about}>About</p>
            <h3 className={styles.description}>{item.smallDescription}</h3>
          </div>
          <div className={styles.test2}>
            <p className={styles.background}>{item.background}</p>
            <div className={styles.detailLinks}>
              {/* <div>
                <Link>Visit Live site</Link>
                <div className={styles.linkLine}></div>
              </div> */}

              <LinkBtn linkTo='/' linkContent='View Demo' />
              <LinkBtn linkTo='/' linkContent='View Code' />


              {/* <div>
                <Link>View code</Link>
                <div className={styles.linkLine}></div>
              </div> */}
            </div>
          </div>
        </div>
        {/* </div>
        
        </div> */}

        <div className={styles.staticColumn}>
          {/* <div className={styles.staticWrapper}>
            <img className={styles.staticImg} src={item.detailStatic2}></img>
          </div> */}

<div ref={staticWrapperRef2} className={`${styles.staticWrapper} ${staticWrapperVisible2 ? 'fadeInLoad' : 'hidden'}`}>
            <img className={styles.staticImg} src={item.detailStatic3}></img>
          </div>
        </div>
      </div>
      {/* <Navigation /> */}
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

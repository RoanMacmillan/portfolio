import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PortfolioDetail.module.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const PortfolioDetail = ({ portfolioData }) => {
  // extracts id parameter to fetch details for corresponding portfolio item
  const { id } = useParams();
  console.log(id);
  const item = portfolioData.find((item) => item.id === id);
  console.log(item);
  const detailTitleArray = item.detailTitle.split(" ");
  const detailTitle = detailTitleArray.join("<br>");

  // const heroStyle = {
  //   backgroundImage: `url(${item.detailHero})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "700px",
  // };

  return (
    <div className={styles.portfolioDetail}>
      <div className={styles.heroWrapper}>
        <span>{`0${item.id}-03`}</span>
        <h2 dangerouslySetInnerHTML={{ __html: detailTitle }}></h2>
        <div className={styles.line}></div>
        <p className={styles.titleDesc}>
          This e-commerce site is a platform for selling audio equipment,
          complete with a functional cart and checkout system.
        </p>
      </div>
      <div className={styles.portfolioDetailContent}>
        <div className={styles.staticWrapper}>
          <img className={styles.staticImg} src={item.detailStatic1}></img>
        </div>
        {/* <div className={styles.backgroundWrapper}>
        <div className={styles.backgroundContainer}> */}
        <div className={styles.test}>
          <div>
            <p className={styles.about}>About</p>
            <h3 className={styles.description}>{item.description}</h3>
          </div>
          <div className={styles.test2}>
            <p className={styles.background}>{item.background}</p>
            <div className={styles.detailLinks}>
              <div>
                <Link>Visit Live site</Link>
                <div className={styles.linkLine}></div>
              </div>
              <div>
                <Link>View code</Link>
                <div className={styles.linkLine}></div>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        
        </div> */}

        <div className={styles.staticColumn}>
          <div className={styles.staticWrapper}>
            <img className={styles.staticImg} src={item.detailStatic2}></img>
          </div>

          <div className={styles.staticWrapper}>
            <img className={styles.staticImg} src={item.detailStatic3}></img>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default PortfolioDetail;

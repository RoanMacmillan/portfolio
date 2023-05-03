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

  const heroStyle = {
    backgroundImage: `url(${item.detailHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
  };

  return (
    <div className={styles.portfolioDetail}>
      <div className={styles.heroWrapper} style={heroStyle}>
        <span>{`0${item.id}-03`}</span>
        <h2 dangerouslySetInnerHTML={{ __html: detailTitle }}></h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.portfolioDetailContent}>
        <h3>About</h3>
        <p className={styles.description}>{item.description}</p>

        <img src={item.detailStatic1}></img>
        <h3>Background</h3>
        <p>{item.background}</p>
        <div className={styles.detailLinks}>
        <Link>Visit Live site</Link>
        <Link>View code</Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default PortfolioDetail;

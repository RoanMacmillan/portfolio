import React from "react";
import styles from "./PortfolioItem.module.css";
import { Link } from "react-router-dom";
import useInterSectionObserver from "../userInterSectionObserver/useInterSectionObserver";

const PortfolioItem = ({
  id,
  label,
  thumbnail,
  title,
  description,
  className,
}) => {
  const [imageWrapperRef, imageWrapperVisible] = useInterSectionObserver();

 

  return (
    <div
      ref={imageWrapperRef}
      className={`${styles.portfolioItem} ${className} ${
        imageWrapperVisible ? "fadeInLoadDelay2" : "hidden"
      } `}
    
    >
      <Link to={`/portfolio/${id}`}>
        <div className={styles.imageWrapper}>
          <img src={thumbnail} alt={title} />
        </div>
      </Link>
      <p className={styles.label}>{label}</p>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default PortfolioItem;

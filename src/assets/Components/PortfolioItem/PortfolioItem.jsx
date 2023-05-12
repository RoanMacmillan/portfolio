import React, {useEffect, useRef} from "react";
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
  const [itemWrapperRef, itemWrapperVisible] = useInterSectionObserver(.25);
  const observerRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.observe(itemWrapperRef.current);
    }
  }, [itemWrapperRef]);

  return (
    <div className={`${styles.portfolioItem} ${className} `}>
      <div
        ref={itemWrapperRef}
        className={`${styles.itemWrapper} ${
          itemWrapperVisible ? "fadeInLoadDelay2" : "hidden"
        }`}
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
    </div>
  );
};

export default PortfolioItem;

import React from "react";
import styles from "./LoadingModal.module.css";

const LoadingModal = ({ show }) => {
  return (
    <div
      className={`${styles.modalOverlay} ${show ? styles.show : ""}`}
    >

      {/* <div className={styles.emptyBar}></div> */}

<div className={`${styles.loadingBar} ${show ? styles.loading : ""}`}></div>

      <div className={`${styles.modal} ${show ? styles.show : ""}`}>
        <p>Roan Macmillan</p>
      </div>
    </div>
  );
};

export default LoadingModal;
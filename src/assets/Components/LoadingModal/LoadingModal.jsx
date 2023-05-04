import React from "react";
import styles from "./LoadingModal.module.css";

const LoadingModal = ({ show }) => {
  return (
    <div
      className={`${styles.modalOverlay} ${show ? styles.show : ""}`}
    >
      <div className={`${styles.modal} ${show ? styles.show : ""}`}>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
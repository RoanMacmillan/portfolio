import React from "react";
import styles from "./modal.module.css";
import check from "../../Images/check.svg";
import errorIcon from "../../Images/error.svg";

const Modal = ({ closeModal, modalVisible, modalContent }) => {
  console.log("Modal visible:", modalVisible); // Add this line
  const renderModalContent = () => {
    if (modalContent === "success") {
      return (
        <>
          <img src={check} alt="check" className={styles.check} />
          <h2>Success!</h2>
          <p>Thank you for reaching out. I will get back to you shortly.</p>
        </>
      );
    } else {
      return (
        <>
          <img src={errorIcon} alt="error" className={styles.errorIcon} />
          <h2>Error</h2>
          <p>
            There was an error sending your message. Please try again later.
          </p>
        </>
      );
    }
  };

  return (
    <div
      className={`${styles.modal} ${modalVisible ? styles.modalVisible : ""}`}
      onClick={closeModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {renderModalContent()}
        <button onClick={closeModal} className={styles.modalCloseButton}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Modal;

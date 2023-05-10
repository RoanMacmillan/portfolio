import React from 'react'
import styles from './modal.module.css'
import check from '../../Images/check.svg'

const modal = ({ onClose, modalVisible, setModalVisible }) => {
  return (
    <div
      className={`${styles.modal} ${modalVisible ? styles.modalVisible : ""}`}
      onClick={() => setModalVisible(false)}
    >
    <div className={styles.modalContent}>
        <img src={check} alt={check} className={styles.check}></img>
      <h2>Success!</h2>
      <p>Thank you for reaching out. I will get back to you shortly.</p>
      <button onClick={onClose} className={styles.modalCloseButton}>
        Go back
      </button>
    </div>
  </div>
  )
}

export default modal

import React from 'react'
import styles from './ContactLink.module.css'
import { Link } from 'react-router-dom'
const ContactLink = () => {
  return (
    <div className={styles.contactLink}>
        <div className={styles.contactLine}></div>
      <h3>Let's<br></br><strong>Talk</strong></h3>
      <div className={styles.cLinkContainer}>
      <Link className={styles.contactLink}>Contact</Link>
      <div className={styles.contactUnderline}></div>
      </div>
    </div>
  )
}

export default ContactLink

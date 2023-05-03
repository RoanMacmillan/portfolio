import React from 'react'
import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
        <div className={styles.navigationLine}></div>
      <h3>See<br></br><strong>More</strong></h3>

      <div className={styles.prevNextContainer}>
        <div>
      <Link className={styles.prevBtn}>Previous</Link>
      <div className={styles.navUnderline}></div>
      </div>
      {/* <div className={styles.nextContainer}>
      <Link className={styles.nextBtn}>Next</Link>
      <div className={styles.navUnderline}></div>
      </div> */}
      </div>
    </div>
  )
}

export default Navigation

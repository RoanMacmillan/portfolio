import React from 'react'
import styles from './LinkBtn.module.css'

const LinkBtn = ({linkToPage, linkContent, onClick}) => {
  return (
    
    <a href={linkToPage} className={styles.linkBtn} target="_blank" rel="noopener noreferrer" onClick={onClick}>
    {linkContent}
    <div className={styles.linkUnderline}>
      <div className={styles.loadingLine}></div>
    </div>
  </a>
              
      
    
  )
}

export default LinkBtn

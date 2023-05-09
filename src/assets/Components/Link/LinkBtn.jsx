import React from 'react'
import styles from './LinkBtn.module.css'
import { Link } from 'react-router-dom';
import IconLinkArrow from '../../Images/icon-link-arrow.svg'


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

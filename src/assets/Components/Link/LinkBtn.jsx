import React from 'react'
import styles from './LinkBtn.module.css'
import { Link } from 'react-router-dom';
import IconLinkArrow from '../../Images/icon-link-arrow.svg'


const LinkBtn = ({linkToPage, linkContent}) => {
  return (
    
              <Link to={linkToPage} className={styles.linkBtn}>{linkContent}
              
              <div className={styles.linkUnderline}>

              <div className={styles.loadingLine}></div>


              </div>

              {/* <img src={IconLinkArrow} alt={IconLinkArrow} className={styles.linkArrow}/> */}



              
              </Link>
              
      
    
  )
}

export default LinkBtn

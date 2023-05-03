import React from "react";
import Me from "../../Images/mobile/about/me.jpg";
import styles from "./About.module.css";
import ContactLink from '../ContactLink/ContactLink';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
      

      <div className={styles.aboutTextContainer}>

      <h1>
        aspiring<br></br> <strong>frontend</strong> 
        <br></br>Developer
      </h1>
      <div className={styles.headingLine}></div>
      <h2 className={styles.titleHeading}>Roan Macmillan</h2>
      <p className={styles.greeting}>Hi, I'm Roan Macmillan, a frontend developer based in Edinburgh. Feel free to check out my portfolio.</p>
      
      <a className={styles.goTo}>Go to Portfolio</a>
      <div className={styles.linkLine}></div>


      </div>
      <div className={styles.meWrapper}>
      <img className={styles.me} src={Me} alt={Me}></img>
      </div>
      </div>



      {/* <h2 className={styles.aboutMeTitle}>About me</h2>
      <p className={styles.aboutMe}>
        Hi, I'm Roan Macmillan, a frontend developer based in
        Edinburgh. I'm passionate about creating beautiful and intuitive
        websites that provide a seamless user experience. I believe that great
        design and attention to detail are key to building effective websites,
        and I'm always looking for new ways to improve my skills and knowledge
        in the field. In my free time, you can find me experimenting with new
        design tools and frameworks, or working on personal projects to further
        develop my skills. 
        I'm excited to continue growing
        as a developer and to contribute to the world of web design and
        development.
      </p> */}
      <ContactLink />
    </div>
  );
};

export default About;

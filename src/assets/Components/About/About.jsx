import React, { useRef } from "react";
import Me from "../../Images/mobile/about/me.jpg";
import styles from "./About.module.css";
import ContactLink from "../ContactLink/ContactLink";
import jsLogo from '../../Images/java-script-logo.png'
import reactLogo from '../../Images/react.png';
import htmlLogo from '../../Images/html-5-logotype.png'
// import cssLogo from '../../images/css-3.png';
import LinkBtn from "../Link/LinkBtn";
import iconCode from '../../Images/icon-code.svg';
import services from '../../images/services.svg'
import responsive from '../../Images/responsive.svg'
import paint from '../../images/paint.svg'
import join from '../../Images/join.svg'

const About = () => {


  const skillsWrapperRef = useRef(); // Create a ref for the skillsWrapper

  const scrollToSkillsWrapper = () => {
    skillsWrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutTextContainer}>
          <h1>
            Frontend<br></br> <strong>Developer</strong>
            <br className={styles.devBreak}></br>
          </h1>
          <div className={styles.headingLine}></div>
          <div className={`${styles.meWrapper} ${styles.meWrapperMobile}`}>
            <img className={styles.me} src={Me} alt={Me}></img>
          </div>

          <div className={styles.aboutItemContainer}>
          <h2 className={styles.titleHeading}>About me</h2>
          <p className={styles.greeting}>
            Hi, I'm Roan Macmillan, a frontend developer based in Edinburgh. I'm
            passionate about creating intuitive websites that
            provide a seamless user experience. 
            
            {/* I'm always looking for new ways to improve my skills and knowledge
            in the field. In my free time, you can find me experimenting with
            new design tools and frameworks, or working on personal projects to
            further develop my skills. */}
          </p>
          <LinkBtn onClick={scrollToSkillsWrapper} linkContent='Read More'></LinkBtn>


          </div>


          {/* <a className={styles.goTo}>Go to Portfolio</a>
      <div className={styles.linkLine}></div> */}
        </div>
        <div className={`${styles.meWrapper} ${styles.meWrapperDesktop}`}>
          <img className={styles.me} src={Me} alt={Me}></img>
          {/* <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a> */}
        </div>
      </div>

      
        {/* <img src={jsLogo}></img> */}

        <div ref={skillsWrapperRef} className={styles.skillsWrapper}>

        <h3>Skills</h3>


      <div className={styles.skillsContainer}>


      <div className={styles.skillsChild}>


      <div className={styles.iconWrapper}>

      
      <img src={jsLogo} alt={jsLogo}></img>

      </div>
      <span>Javascript</span>


      </div>

      <div className={styles.skillsChild}>


      <div className={styles.iconWrapper}>

      
      {/* <img src={cssLogo} alt={cssLogo}></img> */}

      </div>
      <span>CSS 3</span>


      </div>

      <div className={styles.skillsChild}>


      <div className={styles.iconWrapper}>

      
      <img src={htmlLogo} alt={jsLogo}></img>

      </div>
      <span>HTML 5</span>


      </div>


      <div className={styles.skillsChild}>


      <div className={styles.iconWrapper}>

      
      <img src={reactLogo} alt={jsLogo}></img>

      </div>
      <span>React</span>


      </div>



      


      </div>

      </div>

      <div className={styles.servicesWrapper}>
      <div className={styles.titleWrapper}>
      <img className={styles.join} src={join} alt={join}></img>
      <h3>Services</h3>
      <p>You can check out what I do below</p>
      </div>

      <div className={styles.cardContainer}>

        


      <div className={styles.card}>

      <img src={iconCode} alt={iconCode}></img>

      <h4>Frontend Development</h4>

      <p>I always keep up to date with the latest frameworks and trends to bring designs to life.</p>


      </div>

      <div className={`${styles.card} ${styles.middle}`}>

      <img src={responsive} alt={iconCode}></img>

      <h4>Responsive Design</h4>

      <p>By implementing responsive design, Your website will look great and function on any device.</p>


      </div>

      <div className={styles.card}>

      <img src={paint} alt={iconCode}></img>

      <h4>Web Design</h4>

      <p>Creating visually appealing and user-friendly website designs from scratch or based on client requirements.</p>


      </div>



      </div>





      </div>

      <div className={styles.contactLinkWrapper}>

      <ContactLink
        h3Text="Let's"
        strongText="Talk"
        linkText="Contact"
        linkTo="/contact"
        hideContactLine={true}
      />

</div>
    </div>
  );
};

export default About;

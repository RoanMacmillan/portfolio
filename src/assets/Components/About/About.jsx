import React, { useRef } from "react";
import Me from "../../Images/mobile/about/me.jpg";
import styles from "./About.module.css";
import ContactLink from "../ContactLink/ContactLink";
import jsLogo from "../../Images/java-script-logo.png";
import reactLogo from "../../Images/react.png";
import htmlLogo from "../../Images/html-5-logotype.png";
import cssLogo from "../../Images/css-3.png";
import LinkBtn from "../Link/LinkBtn";
import iconCode from "../../Images/icon-code.svg";
import responsive from "../../Images/responsive.svg";
import paint from "../../Images/paint.svg";
import join from "../../Images/join.svg";
import useIntersectionObserver from "../userInterSectionObserver/useInterSectionObserver";

const About = () => {
  const skillsWrapperRef = useRef(); // Create a ref for the skillsWrapper

  const scrollToSkillsWrapper = () => {
    skillsWrapperRef.current.scrollIntoView({ behavior: "smooth" });
  };

  
  const [servicesWrapperRef, servicesWrapperVisible] = useIntersectionObserver();
  const [cardRef, cardVisible] = useIntersectionObserver();
 
  const [iconWrapperRef1, iconWrapperVisible1] = useIntersectionObserver();
  const [iconWrapperRef2, iconWrapperVisible2] = useIntersectionObserver();
  const [iconWrapperRef3, iconWrapperVisible3] = useIntersectionObserver();
  const [iconWrapperRef4, iconWrapperVisible4] = useIntersectionObserver();




  return (
    <div className={styles.about}>
                <div  className={`${styles.aboutContainer}`}>

        <div className={styles.aboutTextContainer}>
          <h1>
            Frontend<br></br> <strong>Developer</strong>
            <br className={styles.devBreak}></br>
          </h1>
          <div className={styles.headingLine}></div>
          {/* <div ref={meWrapperRef} className={`${styles.meWrapper} ${styles.meWrapperMobile} ${meWrapperVisible ? 'fadeIn' : 'hidden'}`}>
            <img className={styles.me} src={Me} alt={Me}></img>
          </div> */}

          <div className={styles.aboutItemContainer}>
            <h2 className={styles.titleHeading}>About me</h2>
            <p className={styles.greeting}>
              Hi, I'm Roan Macmillan, a frontend developer based in Edinburgh.
              I'm passionate about creating intuitive websites that provide a
              seamless user experience.
              
            </p>
            <LinkBtn
              onClick={scrollToSkillsWrapper}
              linkContent="Read More"
            ></LinkBtn>
          </div>

        </div>
        {/* <div className={`${styles.meWrapper} ${styles.meWrapperDesktop}`}>
          <img className={styles.me} src={Me} alt={Me}></img>
        </div> */}
      </div>


      <div ref={skillsWrapperRef} className={styles.skillsWrapper}>

        {/* <h3 ref={headingRef}>Skills</h3> */}

        

        <div className={styles.skillsContainer}>
          <div className={styles.skillsTop}>
        <div className={`${styles.skillsChild}`}>
            {/* <div className={styles.iconWrapper}> */}
              <div ref={iconWrapperRef1} className={`${styles.iconWrapper} ${iconWrapperVisible1 ? 'fadeInSkills1' : 'skillsHidden'}`}>
              <img src={jsLogo} alt={jsLogo}></img>
            </div>
            {/* <span>Javascript</span> */}
          </div>

          <div className={`${styles.skillsChild} `}>
            {/* <div className={styles.iconWrapper}> */}
            <div ref={iconWrapperRef2} className={`${styles.iconWrapper} ${iconWrapperVisible2 ? 'fadeInSkills1' : 'skillsHidden'}`}>


              <img src={cssLogo} alt={cssLogo}></img>
            </div>
            {/* <span>CSS 3</span> */}
          </div>
          </div>
        <div className={styles.skillsBottom}>
          <div className={`${styles.skillsChild} `}>
            {/* <div className={styles.iconWrapper}> */}
            <div ref={iconWrapperRef3} className={`${styles.iconWrapper} ${iconWrapperVisible3 ? 'fadeInSkills1' : 'skillsHidden'}`}>


              <img src={htmlLogo} alt={jsLogo}></img>
            </div>
            {/* <span>HTML 5</span> */}
          </div>

          <div className={`${styles.skillsChild} `}>
            {/* <div className={styles.iconWrapper}> */}
            <div ref={iconWrapperRef4} className={`${styles.iconWrapper} ${iconWrapperVisible4 ? 'fadeInSkills1' : 'skillsHidden'}`}>


              <img src={reactLogo} alt={jsLogo}></img>
            </div>
            {/* <span>React</span> */}
          </div>
          </div>
        </div>
      </div>

      <div ref={servicesWrapperRef} className={styles.servicesWrapper}>
        <div className={styles.titleWrapper}>
          <img className={styles.join} src={join} alt={join}></img>
          <h3>Services</h3>
          <p>You can check out what I do below</p>
        </div>

        <div className={styles.cardContainer}>
        {/* <div ref={skillRef} className={`${styles.skillsChild} ${headingVisible  ? 'fadeInSkills4' : 'skillsHidden'}`}> */}

          <div ref={cardRef} className={`${styles.card} ${servicesWrapperVisible ? 'fadeInSkills1' : 'skillsHidden'} `}>
            <img src={iconCode} alt={iconCode}></img>

            <h4>Frontend Development</h4>

            <p>
              I always keep up to date with the latest frameworks and trends to
              bring designs to life.
            </p>
          </div>

          <div ref={cardRef} className={`${styles.card} ${servicesWrapperVisible ? 'fadeInSkills2' : 'skillsHidden'} `}>
            <img src={responsive} alt={iconCode}></img>

            <h4>Responsive Design</h4>

            <p>
              By implementing responsive design, Your website will look great
              and function on any device.
            </p>
          </div>

          <div ref={cardRef} className={`${styles.card} ${servicesWrapperVisible ? 'fadeInSkills3' : 'skillsHidden'} `}>
            <img src={paint} alt={iconCode}></img>

            <h4>Web Design</h4>

            <p>
              Creating visually appealing and user-friendly website designs from
              scratch or based on client requirements.
            </p>
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

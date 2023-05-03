import React from "react";
import Me from "../../Images/mobile/about/me.jpg";
import styles from "./About.module.css";
import ContactLink from '../ContactLink/ContactLink';

const About = () => {
  return (
    <div className={styles.about}>
      <img className={styles.me} src={Me} alt={Me}></img>
      <h1>
        aspiring<br></br> <strong>frontend</strong>
        <br></br>Developer
      </h1>
      <div className={styles.headingLine}></div>

      <h2>About me</h2>
      <p>
        Hi, I'm Roan Macmillan, a frontend developer based in
        Edinburgh. I'm passionate about creating beautiful and intuitive
        websites that provide a seamless user experience. I believe that great
        design and attention to detail are key to building effective websites,
        and I'm always looking for new ways to improve my skills and knowledge
        in the field. In my free time, you can find me experimenting with new
        design tools and frameworks, or working on personal projects to further
        {/* develop my frontend development skills. I'm excited to continue growing
        as a developer and to contribute to the world of web design and
        development. */}
      </p>
      <ContactLink />
    </div>
  );
};

export default About;

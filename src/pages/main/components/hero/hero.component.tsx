import React from "react";
import AnimatedLogoAtomicComponent from "../../../../common/atomic-components/animated-logo/animated-logo.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import styles from "./hero.module.css";
import image from "./images/ipad-hand.png";
import MenuComponent from "./menu/menu.component";

const HeroComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.content}>
          <AnimatedLogoAtomicComponent />
          <h2>The best application for learning grammar</h2>
          <h1>Mobile and Web Application</h1>
          <ButtonComponent name="Download" />
        </div>
        <div className={styles.circleButton}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <img src={image} alt="" />
        <div className={styles.circleButton}>
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
      <MenuComponent />
    </div>
  );
};

export default HeroComponent;

import React from "react";
import AnimatedLogoAtomicComponent from "../../../../common/atomic-components/animated-logo/animated-logo.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import styles from "./hero.module.css";
import image from "./images/ipad-hand.png";
import MenuComponent from "./menu/menu.component";
import { Fade } from "react-awesome-reveal";

const HeroComponent: React.FC = () : JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <Fade>
          <div className={styles.content}>
            <AnimatedLogoAtomicComponent />
            <h1>Лучшее приложение для изучения грамматики</h1>
            <h2>Доступны мобильное и веб приложение</h2>
            <ButtonComponent name="Скачать" />
          </div>
        </Fade>
        <div className={styles.circleButton}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Fade>
          <img src={image} alt="" />
        </Fade>
        <div className={styles.circleButton}>
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
      <MenuComponent />
    </div>
  );
};

export default HeroComponent;

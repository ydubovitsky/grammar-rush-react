import React from "react";
import { Link } from "react-router-dom";
import styles from "./hero.module.css";
import MenuComponent from "./components/menu/menu.component";
import HeroSvg from "./svg/teacher.svg";
import { Fade } from "react-awesome-reveal";
import NavigationPanelComponent from "./components/navigation/navigation-panel.component";

const HeroComponent: React.FC = (): JSX.Element => {
  return (
    <Fade>
      <div className={styles.container}>
        <nav>
          <h1>Yeap! English</h1>
          <NavigationPanelComponent/>
        </nav>
        <div className={styles.hero}>
          <div className={styles.svgContainer}>
            <img src={HeroSvg} alt="Your SVG" />
          </div>
          <div className={styles.description}>
            <h1>Английский? Yeap!</h1>
            <h3>Больше никакой воды и нудной теории</h3>
            <h3>Все коротко, просто и понятно</h3>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default HeroComponent;

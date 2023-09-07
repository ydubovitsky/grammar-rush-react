import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import styles from "./hero.module.css";
import HeroSvg from "./svg/teacher.svg";

const HeroComponent: React.FC = (): JSX.Element => {

  return (
    <div className={styles.container}>
      <Fade>
        <div className={styles.svgContainer}>
          <img src={HeroSvg} alt="There is no" />
        </div>
      </Fade>
      <div className={styles.description}>
        <Slide cascade={true} triggerOnce>
          <h1>Английский? Yeap!</h1>
          <p>Больше никакой воды и скучной теории</p>
          <p>Все коротко, просто и понятно</p>
        </Slide>
      </div>
    </div>
  );
};

export default HeroComponent;

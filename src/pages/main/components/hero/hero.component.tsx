import React from "react";
import MobileApp3dComponent from "../../../../common/components/mobile-app-3d/mobile-app-3d.component";
import styles from "./hero.module.css";

const SPLINE_URL =
  "https://prod.spline.design/zepWzaKNvJWmV3dB/scene.splinecode";

const HeroComponent: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <MobileApp3dComponent url={SPLINE_URL} />
    </div>
  );
};

export default HeroComponent;

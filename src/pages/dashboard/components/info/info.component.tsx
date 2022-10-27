import styles from "./info.module.css";
import imageSrc from "./images/towfiqu-barbhuiya-5u6bz2tYhX8-unsplash.jpg";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";

const InfoComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <UnitTitleComponent text="English exercises"/>
      <div className={styles.description}>
        <img src={imageSrc} alt="" />
        <p>
          This section contains exercises in English. With their help, you can
          consolidate or test knowledge. Exercises are available without
          registration, SMS and other complex body movements, they are not taken
          from collections, textbooks, but invented by me personally. 
          All exercises are given with answers, translation, places with hints, the
          correctness of the answers is checked automatically. Most of the
          exercises are designed for beginners, they are designed to consolidate
          the material.
        </p>
      </div>
    </div>
  );
};

export default InfoComponent;

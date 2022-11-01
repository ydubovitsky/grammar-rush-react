import styles from "./info.module.css";
import imageSrc from "./images/alexander-grey-jU40gA2UDmA-unsplash.jpg";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
const Fade = require("react-reveal/Fade");

const InfoComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <UnitTitleComponent text="English exercises" />
      <div className={styles.description}>
        <Fade bottom cascade>
          <img src={imageSrc} alt="" />
          <p>
            This section contains exercises in English. With their help, you can
            consolidate or test knowledge. Exercises are available without
            registration, SMS and other complex body movements, they are not
            taken from collections, textbooks, but invented by me personally.
            All exercises are given with answers, translation, places with
            hints, the correctness of the answers is checked automatically. Most
            of the exercises are designed for beginners, they are designed to
            consolidate the material.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default InfoComponent;

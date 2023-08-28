import { Fade } from "react-awesome-reveal";
import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import styles from "./about-us.module.css";
import QuestionsSvg from "./svg/questions.svg";

const AboutUsComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <Fade>
        <SectionTitleComponent name="Остались вопросы? Напишите нам!" />
        <div className={styles.featuresContainer}>
          <div className={styles.svgContainer}>
            <img src={QuestionsSvg} alt="Your SVG" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutUsComponent;

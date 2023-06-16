import { Fade } from "react-awesome-reveal";
import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import TrainerComponent from "../../../dashboard/components/times/components/trainer/trainer.component";
import { PRESENT_CONTINUOUS } from "../../../../assets/data";
import styles from "./exercise-list.module.css";

const ExerciseListComponent: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Fade>
        <SectionTitleComponent
          name="Бесконечное количесвто заданий"
          description="Отточите свои знания до полного автоматизма с нашим потрясающим тренажером"
        />
        <TrainerComponent tense={PRESENT_CONTINUOUS} />
      </Fade>
    </div>
  );
};

export default ExerciseListComponent;

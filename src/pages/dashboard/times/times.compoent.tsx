import { useParams } from "react-router-dom";
import { tenseByNameSelector } from "../../../redux/features/tense/tense.slice";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { smoothScrollToElement } from "../../../utils/smoothScrollToElement";
import NavComponent from "./components/nav/nav.component";
import TrainerComponent from "./components/trainer/trainer.component";
import styles from "./times.module.css";

const TimesComponent: React.FC = (): JSX.Element => {
  const { id } = useParams<string>();

  const tense = useAppSelector((state) => tenseByNameSelector(state, id!));

  return (
    <div className={styles.container}>
      <NavComponent />
      <div className={styles.tenseContainer} id="tenseContainer">
        <div className={styles.tenseInfo}>
          <div className={styles.header}>
            <h1>Тема: {tense?.name}</h1>
            <div
              className={styles.trainerButton}
              onClick={() => smoothScrollToElement("tenseTrainer")}
            >
              <i className="fas fa-arrow-down"></i>
              <p>К тренажеру</p>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: tense?.html ? tense.html : "",
            }}
          ></div>
        </div>
        <TrainerComponent tense={tense} />
      </div>
    </div>
  );
};

export default TimesComponent;

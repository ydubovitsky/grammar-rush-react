import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TenseInterface } from "../../../../types";
import { smoothScrollToElement } from "../../../../utils/smoothScrollToElement";
import NavComponent from "./components/nav/nav.component";
import TrainerComponent from "./components/trainer/trainer.component";
import {
  FUTURE_CONTINUOUS,
  FUTURE_PERFECT,
  FUTURE_SIMPLE,
  PAST_CONTINUOUS,
  PAST_PERFECT,
  PAST_SIMPLE,
  PRESENT_CONTINUOUS,
  PRESENT_PERFECT,
  PRESENT_SIMPLE,
} from "./data";
import styles from "./times.module.css";

const TENSES_LIST = [
  PRESENT_CONTINUOUS,
  PAST_CONTINUOUS,
  FUTURE_CONTINUOUS,
  PRESENT_SIMPLE,
  PAST_SIMPLE,
  FUTURE_SIMPLE,
  PRESENT_PERFECT,
  PAST_PERFECT,
  FUTURE_PERFECT,
];

const TimesComponent: React.FC = (): JSX.Element => {
  const { id } = useParams<string>();
  const [tense, setTense] = useState<TenseInterface>();

  //!TODO Переписать этот кошмар
  useEffect(() => {
    const tense = TENSES_LIST.find((tense) => tense.name === id);
    tense !== undefined ? setTense(tense) : setTense(PRESENT_SIMPLE);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.tenseContainer}>
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
      <NavComponent setTense={setTense} tensesList={TENSES_LIST} />
    </div>
  );
};

export default TimesComponent;

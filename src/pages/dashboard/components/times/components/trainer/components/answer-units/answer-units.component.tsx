import { memo } from "react";
import { getPosibleAnswerUnitsArray } from "../../../../../../../../redux/features/tense/tense.slice";
import {
  SentenceInterface,
  TenseInterface,
} from "../../../../../../../../types";
import styles from "./answer-units.module.css";

interface AnswerUnitsComponentProps {
  tense: TenseInterface | undefined;
  sentence: SentenceInterface;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const AnswerUnitsComponent: React.FC<AnswerUnitsComponentProps> = memo(
  ({ tense, sentence, setUserAnswer }): JSX.Element => {

    //* Return list of Units Components
    const showAnswerUnitsListElements = (
      sentence: SentenceInterface,
      tense: TenseInterface
    ) => {
      return getPosibleAnswerUnitsArray(sentence, tense).map((element, idx) => (
        <div
          key={idx}
          className={styles.answerBox}
          onClick={() => setUserAnswer((prev) => prev + " " + element)}
        >
          <p>{element}</p>
        </div>
      ));
    };

    return (
      <div className={styles.container}>
        <div className={styles.units}>
          {showAnswerUnitsListElements(sentence, tense!)}
        </div>
        <p style={{ fontStyle: "italic" }}>
          Составьте предложение из приведенных выше частей:
        </p>
      </div>
    );
  }
);

export default AnswerUnitsComponent;

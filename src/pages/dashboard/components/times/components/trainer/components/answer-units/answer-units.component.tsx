import {
  SentenceInterface,
  TenseInterface,
} from "../../../../../../../../types";
import styles from "./answer-units.module.css";
import { default as rndRangeNum } from "../../../../../../../../utils/randomNumberInRange";

interface AnswerUnitsComponentProps {
  tense: TenseInterface | undefined;
  sentence: SentenceInterface;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const AnswerUnitsComponent: React.FC<AnswerUnitsComponentProps> = ({
  tense,
  sentence,
  setUserAnswer,
}): JSX.Element => {
  //This function return array of possible piece of answer
  const getPosibleAnswerUnitsArray = (
    sentence: SentenceInterface,
    tense: TenseInterface | undefined
  ): Array<string> => {
    let result = [""];

    if (tense != undefined) {
      result = sentence.ru
        .split(" ")
        .concat(
          Object.values(
            tense.pronounts[1][rndRangeNum(0, tense.pronounts[1].length)]
          )
        )
        .concat(
          Object.values(
            tense.auxiliaries[0][rndRangeNum(0, tense.auxiliaries[0].length)]
          )
        )
        .concat(
          Object.values(tense.verbs[0][rndRangeNum(0, tense.verbs[0].length)])
        )
        .filter((el) => el !== "")
        .sort();
    }

    return result;
  };

  return (
    <div className={styles.container}>
      <div className={styles.units}>
        {getPosibleAnswerUnitsArray(sentence, tense).map((element, idx) => (
          <div
            key={idx}
            className={styles.answerBox}
            onClick={() => setUserAnswer((prev) => prev + " " + element)}
          >
            <p>{element}</p>
          </div>
        ))}
      </div>
      <p style={{ fontStyle: "italic" }}>
        Составьте предложение из приведенных выше частей:
      </p>
    </div>
  );
};

export default AnswerUnitsComponent;

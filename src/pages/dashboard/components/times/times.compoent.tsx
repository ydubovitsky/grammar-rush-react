import { useEffect, useState } from "react";
import styles from "./times.module.css";
import { smoothScrollToElement } from "../../../../utils/smoothScrollToElement";
import { default as rndRangeNum } from "../../../../utils/randomNumberInRange";
import {
  PRESENT_CONTINUOUS,
  PAST_CONTINUOUS,
  FUTURE_CONTINUOUS,
  FUTURE_SIMPLE,
  PAST_SIMPLE,
  PRESENT_SIMPLE,
  PRESENT_PERFECT,
  PAST_PERFECT,
  FUTURE_PERFECT,
} from "./data";
import { TenseInterface } from "../../../../types";
import ButtonComponent from "../../../../common/components/button/button.component";
import { Link, useParams } from "react-router-dom";

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

interface SentenceInterface {
  en: string;
  ru: string;
}

const TimesComponent: React.FC = (): JSX.Element => {
  const { id } = useParams<string>();

  const [sentence, setSentence] = useState<SentenceInterface>({
    en: "",
    ru: "",
  });
  const [tense, setTense] = useState<TenseInterface>();
  const [userAnswer, setUserAnswer] = useState<string>("");

  useEffect(() => {
    const tense = TENSES_LIST.find((tense) => tense.name === id);
    if (tense !== undefined) {
      setTense(tense);
      getNextSentence(tense);
    } else {
      setTense(PRESENT_SIMPLE);
      getNextSentence(PRESENT_SIMPLE);
    }
  }, []);

  const getOnlyKey = (object: object) => Object.keys(object)[0];

  const getOnlyValue = (object: object) => Object.values(object)[0];

  // Show next sentence
  const getNextSentence = (tense: TenseInterface): void => {
    const { strategies, pronounts, auxiliaries, verbs } = tense;

    const strategy = strategies[rndRangeNum(0, strategies.length)];

    const pronountsList = pronounts[strategy[0]];
    const pronoun = pronountsList[rndRangeNum(0, pronountsList.length)];

    const auxiliariesList = auxiliaries[strategy[1]];
    const auxiliary = auxiliariesList[rndRangeNum(0, auxiliariesList.length)];

    const verbsList = verbs[strategy[2]];
    const verb = verbsList[rndRangeNum(0, verbsList.length)];

    // Очищаем пользовательский ввод
    clearUserAnswer();

    setSentence({
      en: buildSentence(
        getOnlyKey(pronoun),
        getOnlyKey(auxiliary),
        getOnlyKey(verb)
      ),
      ru: buildSentence(
        getOnlyValue(pronoun),
        getOnlyValue(auxiliary),
        getOnlyValue(verb)
      ),
    });
  };

  const checkUserAnswer = (userAnswer: string, sentence: SentenceInterface) => {
    userAnswer.replaceAll(" ", "") === sentence.ru.replaceAll(" ", "")
      ? alert("true")
      : alert("false");
  };

  const buildSentence = (...words: Array<string>) => {
    return words.reduce((prev, cur) => prev + " " + cur, " ");
  };

  const clearUserAnswer = () => {
    setUserAnswer("");
  };

  const showAnswerBoxes = (tense : TenseInterface, sentence: SentenceInterface) => {
    if (tense !== undefined) {
      return sentence.ru
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
        .sort()
        .map((element) => (
          <div
            className={styles.answerBox}
            onClick={() => setUserAnswer((prev) => prev + " " + element)}
          >
            <p>{element}</p>
          </div>
        ));
    }
  };

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
        <div className={styles.tenseTrainer} id="tenseTrainer">
          <h1>Интерактивный тренажер</h1>
          <p>Переведите на русский данное выражение:</p>
          <div className={styles.sentence}>
            <h1>{sentence.en}</h1>
          </div>
          <div className={styles.answerContainer}>{showAnswerBoxes(tense!, sentence)}</div>
          <p style={{ fontStyle: "italic" }}>
            Составьте предложение из приведенных выше частей:
          </p>
          <div className={styles.sentence}>
            <h2>{userAnswer}</h2>
          </div>
          <div className={styles.buttons}>
            <ButtonComponent
              name="Следующее задание"
              handler={() => getNextSentence(tense!)}
            />
            <ButtonComponent
              name="Проверить"
              handler={() => checkUserAnswer(userAnswer, sentence)}
            />
            <ButtonComponent name="Очистить ответ" handler={clearUserAnswer} />
            <ButtonComponent name="Показать ответ" handler={clearUserAnswer} />
          </div>
          <h4>{sentence.ru}</h4>
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.themes}>
          <ul>
            {TENSES_LIST.map((tense) => (
              <Link to={tense.name}>
                <li onClick={() => setTense(tense)}>{tense.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimesComponent;

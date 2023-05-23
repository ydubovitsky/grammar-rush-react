import { useEffect, useState } from "react";
import ButtonComponent from "../../../../../../common/components/button/button.component";
import AnswerUnitsComponent from "./components/answer-units/answer-units.component";
import UserProgressComponent from "./components/user-progress/user-progress.component";
import styles from "./trainer.module.css";
import { SentenceInterface, TenseInterface } from "../../../../../../types";
import { default as rndRangeNum } from "../../../../../../utils/randomNumberInRange";
import ProgressBlockComponent from "./components/progress-block/progress-block.component";

type TrainerComponentProps = {
  tense: TenseInterface | undefined;
};

const TrainerComponent: React.FC<TrainerComponentProps> = ({
  tense,
}): JSX.Element => {
  // States
  const [sentence, setSentence] = useState<SentenceInterface>({
    en: "",
    ru: "",
  });
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [progressElementList, setProgressElementList] = useState<JSX.Element[]>(
    []
  );
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  // useEffect
  useEffect(() => {
    tense !== undefined ? getNextSentence(tense) : (() => undefined)() //!TODO fixme
  }, []);

  // Methods
  const getOnlyKey = (object: object) => Object.keys(object)[0]; //! Util method

  const getOnlyValue = (object: object) => Object.values(object)[0]; //! Util method

  const buildSentence = (...words: Array<string>) : string => {
    return words.reduce((prev, cur) => prev + " " + cur, " ");
  };

  const clearUserAnswer = () :void => {
    setUserAnswer("");
  };

  const showAnswer = () : void => {
    setIsAnswerVisible(true);
    setTimeout(() => {
      setIsAnswerVisible(false);
    }, 5000);
  };

  const checkUserAnswer = (userAnswer: string, sentence: SentenceInterface) : void => {
    userAnswer.replaceAll(" ", "") === sentence.ru.replaceAll(" ", "")
      ? setProgressElementList([
          ...progressElementList,
          <ProgressBlockComponent
            key={progressElementList.length}
            backgroundColor="green"
          />,
        ])
      : setProgressElementList([
          ...progressElementList,
          <ProgressBlockComponent
            key={progressElementList.length}
            backgroundColor="red"
          />,
        ]);
    //!TODO Улучшить эту логику
    if (progressElementList.length > 50) {
      setProgressElementList([]);
    }
  };

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

  return (
    <div className={styles.container} id="tenseTrainer">
      <h1>Интерактивный тренажер</h1>
      <p>Переведите на русский данное выражение:</p>
      <div className={styles.sentence}>
        <h1>{sentence.en}</h1>
      </div>
      <AnswerUnitsComponent
        sentence={sentence}
        tense={tense}
        setUserAnswer={setUserAnswer}
      />
      <div className={styles.sentence}>
        <h2>{userAnswer}</h2>
      </div>
      <UserProgressComponent progressElementList={progressElementList} />
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
        <ButtonComponent name="Показать ответ" handler={showAnswer} />
      </div>
      <div
        style={isAnswerVisible ? { opacity: 1 } : { opacity: 0 }}
        className={styles.answerContainer}
      >
        <h3>{sentence.ru}</h3>
      </div>
    </div>
  );
};

export default TrainerComponent;

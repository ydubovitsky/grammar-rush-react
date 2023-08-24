import { useState, useEffect } from "react";
import ButtonComponent from "../../../../../../common/components/button/button.component";
import { nextRandomSentence } from "../../../../../../redux/features/tense/tense.slice";
import { SentenceInterface, TenseInterface } from "../../../../../../types";
import AnswerUnitsComponent from "./components/answer-units/answer-units.component";
import UserProgressComponent from "./components/user-progress/user-progress.component";
import styles from "./trainer.module.css";

type TrainerComponentProps = {
  tense: TenseInterface;
};

const TrainerComponent: React.FC<TrainerComponentProps> = ({
  tense
}): JSX.Element => {

  const [sentence, setSentence] = useState<SentenceInterface>({ru: "", en: ""});
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [progressElementList, setProgressElementList] = useState<boolean[]>([]);
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);

  useEffect(() => {
    //! I use this function not like a selector here
    setSentence(nextRandomSentence(tense))
  }, [tense])

  const clearUserAnswer = (): void => {
    setUserAnswer("");
  };

  const showAnswer = (): void => {
    setIsAnswerVisible(true);
    setTimeout(() => {
      setIsAnswerVisible(false);
    }, 5000);
  };

  const checkUserAnswer = (
    userAnswer: string,
    sentence: SentenceInterface
  ): void => {
    userAnswer.replaceAll(" ", "") === sentence.ru.replaceAll(" ", "")
      ? setProgressElementList([...progressElementList, true])
      : setProgressElementList([...progressElementList, false]);
  };

  const showNextSentence = () => {
    clearUserAnswer();
    setSentence(nextRandomSentence(tense))
  };

  return (
    <div className={styles.container} id="tenseTrainer">
      <h1>Интерактивный тренажер</h1>
      <p>Переведите на русский данное выражение:</p>
      <div className={styles.sentence}>
        <h1>{sentence?.en}</h1>
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
        <ButtonComponent name="Следующее задание" handler={showNextSentence} />
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

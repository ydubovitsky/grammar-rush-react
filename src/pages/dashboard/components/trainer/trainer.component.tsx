import styles from "./trainer.module.css";
import cn from "classnames";
import { useState, useEffect, useRef } from "react";
import ButtonComponent from "../../../../common/components/button/button.component";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";

const SUBJECTS = [
  {
    task: "She (to sleep) after dinner.",
    answer: "Я могу летать",
  },
  {
    task: "We (to work) part-time.",
    answer: "Я тебя люблю",
  },
  {
    task: "It (to be) difficult to remember everything.",
    answer: "React лучше всех",
  },
];

const TrainerComponent: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [answerText, setAnswerText] = useState("");
  const [exercise, setExercise] = useState(SUBJECTS[0]);
  const [isScaled, setIsScaled] = useState(false);
  const [counter, setCounter] = useState({ correct: 0, wrong: 0 });
  const scaleBtn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setExercise(SUBJECTS[index]);
  }, [index]);

  const getNextIndex = (min: number, max: number): number => {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result === index) {
      return getNextIndex(min, max);
    }
    return result;
  };

  const checkAnswerHandler = () => {
    console.log(answerText);
    console.log(SUBJECTS[index].answer);
    if (answerText === SUBJECTS[index].answer) {
      setCounter({ ...counter, correct: counter.correct + 1 });
      alert("CORRECT");
    } else {
      alert("WRONG");
      setCounter({ ...counter, wrong: counter.wrong + 1 });
    }
  };

  const expandExerciseHandler = () => {
    const bodyEl = document.querySelector("body");
    bodyEl!.style.overflow =
      bodyEl!.style.overflow === "hidden" ? "visible" : "hidden";
    scaleBtn.current?.classList.toggle(styles.scaled);
    setIsScaled(!isScaled);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.overlay}
        style={{ display: isScaled ? "block" : "none" }}
      ></div>
      <UnitTitleComponent text="Trainer" />
      <div className={styles.trainerContainer}>
        <div className={styles.exerciseContainer} ref={scaleBtn}>
          <i
            onClick={expandExerciseHandler}
            className={cn("fas fa-expand-alt", styles.scaleBtn)}
          ></i>
          <p className={styles.themeName}>Lorem ipsum dolor sit amet.</p>
          <p className={styles.text}>{exercise.task}</p>
          <input type="text" onChange={(e) => setAnswerText(e.target.value)} />
          <div className={styles.buttons}>
            <ButtonComponent
              name="Next"
              handler={() => setIndex(getNextIndex(0, SUBJECTS.length - 1))}
            />
            <ButtonComponent name="Compare" handler={checkAnswerHandler} />
            <p>Wrong: {counter.wrong}</p>
            <p>Correct: {counter.correct}</p>
          </div>
        </div>
        <div className={styles.themes}>
          <h1>Themes</h1>
          <div className={styles.themesList}>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerComponent;

import { useEffect, useRef, useState } from "react";
import getRandomColor from "../../../../../utils/random-color";
import ButtonComponent from "../../../../../common/components/button/button.component";
import styles from "./exercise-item.module.css";

interface TaskItemInterface {
  id: number;
  themeName: string;
  task: string;
  answer: string;
}

const ExerciseItemComponent = ({
  id,
  themeName,
  task,
  answer,
}: TaskItemInterface) => {
  const exerciseRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsACtive] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    const exerciseEl = exerciseRef.current;
    isActive
      ? exerciseEl?.classList.add(styles.active)
      : exerciseEl?.classList.remove(styles.active);
  }, [isActive]);

  const checkUserAnswerHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const inputEl = inputRef.current;
    if (userAnswer === answer) {
      inputEl!.style.backgroundColor = "rgb(104, 247, 168)";
    } else {
      inputEl!.style.backgroundColor = "red";
    }
  };

  const onInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUserAnswer(e.target.value);
  };

  const showTaskTitle = (themeName: string, name?: string): JSX.Element => {
    return (
      <div className={styles.title} onClick={() => setIsACtive(!isActive)}>
        <i className={`fas fa-thumbtack`} style={{ color: getRandomColor() }} />
        <p>{themeName}</p>
        <i
          className={`fas fa-chevron-right ${
            isActive ? styles.turnArrow : null
          }`}
        ></i>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {showTaskTitle(themeName)}
      <div className={styles.exercise} ref={exerciseRef}>
        <p>{task}</p>
        <input
          type="text"
          ref={inputRef}
          className={styles.inputEl}
          onChange={onInputChangeHandler}
          placeholder="Input your answer"
          name="answer"
        />
        <div className={styles.buttonsContainer}>
          <ButtonComponent
            name="Ok"
            color="#33b249"
            handler={checkUserAnswerHandler}
          />
          <ButtonComponent
            name="Hint"
            color="#5783db"
            handler={checkUserAnswerHandler}
          />
          <ButtonComponent
            name="See answer"
            color="#ffbd03"
            handler={checkUserAnswerHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseItemComponent;

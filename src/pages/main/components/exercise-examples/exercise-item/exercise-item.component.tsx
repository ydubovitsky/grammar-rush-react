import { useEffect, useRef, useState } from "react";
import getRandomColor from "../../../../../utils/random-color";
import ButtonComponent from "../../../../../common/components/button/button.component";
import styles from "./exercise-item.module.css";
import { TaskInterface } from "../../../../../types";

const ExerciseItemComponent : React.FC<TaskInterface> = ({
  themeName,
  task,
  answer,
}: TaskInterface) : JSX.Element => {
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
        <h3>{themeName}</h3>
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
          placeholder="Введите ваш ответ"
          name="answer"
        />
        <div className={styles.buttonsContainer}>
          <ButtonComponent
            name="Проверить"
            color="#333456"
            handler={checkUserAnswerHandler}
          />
          <ButtonComponent
            name="Показать подсказку"
            color="#333456"
            handler={checkUserAnswerHandler}
          />
          <ButtonComponent
            name="Посмотреть ответ"
            color="#333456"
            handler={checkUserAnswerHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseItemComponent;

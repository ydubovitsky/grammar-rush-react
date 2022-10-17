import { useEffect, useRef, useState } from "react";
import getRandomColor from "../../../../../utils/random-color";
import ButtonComponent from '../../../../../common/components/button/button.component';
import styles from './task-item.module.css';

interface TaskItemInterface {
  id: number,
  themeName: string,
  task: string,
  answer: string
}

const TaskItemComponent = ({ id, themeName, task, answer }: TaskItemInterface) => {

  const exerciseRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsACtive] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    const exerciseEl = exerciseRef.current;
    isActive
      ? exerciseEl?.classList.add(styles.active)
      : exerciseEl?.classList.remove(styles.active);
  }, [isActive]);

  const checkUserAnswerHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const exerciseEl = exerciseRef.current;
    if (userAnswer === answer) {
      alert("Correct");
      exerciseEl!.style.backgroundColor = "rgb(104, 247, 168)";
    }
    const divEL = document.createElement("div");
    divEL.innerText = "You are wrong";
    exerciseEl?.append(divEL);
  }

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAnswer(e.target.value);
  }

  const showTaskTitle = (themeName: string, name?: string): JSX.Element => {
    return (
      <div className={styles.title} onClick={() => setIsACtive(!isActive)}>
        <i
          className={`fas fa-thumbtack`}
          style={{color: getRandomColor()}}
        />
        <p>{themeName}</p>
        <i
          className={`fas fa-chevron-right ${
            isActive ? styles.turnArrow : null
          }`}
        ></i>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {showTaskTitle(themeName)}
      <div ref={exerciseRef} className={styles.exercise}>
        <p>{task}</p>
        <input
          type="text"
          className={styles.answerForm}
          onChange={onInputChangeHandler}
          placeholder="Input your answer"
          name="answer"
        />
        <p>{answer}</p>
        <div className={styles.buttonsContainer}>
          <ButtonComponent
            name="Ok"
            color="#45DE89"
            handler={checkUserAnswerHandler}
          />
          <ButtonComponent
            name="Hint"
            color="#3A9BE8"
            handler={checkUserAnswerHandler}
          />
          <ButtonComponent name="See answer" handler={checkUserAnswerHandler} />
        </div>
      </div>
    </div>
  );
}

export default TaskItemComponent;
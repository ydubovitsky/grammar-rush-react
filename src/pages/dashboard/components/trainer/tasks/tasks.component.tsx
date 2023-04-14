import cn from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ButtonComponent from "../../../../../common/components/button/button.component";
import { taskListByThemeIdSelector } from "../../../../../redux/features/theme/theme.slice";
import { RootState } from "../../../../../redux/store";
import { TaskInterface } from "../../../../../types";
import styles from "./tasks.module.css";
import toggleOverflowVisibleHandler from "../../../../../utils/toggleOverflowVisible";

const EXERCISES_CONTAINER_STYLES = {
  WRONG: "WRONG",
  CORRECT: "CORRECT",
  INIT: "INIT",
};

type TasksComponentProps = {
  themeId: string | null;
};

const TasksComponent: FC<TasksComponentProps> = ({ themeId }: TasksComponentProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isScaled, setIsScaled] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>("");
  const [counter, setCounter] = useState({ correct: 0, wrong: 0 });
  // Selector
  const taskListByThemeId = useSelector((state: RootState) =>
    taskListByThemeIdSelector(themeId, state)
  );
  // This state uses selector
  const [tasks, setTasks] = useState<TaskInterface[] | undefined>(
    taskListByThemeId
  );

  useEffect(() => {
    setTasks(taskListByThemeId);
    console.log(tasks);
  }, [themeId]);

  // Меняем цвет окна задания
  const changeExerciseContainerBackgroundHandler = (flag: string): void => {
    switch (flag) {
      case EXERCISES_CONTAINER_STYLES.CORRECT:
        inputRef.current?.classList.add(styles.correctAnswer);
        break;
      case EXERCISES_CONTAINER_STYLES.WRONG:
        inputRef.current?.classList.add(styles.wrongAnswer);
        break;
      case EXERCISES_CONTAINER_STYLES.INIT:
        inputRef.current?.classList.remove(
          styles.correctAnswer,
          styles.wrongAnswer
        );
        break;
    }
  };

  const getNextIndex = (min: number, max: number): number => {
    if (min === max) return min; // Если границы диапазона совпадают
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    changeExerciseContainerBackgroundHandler(EXERCISES_CONTAINER_STYLES.INIT);
    if (result === index) {
      return getNextIndex(min, max);
    }
    return result;
  };

  // Проверяем корректность ответа пользователя и меняем цвет окна
  const checkAnswerHandler = (): void => {
    if (tasks !== undefined) {
      if (answerText == tasks[index].answer) {
        setCounter({ ...counter, correct: counter.correct + 1 });
        changeExerciseContainerBackgroundHandler(
          EXERCISES_CONTAINER_STYLES.CORRECT
        );
      } else {
        changeExerciseContainerBackgroundHandler(
          EXERCISES_CONTAINER_STYLES.WRONG
        );
        setCounter({ ...counter, wrong: counter.wrong + 1 });
      }
    }
  };

  const expandExerciseElHandler = (): void => {
    containerRef.current?.classList.toggle(styles.scaled);
    toggleOverflowVisibleHandler();
    setIsScaled(!isScaled);
  };


  if (tasks === undefined || tasks.length === 0) {
    return <h3>Тут нет доступных заданий...</h3>;
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <i
        onClick={expandExerciseElHandler}
        className={cn("fas fa-expand-alt", styles.scaleBtn)}
      ></i>
      <p className={styles.text}>{tasks[index].task}</p>
      <input
        type="text"
        placeholder="Введите ответ"
        ref={inputRef}
        onChange={(e) => setAnswerText(e.target.value)}
      />
      <div className={styles.buttons}>
        <ButtonComponent
          name="Следующая задача"
          handler={() => setIndex(getNextIndex(0, tasks.length - 1))}
        />
        <ButtonComponent name="Проверить" handler={checkAnswerHandler} />
        <p>Верно: {counter.wrong}</p>
        <p>Ошибок: {counter.correct}</p>
      </div>
    </div>
  );
};

export default TasksComponent;

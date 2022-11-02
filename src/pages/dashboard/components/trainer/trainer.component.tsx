import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import {
  fetchAllThemes,
  taskListByThemeIdSelector,
  themeStatusSelector,
  themeNameByThemeIdSelector,
} from "../../../../redux/features/theme/theme.slice";
import { RootState } from "../../../../redux/store";
import { FETCH_STATUS } from "../../../../redux/types";
import { TaskInterface } from "../../../../types";
import ThemesComponent from "./themes/themes.component";
import ErrorPage from "../../../../common/components/error-page/error-page";
import styles from "./trainer.module.css";
import OverlayComponent from "./overlay/overlay.component";
const Fade = require("react-reveal/Fade");

const EXERCISES_CONTAINER_STYLES = {
  WRONG: "WRONG",
  CORRECT: "CORRECT",
  INIT: "INIT",
};

//TODO Упростить этот компонент
const TrainerComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>("");
  const [isScaled, setIsScaled] = useState<boolean>(false);
  const [counter, setCounter] = useState({ correct: 0, wrong: 0 });
  const exerciseContainerRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const themeId: string | null = searchParams.get("themeId");
  // Fetch status
  const fetchStatus: FETCH_STATUS = useSelector(themeStatusSelector);
  // Selector
  const taskListByThemeId = useSelector((state: RootState) =>
    taskListByThemeIdSelector(themeId, state)
  );
  // Theme name
  const themeName = useSelector((state: RootState) =>
    themeNameByThemeIdSelector(themeId, state)
  );
  // This state uses selector
  const [tasks, setTasks] = useState<TaskInterface[] | undefined>(
    taskListByThemeId
  );

  useEffect(() => {
    if (tasks === undefined || tasks.length === 0) {
      dispatch(fetchAllThemes());
    }
  }, []);

  useEffect(() => {
    setTasks(taskListByThemeId);
  }, [themeId, fetchStatus]);

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

  // Меняем цвет окна задания
  const changeExerciseContainerBackgroundHandler = (flag: string): void => {
    switch (flag) {
      case EXERCISES_CONTAINER_STYLES.CORRECT:
        exerciseContainerRef.current?.classList.add(styles.correctAnswer);
        break;
      case EXERCISES_CONTAINER_STYLES.WRONG:
        exerciseContainerRef.current?.classList.add(styles.wrongAnswer);
        break;
      case EXERCISES_CONTAINER_STYLES.INIT:
        exerciseContainerRef.current?.classList.remove(
          styles.correctAnswer,
          styles.wrongAnswer
        );
        break;
    }
  };

  const expandExerciseElHandler = (): void => {
    exerciseContainerRef.current?.classList.toggle(styles.scaled);
    setIsScaled(!isScaled);
  };

  // Если нет задач, то показываем страницу ошибок
  if (tasks == undefined || tasks.length === 0) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.container}>
      <OverlayComponent isScaled={isScaled} />
      <UnitTitleComponent text="Trainer" />
      <div className={styles.trainerContainer}>
        <div className={styles.exerciseContainer} ref={exerciseContainerRef}>
          <i
            onClick={expandExerciseElHandler}
            className={cn("fas fa-expand-alt", styles.scaleBtn)}
          ></i>
          <p className={styles.themeName}>
            Exercises on the topic: <b>{themeName}</b>
          </p>
          <p className={styles.text}>{tasks[index].task}</p>
          <input
            type="text"
            placeholder="Your answer"
            onChange={(e) => setAnswerText(e.target.value)}
          />
          <div className={styles.buttons}>
            <ButtonComponent
              name="Next"
              handler={() => setIndex(getNextIndex(0, tasks.length - 1))}
            />
            <ButtonComponent name="Check answer" handler={checkAnswerHandler} />
            <p>Wrong: {counter.wrong}</p>
            <p>Correct: {counter.correct}</p>
          </div>
        </div>
        <Fade right>
          <ThemesComponent />
        </Fade>
      </div>
    </div>
  );
};

export default TrainerComponent;

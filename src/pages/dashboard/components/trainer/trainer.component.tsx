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
import styles from "./trainer.module.css";

const TrainerComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState<number>(0);
  const [answerText, setAnswerText] = useState<string>("");
  const [isScaled, setIsScaled] = useState<boolean>(false);
  const [counter, setCounter] = useState({ correct: 0, wrong: 0 });
  const scaleBtn = useRef<HTMLDivElement>(null);
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
    if (result === index) {
      return getNextIndex(min, max);
    }
    return result;
  };

  const checkAnswerHandler = () => {
    // TODO найти лучший способ проверки на undefined
    if (tasks !== undefined) {
      if (answerText === tasks[index].answer) {
        setCounter({ ...counter, correct: counter.correct + 1 });
        alert("CORRECT");
      } else {
        alert("WRONG");
        setCounter({ ...counter, wrong: counter.wrong + 1 });
      }
    }
  };

  const expandExerciseHandler = () => {
    const bodyEl = document.querySelector("body");
    bodyEl!.style.overflow =
      bodyEl!.style.overflow === "hidden" ? "visible" : "hidden";
    scaleBtn.current?.classList.toggle(styles.scaled);
    setIsScaled(!isScaled);
  };

  if (tasks == undefined || tasks.length === 0) {
    //TODO Page not found!
    return <h1>Oooops</h1>;
  }

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
            <ButtonComponent name="Compare" handler={checkAnswerHandler} />
            <p>Wrong: {counter.wrong}</p>
            <p>Correct: {counter.correct}</p>
          </div>
        </div>
        <ThemesComponent />
      </div>
    </div>
  );
};

export default TrainerComponent;

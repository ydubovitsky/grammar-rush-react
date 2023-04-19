import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import SpinnerLoaderComponent from "../../../../common/components/spinner-loader/spinner-loader.component";
import {
  fetchAllThemes,
  themeEntitiesSelector,
} from "../../../../redux/features/theme/theme.slice";
import { FETCH_STATUS } from "../../../../redux/types";
import { ThemeInterface } from "../../../../types";
import getRandomNumberInRange from "../../../../utils/randomNumberInRange";
import ExerciseItemComponent from "./exercise-item/exercise-item.component";
import styles from "./exercise-list.module.css";
import { Fade } from "react-awesome-reveal";

const ExerciseListComponent: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const themes: ThemeInterface[] = useAppSelector(themeEntitiesSelector);
  const status: FETCH_STATUS = useAppSelector((state) => state.theme.status);

  useEffect(() => {
    dispatch(fetchAllThemes());
  }, []);

  const getRandomTheme = (): JSX.Element => {
    if (typeof themes != "undefined" && Array.isArray(themes)) {
      const randomTheme = themes[getRandomNumberInRange(0, themes.length)];
      if (typeof randomTheme != "undefined" && randomTheme.hasOwnProperty('taskList') && typeof randomTheme.taskList != "undefined") {
        return (
          <div className={styles.themes}>
            {randomTheme.taskList
              .slice(0, 5)
              .map((task) => (
                <ExerciseItemComponent key={task.id} {...task} />
              ))}
          </div>
        );
      }
      return <h1>Здесь нет задач, заходите позже...</h1>;
    }
    return <h1>Здесь нет задач, заходите позже...</h1>;
  };

  const showTaskList = (status: FETCH_STATUS): JSX.Element | undefined => {
    switch (status) {
      case FETCH_STATUS.LOADING: {
        return <SpinnerLoaderComponent />;
      }
      case FETCH_STATUS.LOADED: {
        return getRandomTheme();
      }
      case FETCH_STATUS.ERROR: {
        return (
          <h1>Упс, что-то пошло не по плану, мы уже работаем над проблемой</h1>
        );
      }
      default:
        return undefined;
    }
  };

  return (
    <div className={styles.container}>
      <Fade>
        <SectionTitleComponent name="Примеры упражнений" />
        <div className={styles.tasksContainer}>{showTaskList(status)}</div>
      </Fade>
    </div>
  );
};

export default ExerciseListComponent;

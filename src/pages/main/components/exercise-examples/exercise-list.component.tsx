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
const Fade = require("react-reveal/Fade");

const ExerciseListComponent: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const themes: ThemeInterface[] = useAppSelector(themeEntitiesSelector);
  const status: FETCH_STATUS = useAppSelector((state) => state.theme.status);

  useEffect(() => {
    dispatch(fetchAllThemes());
  }, []);

  const showTaskList = (
    status: FETCH_STATUS
  ): JSX.Element | JSX.Element[] | undefined => {
    switch (status) {
      case FETCH_STATUS.LOADING: {
        return <SpinnerLoaderComponent />;
      }
      //TODO Поправить это все или заменить на placeholder
      case FETCH_STATUS.LOADED: {
        return themes[getRandomNumberInRange(0, themes.length)].taskList
          .slice(0, 5)
          .map((task) => <ExerciseItemComponent key={task.id} {...task} />);
      }
      case FETCH_STATUS.ERROR: {
        return <h1>Error</h1>;
      }
      default:
        return undefined;
    }
  };

  return (
    <div className={styles.container}>
      <Fade bottom cascade>
        <SectionTitleComponent name="Exercise Examples" />
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.tasksContainer}>{showTaskList(status)}</div>
          </div>
          <div className={styles.column}>
            <div className={styles.tasksContainer}>{showTaskList(status)}</div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ExerciseListComponent;

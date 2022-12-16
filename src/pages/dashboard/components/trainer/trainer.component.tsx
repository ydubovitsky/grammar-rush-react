import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ErrorPage from "../../../../common/components/error-page/error-page";
import {
  fetchAllThemes,
  themeEntitiesSelector,
} from "../../../../redux/features/theme/theme.slice";
import TasksComponent from "./tasks/tasks.component";
import ThemesComponent from "./themes/themes.component";
import styles from "./trainer.module.css";
const Fade = require("react-reveal/Fade");

const TrainerComponent: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const themeId: string | null = searchParams.get("themeId");
  const themes = useSelector(themeEntitiesSelector);

  useEffect(() => {
    if (!themes || themes.length === 0) {
      dispatch(fetchAllThemes());
    }
  }, []);

  // Если тем нет, то показываем страницу ошибок
  if (themes == undefined || themes.length === 0) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.container}>
      <UnitTitleComponent text="Trainer" />
      <div className={styles.trainerContainer}>
        <TasksComponent themeId={themeId} />
        <Fade right>
          <ThemesComponent />
        </Fade>
      </div>
    </div>
  );
};

export default TrainerComponent;

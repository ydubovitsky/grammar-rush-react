import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import { addNewTask } from "../../../../redux/features/task/task.slice";
import { TaskInterface, ThemeInterface } from "../../../../types";
import {
  addNewTheme,
  fetchAllThemes,
  themesNameListSelector,
} from "../../../../redux/features/theme/theme.slice";
import styles from "./admin.module.css";

const AdminComponent: React.FC = (): JSX.Element => {
  const [theme, setTheme] = useState<ThemeInterface>({
    themeName: "",
  });
  const [task, setTask] = useState<TaskInterface>({
    answer: "",
    task: "",
    themeName: "",
  });
  const themesNameList = useAppSelector(themesNameListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllThemes());
  }, []);

  const onThemeChangedHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (
      typeof e.target.value === "string" &&
      e.target.value.replace(/ /g, "") !== ""
    ) {
      setTheme({ themeName: e.target.value });
    }
  };

  const onTaskChangedHandler = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ): void => {
    console.log(e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const saveNewThemeHandler = (theme: ThemeInterface): void => {
    if (theme.themeName.replace(/\s/g, "") !== "") {
      dispatch(addNewTheme(theme));
    }
  };

  const saveNewTaskHandler = (task: TaskInterface): void => {
    if (task.themeName.replace(/\s/g, "") !== "") {
      dispatch(addNewTask(task));
    }
  };

  const showThemeListOptionsEl = (themesNameList: string[]): JSX.Element[] => {
    return themesNameList.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ));
  };

  return (
    <div className={styles.container}>
      <UnitTitleComponent text="Панель администратора" />
      <div className={styles.formsContainer}>
        <div className={styles.taskContainer}>
          <label htmlFor="themeName">Тема</label>
          <select name="themeName" onChange={onTaskChangedHandler}>
            {showThemeListOptionsEl(themesNameList)}
          </select>

          <label htmlFor="task">Задание</label>
          <input type="text" name="task" onChange={onTaskChangedHandler} />

          <label htmlFor="answer">Ответ</label>
          <input type="text" name="answer" onChange={onTaskChangedHandler} />

          <label htmlFor="hint">Подсказка</label>
          <input type="text" name="hint" onChange={onTaskChangedHandler} />
          <ButtonComponent
            name="Добавить новую задачу"
            handler={() => saveNewTaskHandler(task)}
          />
        </div>
        <div className={styles.themeContainer}>
          <label htmlFor="newTheme">Добавить новую тему</label>
          <input type="text" name="newTheme" onChange={onThemeChangedHandler} />
          <ButtonComponent
            name="Сохранить тему"
            handler={() => saveNewThemeHandler(theme)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;

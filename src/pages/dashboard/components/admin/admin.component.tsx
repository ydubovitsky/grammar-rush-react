import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import { addNewTask } from "../../../../redux/features/task/task.slice";
import { addNewTheme, fetchAllThemes, themesNameListSelector } from "../../../../redux/features/theme/theme.slice";
import styles from "./admin.module.css";

const AdminComponent : React.FC = () : JSX.Element => {
  const [theme, setTheme] = useState({});
  const [task, setTask] = useState({});
  const themesNameList = useSelector(themesNameListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllThemes())
  }, [])

  const onThemeChangedHandler = (e: any) => {
    setTheme({ name: e.target.value });
  };

  const onTaskChangedHandler = (e: any) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const saveNewThemeHandler = () => {
    dispatch(addNewTheme(theme));
  };

  const saveNewTaskHandler = () => {
    dispatch(addNewTask(task));
  };

  const showThemeListOptionsEl = () => {
    return themesNameList.map(name => <option key={name} value={name}>{name}</option>);
  };

  return (
    <div className={styles.container}>
      <UnitTitleComponent text="Панель администратора" />
      <div className={styles.formsContainer}>
        <div className={styles.taskContainer}>
          <label htmlFor="theme">Тема</label>
          <select name="theme" onChange={onTaskChangedHandler}>{showThemeListOptionsEl()}</select>

          <label htmlFor="task">Задание</label>
          <input type="text" name="task" id="" onChange={onTaskChangedHandler} />

          <label htmlFor="answer">Ответ</label>
          <input type="text" name="answer" id="" onChange={onTaskChangedHandler}/>

          <label htmlFor="hint">Подсказка</label>
          <input type="text" name="hint" id="" onChange={onTaskChangedHandler}/>
          <ButtonComponent name="Добавить новую задачу" handler={saveNewTaskHandler} />
        </div>
        <div className={styles.themeContainer}>
          <label htmlFor="newTheme">Добавить новую тему</label>
          <input
            type="text"
            name="newTheme"
            id=""
            onChange={onThemeChangedHandler}
          />
          <ButtonComponent
            name="Сохранить тему"
            handler={saveNewThemeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import { addNewTask } from "../../../../redux/features/task/task.slice";
import { addNewTheme, themesNameListSelector } from "../../../../redux/features/theme/theme.slice";
import styles from "./admin.module.css";

const AdminComponent = () => {
  const [theme, setTheme] = useState({});
  const [task, setTask] = useState({});
  const themesNameList = useSelector(themesNameListSelector);
  const dispatch = useDispatch();

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
      <UnitTitleComponent text="Admin Panel" />
      <div className={styles.formsContainer}>
        <div className={styles.taskContainer}>
          <label htmlFor="theme">Theme</label>
          <select name="theme" onChange={onTaskChangedHandler}>{showThemeListOptionsEl()}</select>

          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="" onChange={onTaskChangedHandler} />

          <label htmlFor="answer">Answer</label>
          <input type="text" name="answer" id="" onChange={onTaskChangedHandler}/>

          <label htmlFor="hint">Hint</label>
          <input type="text" name="hint" id="" onChange={onTaskChangedHandler}/>
          <ButtonComponent name="Save task" handler={saveNewTaskHandler} />
        </div>
        <div className={styles.themeContainer}>
          <label htmlFor="newTheme">New Theme</label>
          <input
            type="text"
            name="newTheme"
            id=""
            onChange={onThemeChangedHandler}
          />
          <ButtonComponent
            name="Save new theme"
            handler={saveNewThemeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;

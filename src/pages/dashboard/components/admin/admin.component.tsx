import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import styles from "./admin.module.css";

const AdminComponent = () => {
  return (
    <div className={styles.container}>
      <UnitTitleComponent text="Admin Panel" />
      <div className={styles.formsContainer}>
        <div className={styles.taskContainer}>
          <label htmlFor="theme">Theme</label>
          <select name="theme">
            <option value="1">Синий</option>
            <option value="2">Зеленый</option>
            <option value="3">Желтый</option>
            <option value="4">Красный</option>
            <option value="5">Оранжевый</option>
            <option value="6">Черный</option>
          </select>

          <label htmlFor="theme">Task</label>
          <input type="text" name="task" id="" />

          <label htmlFor="theme">Answer</label>
          <input type="text" name="answer" id="" />

          <label htmlFor="hint">Hint</label>
          <input type="text" name="hint" id="" />
          <ButtonComponent name="Save task" />
        </div>
        <div className={styles.themeContainer}>
          <label htmlFor="newTheme">New Theme</label>
          <input type="text" name="newTheme" id="" />
          <ButtonComponent name="Save new theme" />
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;

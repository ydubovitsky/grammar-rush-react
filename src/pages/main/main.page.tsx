import styles from "./main.module.css";
import TaskListComponent from "./components/task-list/task-list.component";

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <TaskListComponent />
    </div>
  )
}

export default MainPage;
import { useEffect } from 'react';
import { fetchAllTasks } from '../../../../redux/features/task/task.slice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { TaskInterface } from '../../../../types/TaskInterface';
import TaskItemComponent from './task-item/task-item.component';
import { FETCH_STATUS } from '../../../../redux/types';
import SpinnerLoaderComponent from '../../../../common/components/spinner-loader/spinner-loader.component';
import styles from './task-list.module.css';
import SectionTitleComponent from '../../../../common/atomic-components/section-title/section-title.component';

const TaskListComponent: React.FC = () => {

  const dispatch = useAppDispatch();
  const tasks: TaskInterface[] = useAppSelector(state => state.task.tasks);
  const status: FETCH_STATUS = useAppSelector(state => state.task.status);

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, []);

  const showTaskList = (status: FETCH_STATUS): JSX.Element | JSX.Element[] | undefined => {
    switch(status) {
      case FETCH_STATUS.LOADING: {
        return <SpinnerLoaderComponent />
      }
      case FETCH_STATUS.LOADED: {
        return tasks.slice(0, 5).map(task => <TaskItemComponent key={task.id} {...task} />);
      }
      case FETCH_STATUS.ERROR: {
        return <h1>Error</h1>
      }
      default: return undefined;
    }
  }

  return (
    <div className={styles.container}>
      <SectionTitleComponent name="Exercise Examples" />
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.tasksContainer}>{showTaskList(status)}</div>
        </div>
        <div className={styles.column}>
          <div className={styles.tasksContainer}>{showTaskList(status)}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskListComponent;
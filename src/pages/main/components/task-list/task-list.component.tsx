import { useEffect } from 'react';
import { fetchAllTasks } from '../../../../redux/features/task/task.slice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { TaskInterface } from '../../../../types/TaskInterface';
import TaskItemComponent from './task-item/task-item.component';
import { FETCH_STATUS } from '../../../../redux/types';
import SpinnerLoaderComponent from '../../../../common/components/spinner-loader/spinner-loader.component';
import styles from './task-list.module.css';

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
        return tasks.map(task => <TaskItemComponent key={task.id} {...task} />);
      }
      case FETCH_STATUS.ERROR: {
        return <h1>Error</h1>
      }
      default: return undefined;
    }
  }

  return (
    <div className={styles.container}>
      <h1>Task List</h1>
      <div className={styles.tasksContainer}>
        {showTaskList(status)}
      </div>
    </div>
  )
}

export default TaskListComponent;
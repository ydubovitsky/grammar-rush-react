import styles from './task-item.module.css';

interface TaskItemInterface {
  id: number,
  task: string,
  answer: string
}

const TaskItemComponent = ({ id, task, answer }: TaskItemInterface) => {
  return (
    <div className={styles.container}>
      <p>Task: {id}</p>
      <p>{task}</p>
      <hr />
      <p>Answer: {answer}</p>
    </div>
  )
}

export default TaskItemComponent;
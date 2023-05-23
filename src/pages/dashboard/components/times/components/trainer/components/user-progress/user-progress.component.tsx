import styles from './user-progress.module.css';

type UserProgressComponentProps = {
  progressElementList: JSX.Element[]
}

const UserProgressComponent: React.FC<UserProgressComponentProps> = ({progressElementList}): JSX.Element => {
  return (
    <div className={styles.container}>
      <h3>Ваш прогресс</h3>
      <div className={styles.progress}>{progressElementList}</div>
    </div>
  );
};

export default UserProgressComponent;

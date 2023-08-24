import ProgressBlockComponent from "./components/progress-block/progress-block.component";
import styles from "./user-progress.module.css";

type UserProgressComponentProps = {
  progressElementList: boolean[];
};

const UserProgressComponent: React.FC<UserProgressComponentProps> = ({
  progressElementList,
}): JSX.Element => {

  const showProgressBlockElements = (progressElementList: boolean[]) => {
    return progressElementList.map((el) => {
      return <ProgressBlockComponent backgroundColor={el ? "green" : "red"} />;
    });
  };

  return (
    <div className={styles.container}>
      <h3>Ваш прогресс</h3>
      <div className={styles.progress}>{showProgressBlockElements(progressElementList)}</div>
    </div>
  );
};

export default UserProgressComponent;

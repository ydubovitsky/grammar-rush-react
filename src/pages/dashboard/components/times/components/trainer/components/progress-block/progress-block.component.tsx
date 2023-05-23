import styles from "./progress-block.module.css";

type ProgressBlockComponentProps = {
  backgroundColor?: string
}

const ProgressBlockComponent: React.FC<ProgressBlockComponentProps> = ({backgroundColor}): JSX.Element => {
  return <div style={{backgroundColor}} className={styles.container}/>;
};

export default ProgressBlockComponent;

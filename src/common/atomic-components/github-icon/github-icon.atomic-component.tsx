import styles from "./github-icon.module.css";
import data from "../../../assets/data/data.json";

type GithubIconAtomicComponentProps = {
  color?: string;
  size?: number | string;
};

const GithubIconAtomicComponent: React.FC<GithubIconAtomicComponentProps> = ({ color, size }): JSX.Element => {
  const { github } = data["social-media-links"];

  return (
    <div className={styles.container}>
      <a href={github} target="_blank" rel="noreferrer">
        <i
          className="fab fa-github"
          style={{ color: color, fontSize: size }}
        ></i>
      </a>
    </div>
  );
};

export default GithubIconAtomicComponent;

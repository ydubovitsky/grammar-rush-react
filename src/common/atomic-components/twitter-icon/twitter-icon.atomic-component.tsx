import styles from './twitter-icon.module.css';
import getRandomColor from '../../../utils/random-color';
import data from "../../../assets/data/data.json";

type TwitterIconAtomicComponentProps = {
  size?: number | string;
};

const TwitterIconAtomicComponent : React.FC<TwitterIconAtomicComponentProps> = ({ size }) : JSX.Element => {

  const { twitter } = data["social-media-links"];

  return (
    <div className={styles.container}>
      <a href={twitter}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter" style={{ color: getRandomColor(), fontSize: size }}></i>
      </a>
    </div>
  )
}

export default TwitterIconAtomicComponent;
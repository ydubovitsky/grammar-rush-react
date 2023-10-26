import styles from './tg-icon.module.css';
import data from "../../../assets/data/data.json";

type TgIconAtomicComponentProps = {
  color?: string,
  size?: number | string;
};

const TgIconAtomicComponent : React.FC<TgIconAtomicComponentProps> = ({ color, size }) : JSX.Element => {

  const { telegram } = data["social-media-links"];

  return (
    <div className={styles.container}>
      <a href={telegram}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-telegram" style={{ color: color, fontSize: size }}></i>
      </a>
    </div>
  )
}

export default TgIconAtomicComponent;
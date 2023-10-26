import styles from './skype-icon.module.css';
import getRandomColor from '../../../utils/random-color';
import data from "../../../assets/data/data.json";

type SkypeIconAtomicComponentProps = {
  size?: number | string;
};

const SkypeIconAtomicComponent : React.FC<SkypeIconAtomicComponentProps> = ({ size }) => {

  const { skype } = data["social-media-links"];

  return (
    <div className={styles.container}>
      <a href={skype}>
        <i className="fab fa-skype" style={{ color: getRandomColor(), fontSize: size }}></i>
      </a>
    </div>
  )
}

export default SkypeIconAtomicComponent;
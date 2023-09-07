import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { tenseEntitiesSelector } from "../../../../../redux/features/tense/tense.slice";
import { smoothScrollToElement } from "../../../../../utils/smoothScrollToElement";
import getRandomNumberInRange from "../../../../../utils/randomNumberInRange";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import SVG_ARRAY from "./svg";

const NavComponent: React.FC = (): JSX.Element => {
  const tenseEntities = useAppSelector(tenseEntitiesSelector);

  const scrollToTenseContainer = () => {
    smoothScrollToElement("tenseContainer");
  }

  return (
    <div className={styles.container}>
      {tenseEntities.map((tense, idx) => (
        <div className={styles.tense} onClick={scrollToTenseContainer}>
          <Link key={idx} to={tense.name}>
            <img src={SVG_ARRAY[getRandomNumberInRange(0, SVG_ARRAY.length - 1)]} alt="" />
            <h1>{tense.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavComponent;

import { TenseInterface } from '../../../../../../types';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

type NavComponentProps = {
  tensesList: TenseInterface[]
  setTense: React.Dispatch<React.SetStateAction<TenseInterface | undefined>>
}

const NavComponent: React.FC<NavComponentProps> = ({tensesList, setTense}): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.themes}>
        <ul>
          {tensesList.map((tense) => (
            <Link to={tense.name}>
              <li onClick={() => setTense(tense)}>{tense.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavComponent;

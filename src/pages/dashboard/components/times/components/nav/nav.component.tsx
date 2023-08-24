import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { tenseEntitiesSelector } from '../../../../../../redux/features/tense/tense.slice';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';


const NavComponent: React.FC = (): JSX.Element => {

  const tenseEntities = useAppSelector(tenseEntitiesSelector);

  return (
    <div className={styles.container}>
      <div className={styles.themes}>
        <ul>
          {tenseEntities.map((tense, idx) => (
            <Link key={idx} to={tense.name}>
              <li>{tense.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavComponent;

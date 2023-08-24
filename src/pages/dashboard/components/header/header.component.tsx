import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  logout,
  userRolesSelector,
} from "../../../../redux/features/auth/auth.slice";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { randomTenseNameSelector } from "../../../../redux/features/tense/tense.slice";
import styles from "./header.module.css";

const HeaderComponent: React.FC = (): JSX.Element => {
  const userRoles: string[] = useAppSelector(userRolesSelector);
  const randomTenseName: string = useAppSelector(randomTenseNameSelector);
  const dispatch = useDispatch();

  const showAdminLinkEl = (): JSX.Element | null => {
    return userRoles?.includes("ADMIN") ? (
      <Link to={"admin"} className={styles.navEl}>
        Панель администратора
      </Link>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Infinity Grammar</div>
      <div className={styles.nav}>
        <Link to={"/"} className={styles.navEl}>
          Главная страница
        </Link>
        <Link to={"info"} className={styles.navEl}>
          Описание
        </Link>
        <Link to={`tenses/${randomTenseName}`} className={styles.navEl}>
          Времена
        </Link>
        {showAdminLinkEl()}
        <div onClick={() => dispatch(logout())} className={styles.navEl}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

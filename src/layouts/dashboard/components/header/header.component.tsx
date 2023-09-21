import { useDispatch } from "react-redux";
import { useState } from "react";
import cn from "classnames";
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
  const [isSidebarShow, setIsSidebarShow] = useState(false);
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
    <header className={styles.container}>
      <div className={styles.logo}><h1>Yeap! English</h1></div>
      <nav className={styles.nav}>
        <div
          className={styles.sidebar}
          onClick={() => setIsSidebarShow(!isSidebarShow)}
        >
          <i className="fa fa-bars"></i>
        </div>
        <div
          className={cn(
            styles.navContainer,
            isSidebarShow ? styles.showSidebar : ""
          )}
        >
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              <Link to={"/"}>Главная страница</Link>
            </div>
            <div className={styles.menuItem}>
              <Link to={"info"} className={styles.menuItem}>
                Описание
              </Link>
            </div>
            <div className={styles.menuItem}>
              <Link to={"articles"} className={styles.menuItem}>
                Статьи
              </Link>
            </div>
            <div className={styles.menuItem}>
              <Link
                to={`tenses/${randomTenseName}`}
                className={styles.menuItem}
              >
                Времена
              </Link>
            </div>
            {showAdminLinkEl()}
            <div onClick={() => dispatch(logout())} className={styles.menuItem}>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div>
          <div
            className={styles.closeBtn}
            onClick={() => setIsSidebarShow(!isSidebarShow)}
          >
            <i className="fas fa-times-circle"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  authStatusSelector,
  logout,
} from "../../../../../../redux/features/auth/auth.slice";
import { FETCH_STATUS } from "../../../../../../redux/types";
import styles from "./menu.module.css";
import toggleOverflowVisibleHandler from "../../../../../../utils/toggleOverflowVisible";

const MenuComponent: React.FC = (): JSX.Element => {
  const menuElementRef = useRef<HTMLDivElement>(null);
  const status: FETCH_STATUS = useSelector(authStatusSelector);
  const dispatch = useDispatch();

  // Открываем/закрываем меню
  const menuToggleHandler = (): void => {
    toggleOverflowVisibleHandler();
    const menuEl = menuElementRef.current;
    menuEl!.classList.toggle(styles.active);
  };

  const showMenuElements = (status: string) => {
    if (status === FETCH_STATUS.AUTHENTICATED) {
      return (
        <div className={styles.menuBtn} onClick={() => dispatch(logout())}>
          Выйти
        </div>
      );
    } else {
      return (
        <Link to={"/main/auth"} className={styles.menuBtn}>
          Войти
        </Link>
      );
    }
  };

  return (
    <>
      <i
        onClick={menuToggleHandler}
        className={`fas fa-bars ${styles.barsBtn}`}
      ></i>
      <div ref={menuElementRef} className={styles.menu}>
        {showMenuElements(status)}
        <p onClick={menuToggleHandler} className={styles.menuBtn}>
          Закрыть
        </p>
      </div>
    </>
  );
};

export default MenuComponent;

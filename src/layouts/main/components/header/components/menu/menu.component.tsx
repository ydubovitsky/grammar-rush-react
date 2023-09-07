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
        <div onClick={() => dispatch(logout())}>
          <p className={styles.menuBtn}>Выйти</p>
        </div>
      );
    } else {
      return (
        <Link to={"/main/auth"}>
          <p className={styles.menuBtn}>Войти</p>
        </Link>
      );
    }
  };

  return (
    <div className={styles.container}>
      <i
        onClick={menuToggleHandler}
        className={`fas fa-bars ${styles.barsBtn}`}
      ></i>
      <div ref={menuElementRef} className={styles.menu}>
        {showMenuElements(status)}
        <p className={styles.menuBtn} onClick={menuToggleHandler}>
          Закрыть
        </p>
      </div>
    </div>
  );
};

export default MenuComponent;

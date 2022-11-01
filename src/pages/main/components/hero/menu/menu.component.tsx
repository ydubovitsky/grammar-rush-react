import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  authStatusSelector,
  logout,
} from "../../../../../redux/features/auth/auth.slice";
import { FETCH_STATUS } from "../../../../../redux/types";
import styles from "./menu.module.css";

const MenuComponent: React.FC = () => {
  const menuElementRef = useRef<HTMLDivElement>(null);
  const status: FETCH_STATUS = useSelector(authStatusSelector);
  const dispatch = useDispatch();

  // Прячем/Показываем полосу прокрутки
  const toggleOverflowVisibleHandler = (): void => {
    const bodyEl = document.querySelector("body");
    bodyEl!.style.overflow =
      bodyEl!.style.overflow === "hidden" ? "visible" : "hidden";
  };

  // Открываем/закрываем меню
  const menuToggleHandler = (): void => {
    toggleOverflowVisibleHandler();
    const menuEl = menuElementRef.current;
    menuEl!.classList.toggle(styles.active);
  };

  const showMenuElements = (status: string) => {
    if (status === FETCH_STATUS.AUTHENTICATED) {
      return (
        <>
          <Link
            to={"dashboard"}
            className={styles.menuBtn}
          >
            Dashboard
          </Link>
          <div className={styles.menuBtn} onClick={() => dispatch(logout())}>
            Logout
          </div>
        </>
      );
    } else {
      return (
        <Link to={"/main/auth"} className={styles.menuBtn}>
          Sign In
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
        <h1 onClick={menuToggleHandler} className={styles.menuBtn}>
          Close
        </h1>
      </div>
    </>
  );
};

export default MenuComponent;

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authStatusSelector } from "../../../../../redux/features/auth/auth.slice";
import { FETCH_STATUS } from "../../../../../redux/types";
import styles from "./menu.module.css";

const MenuComponent: React.FC = () => {
  const menuElementRef = useRef<HTMLDivElement>(null);
  const status = useSelector(authStatusSelector);

  //TODO Упростить
  const menuToggleHandler = (): void => {
    const bodyEl = document.querySelector("body");
    bodyEl!.style.overflow =
      bodyEl!.style.overflow === "hidden" ? "visible" : "hidden";
    const menuEl = menuElementRef.current;
    menuEl!.classList.toggle(styles.active);
  };

  const showMenuElements = (status: string) => {
    if (status === FETCH_STATUS.AUTHENTICATED) {
      return (
        <Link to={"dashboard"} className={styles.menuBtn}>
          Dashboard
        </Link>
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

import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import styles from "./dashboard.module.css";

const DashboardPage = () => {

  //TODO Убрать?
  const setOverflowVisible = (): void => {
    const bodyEl = document.querySelector("body");
    bodyEl!.style.overflow = "visible";
  };

  useEffect(() => {
    setOverflowVisible();
  }, []);

  return (
    <div className={styles.container}>
      <HeaderComponent />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;

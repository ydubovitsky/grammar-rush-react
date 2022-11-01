import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import styles from "./dashboard.module.css";

const DashboardPage = () => {
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

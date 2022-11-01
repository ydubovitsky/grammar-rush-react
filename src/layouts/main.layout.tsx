import styles from "./main.module.css";
import { Outlet } from "react-router-dom";
import Popup from "../common/components/popup/popup.component";
import FooterComponent from "../common/components/footer/footer.component";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <Popup />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;

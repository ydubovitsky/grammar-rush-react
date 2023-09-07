import styles from "./main.module.css";
import { Outlet } from "react-router-dom";
import Popup from "../../common/components/popup/popup.component";
import FooterComponent from "../../common/components/footer/footer.component";
import HeaderComponent from "./components/header/header.component";

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Popup />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;

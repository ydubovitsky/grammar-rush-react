import styles from "./main.module.css";
import HeroComponent from "./components/hero/hero.component";
import TaskListComponent from "./components/task-list/task-list.component";
import FeaturesComponent from "./components/features/features.component";
import DownloadComponent from "./components/download/download.component";
import AboutUsComponent from "./components/about-us/about-us.component";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeroComponent />
      <Outlet />
      <FeaturesComponent />
      <DownloadComponent />
      <AboutUsComponent />
      <TaskListComponent />
    </div>
  );
};

export default MainPage;

import styles from "./main.module.css";
import HeroComponent from "./components/hero/hero.component";
import ExerciseListComponent from "./components/exercise-examples/exercise-list.component";
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
      <ExerciseListComponent />
      <DownloadComponent />
      <AboutUsComponent />
    </div>
  );
};

export default MainPage;

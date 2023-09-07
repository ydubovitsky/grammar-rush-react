import React, { Suspense } from "react";
import styles from "./mobile-app-3d.module.css";
import SpinnerLoaderComponent from "../spinner-loader/spinner-loader.component";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
const SPLINE_URL =
  "https://prod.spline.design/DLgBQnJu9JmWhUa5/scene.splinecode";

const MobileApp3dComponent: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<SpinnerLoaderComponent />}>
        <Spline scene={SPLINE_URL}/>
      </Suspense>
    </div>
  );
};

export default MobileApp3dComponent;

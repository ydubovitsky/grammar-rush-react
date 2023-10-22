import React, { Suspense } from "react";
import styles from "./mobile-app-3d.module.css";
import SpinnerLoaderComponent from "../spinner-loader/spinner-loader.component";

type MobileApp3dComponentProps = {
  url: string;
};

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const MobileApp3dComponent: React.FC<MobileApp3dComponentProps> = ({
  url,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<SpinnerLoaderComponent />}>
        <Spline scene={url} />
      </Suspense>
    </div>
  );
};

export default MobileApp3dComponent;

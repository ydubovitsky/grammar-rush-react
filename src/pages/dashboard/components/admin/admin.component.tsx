import React from "react";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import styles from "./admin.module.css";

const AdminComponent: React.FC = (): JSX.Element => {
  
  return (
    <div className={styles.container}>
      <UnitTitleComponent text="Панель администратора" />
    </div>
  );
};

export default AdminComponent;

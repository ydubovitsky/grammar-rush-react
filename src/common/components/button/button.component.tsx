import React from "react";
import styles from "./button.module.css";

type ButtonComponentPropsInterface = {
  name: string;
  color?: string;
  handler?: (arg: any) => any;
};

const ButtonComponent: React.FC<ButtonComponentPropsInterface> = ({
  name,
  color = "",
  handler,
}) => {
  return (
    <div
      onClick={handler}
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <p>{name}</p>
    </div>
  );
};

export default ButtonComponent;

import cn from "classnames";
import { useEffect } from "react";
import styles from "./notification.module.css";

//! Переделать компонент, сделать более гибким!
type NotificationProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  color?: string;
};

const NotificationComponent: React.FC<NotificationProps> = ({
  isVisible,
  setIsVisible,
  message,
  color,
}): JSX.Element => {
  let timer: any = null;

  useEffect(() => {
    setTimer();
  }, [isVisible]);

  function setTimer() {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  }

  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(styles.container, isVisible ? styles.active : "")}
    >
      <p>{message}</p>
    </div>
  );
};

export default NotificationComponent;

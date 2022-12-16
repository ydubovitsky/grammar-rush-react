import styles from "./overlay.module.css";

interface OverlayComponentProps {
  isScaled: boolean;
}

//! This component doesnt`t use
const OverlayComponent: React.FC<OverlayComponentProps> = ({ isScaled }) => {

  const getClientHeight = (): string => {
    return document.body.clientHeight + "px";
  }

  return (
    <div
      className={styles.container}
      style={{
        display: isScaled ? "block" : "none",
        height: getClientHeight(),
      }}
    ></div>
  );
};

export default OverlayComponent;

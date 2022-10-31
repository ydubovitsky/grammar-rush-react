import styles from './animated-logo.module.css';
import { useRef, useEffect } from "react";

interface PageProps {
  name?: string;
  fontSize?: string | number;
}

const AnimatedLogoAtomicComponent: React.FC<PageProps> = ({name = "Grammar Rush", fontSize="3rem"}) => {

  const logoElementRef = useRef<HTMLDivElement>(null);

  const onLogoMouseEnterHandler = () => {
    logoElementRef.current?.classList.add(styles.container);
  }

  const onLogoMouseLeaveHandler = () => {
    logoElementRef.current?.classList.remove(styles.container);
  }

  const splitStringToCharArray = (str: string) => {
    return str.split("").map((char, idx) => {
      if(char === "u") return <span key={idx} className={styles.char}>{char}</span>
      return <span key={idx}>{char}</span>;
    })}

  return (
    <div
      ref={logoElementRef}
      style={{ fontSize: fontSize }}
      onMouseEnter={onLogoMouseEnterHandler}
      onMouseLeave={onLogoMouseLeaveHandler}
      className={styles.logo}
    >
      {splitStringToCharArray(name)}
    </div>
  );
};

export default AnimatedLogoAtomicComponent;
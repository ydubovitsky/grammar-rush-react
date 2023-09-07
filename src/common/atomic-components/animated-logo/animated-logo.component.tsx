import styles from "./animated-logo.module.css";
import { useRef } from "react";

type PageProps = {
  name?: string;
  fontSize?: string | number;
  color?: string;
}

const AnimatedLogoAtomicComponent: React.FC<PageProps> = ({
  name = "Yeap! English",
  fontSize = "3rem",
  color = "black",
}): JSX.Element => {
  const logoElementRef = useRef<HTMLDivElement>(null);

  const onLogoMouseEnterHandler = () => {
    logoElementRef.current?.classList.add(styles.container);
  };

  const onLogoMouseLeaveHandler = () => {
    logoElementRef.current?.classList.remove(styles.container);
  };

  const splitStringToCharArray = (str: string) => {
    return str.split("").map((char, idx) => {
      if (char === "E")
        return (
          <span key={idx} className={styles.char}>
            {char}
          </span>
        );
      return (
        <span key={idx} style={{ color: color }}>
          {char}
        </span>
      );
    });
  };

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

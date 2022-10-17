import React from 'react';
import styles from './button.module.css';

type ButtonComponentPropsInterface = {
  name: string,
  color?: string,
  handler?: (arg: any) => any
}

const ButtonComponent: React.FC<ButtonComponentPropsInterface> = ({ name, color="", handler }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color}}>
      <p onClick={handler}>{name}</p>
    </div>
  );
}

export default ButtonComponent;
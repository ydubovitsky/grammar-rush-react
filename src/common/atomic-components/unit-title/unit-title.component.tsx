import styles from './unit-title.module.css';

type UnitTitleComponentProps = {
  text: string,
  fontSize? : string
}

const UnitTitleComponent : React.FC<UnitTitleComponentProps> = ({ text, fontSize = '' }) : JSX.Element => {
  return (
    <div className={styles.container} style={{fontSize: fontSize}}>{text}</div>
  )
}

export default UnitTitleComponent;
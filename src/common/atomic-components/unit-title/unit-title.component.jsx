import styles from './unit-title.module.css';

const UnitTitleComponent = ({ text, fontSize = '' }) => {
  return (
    <div className={styles.container} style={{fontSize: fontSize}}>{text}</div>
  )
}

export default UnitTitleComponent;
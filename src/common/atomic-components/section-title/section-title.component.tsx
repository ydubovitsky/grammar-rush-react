import styles from './section-title.module.css';

type SectionTitlePropsType = {
  name: string
}

const SectionTitleComponent: React.FC<SectionTitlePropsType> = ({ name }) => {
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <div className={styles.line}></div>
    </div>
  )
}

export default SectionTitleComponent;
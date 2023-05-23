import styles from './section-title.module.css';

type SectionTitlePropsType = {
  name: string;
  description?: string;
}

const SectionTitleComponent: React.FC<SectionTitlePropsType> = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.line}></div>
      <p className={styles.description}>{description != undefined ? `«${description}»` : null}</p>
    </div>
  )
}

export default SectionTitleComponent;
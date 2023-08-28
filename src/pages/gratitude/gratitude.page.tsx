import styles from './gratitude.module.css';
import GratitudeSvg from './svg/thank-you-rafiki.svg';

const GratitudePage : React.FC = () : JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Благодарность</h1>
      <img src={GratitudeSvg} alt="" />
      <p>Автор выражает бесконечную благодарность коллективу https://storyset.com за предоставленные изображение</p>
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
    </div>
  )
}

export default GratitudePage;
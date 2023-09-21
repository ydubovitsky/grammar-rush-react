import UnitTitleComponent from '../../common/atomic-components/unit-title/unit-title.component';
import styles from './gratitude.module.css';
import GratitudeSvg from './svg/thank-you-rafiki.svg';

const GratitudePage : React.FC = () : JSX.Element => {
  return (
    <div className={styles.container}>
      <UnitTitleComponent text='Благодарность'/>
      <img src={GratitudeSvg} alt="There is no" />
      <p>Автор выражает бесконечную благодарность коллективу https://storyset.com за предоставленные изображение</p>
      <a href="https://storyset.com/people">People illustrations by Storyset</a>
      <p>А также коллективу https://www.flaticon.com за предоставленные превосходных иконок</p>
      <a href="https://www.flaticon.com/free-icons/united-kingdom" title="united kingdom icons">United kingdom icons created by Freepik - Flaticon</a>
    </div>
  )
}

export default GratitudePage;
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
    </div>
  )
}

export default GratitudePage;
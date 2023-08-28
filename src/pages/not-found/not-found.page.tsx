import styles from './not-found.module.css';
import NotFoundSvg from './svg/not-found-animal-rafiki.svg';

const NotFoundPage : React.FC = () : JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={NotFoundSvg} alt=""/>
    </div>
  )
}

export default NotFoundPage;
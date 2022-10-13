import SectionTitleComponent from '../../../../common/atomic-components/section-title/section-title.component';
import styles from './download.module.css';
import image from './images/ipad-hand.png';

const DownloadComponent = () => {
  return (
    <div className={styles.container}>
      <SectionTitleComponent name="Download Anytime, Anywhere" />
      <div className={styles.columnContainer}>
        <div className={styles.firstColumn}>
          <div className={styles.block}>
            <h1>Header</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sequi consectetur quis magnam quos quas reiciendis, eligendi
              architecto explicabo nisi.
            </p>
          </div>
          <div className={styles.block}>
            <h1>Header</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sequi consectetur quis magnam quos quas reiciendis, eligendi
              architecto explicabo nisi.
            </p>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <img src={image} alt="" />
        </div>
        <div className={styles.thirdColumn}>
          <div className={styles.block}>
            <h1>Header</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sequi consectetur quis magnam quos quas reiciendis, eligendi
              architecto explicabo nisi.
            </p>
          </div>
          <div className={styles.block}>
            <h1>Header</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sequi consectetur quis magnam quos quas reiciendis, eligendi
              architecto explicabo nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadComponent;
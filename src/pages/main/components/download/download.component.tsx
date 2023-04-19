import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import styles from "./download.module.css";
import image from "./images/ipad-hand.png";
import { Fade, Slide } from "react-awesome-reveal";

const DownloadComponent = () => {
  return (
    <div className={styles.container}>
      <Fade>
        <SectionTitleComponent name="Скачать приложение сейчас" />
        <div className={styles.columnContainer}>
          <div className={styles.firstColumn}>
            <div className={styles.block}>
              <h2>Легкий доступ к информации</h2>
              <p>
                Больше не нужно носить с собой кипу учебников, достаточно
                мобильного телефона и нашего приложение
              </p>
            </div>
            <div className={styles.block}>
              <h2>Удобный интерфейс</h2>
              <p>
                Красивый, минималистичный и функциональный дизайн приложения
                позволит вам сосредоточиться исключительно на учебе и не будет
                перегружать вас избытком ненужной информации
              </p>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <img src={image} alt="" />
          </div>
          <div className={styles.thirdColumn}>
            <div className={styles.block}>
              <h2>Адаптивность</h2>
              <p>
                Размеры приложение адаптируется под ваше персональное устойство
              </p>
            </div>
            <div className={styles.block}>
              <h2>Абсолютно бесплатно</h2>
              <p>
                Мы считаем, что все знания должны быть абсолютно бесплатными, поэтому используя наше приложение, вы ни за что не платите
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default DownloadComponent;

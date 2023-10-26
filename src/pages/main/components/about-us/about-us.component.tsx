import { Fade } from "react-awesome-reveal";
import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import styles from "./about-us.module.css";
import QuestionsSvg from "./svg/questions.svg";
import ButtonComponent from "../../../../common/components/button/button.component";
import data from "../../../../assets/data/data.json";

const AboutUsComponent: React.FC = () : JSX.Element => {

  const { vk, telegram, developerEmail, developerPage } = data["social-media-links"];
  
  const mailTo = `mailto:${developerEmail}`;

  const sendEmailHandler = (e : React.MouseEvent<HTMLElement>) => {
    window.location.href = mailTo;
    e.preventDefault();
  }

  return (
    <div id="contacts" className={styles.contacts} data-testid="contacts">
      <Fade triggerOnce={true}>
        <SectionTitleComponent name="Остались вопросы? Напишите нам!" />
        <div className={styles.contacts__content}>
          <form className={styles.sendMailForm}>
            <label htmlFor="name">Полное имя</label>
            <input
              className={styles.sendMailForm__input}
              name="name"
              type="text"
              placeholder="Ваше имя"
            ></input>

            <label htmlFor="name">Тема письма</label>
            <input
              className={styles.sendMailForm__input}
              name="subject"
              type="text"
              placeholder="Тема письма"
            ></input>

            <label htmlFor="name">Ваша почта</label>
            <input
              className={styles.sendMailForm__input}
              type="email"
              placeholder="Ваша почта"
            ></input>

            <label htmlFor="name">Сообщение</label>
            <textarea
              className={styles.sendMailForm__input}
              placeholder="Ваше сообщение"
            ></textarea>
            <div className={styles.sendMailForm__buttons}>
              <ButtonComponent
                handler={sendEmailHandler}
                name={"Отправить"}
              />
              <ButtonComponent name={"Очистить"} />
            </div>
          </form>
          <div className={styles.featuresContainer}>
            <div className={styles.svgContainer}>
              <img src={QuestionsSvg} alt="Your SVG" />
            </div>
          </div>
        </div>
        <div className={styles.feedbackLinks}>
          <div className={styles.feedbackLinks__item}>
            <i className="fas fa-envelope-open"></i>
            <p
              className={styles.feedbackLinks__item_title}
              onClick={sendEmailHandler}
            >
              Напишите нам
            </p>
            <p className={styles.feedbackLinks__item_info}>
              По всем интересующим вас вопросам обращайтесь на нашу почту
            </p>
          </div>
          <div className={styles.feedbackLinks__item}>
            <i className="fab fa-internet-explorer"></i>
            <a
              className={styles.feedbackLinks__item_href}
              href={developerPage}
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.feedbackLinks__item_title}>
                Сайт разработчика
              </p>
              <p className={styles.feedbackLinks__item_info}>
                Поделитесь своими идеями и мыслями по работе приложения
              </p>
            </a>
          </div>
          <div className={styles.feedbackLinks__item}>
            <i className="fab fa-telegram"></i>
            <a
              className={styles.feedbackLinks__item_href}
              href={telegram}
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.feedbackLinks__item_title}>
                Наш телеграм канал
              </p>
              <p className={styles.feedbackLinks__item_info}>
                Все самые последние новости и уютная атмосфера
              </p>
            </a>
          </div>
          <div className={styles.feedbackLinks__item}>
            <i className="fab fa-vk"></i>
            <a
              className={styles.feedbackLinks__item_href}
              href={vk}
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.feedbackLinks__item_title}>
                Группа в контакте
              </p>
              <p className={styles.feedbackLinks__item_info}>
                Развивающееся сообщество активных и целеустремленных людей
              </p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AboutUsComponent;

import AnimatedLogoAtomicComponent from "../../atomic-components/animated-logo/animated-logo.component";
import SocialIconsListComponent from "../social-icons-list/social-icons-list.component";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const FooterComponent = () => {

  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <AnimatedLogoAtomicComponent />
          </div>
          <div className={styles.anchorsContainer}>
            <Link to={"/"}>
              <p>Главная страница</p>
            </Link>
            <Link to={"/privacy-policy"}>
              <p>Политика конфеденциальности</p>
            </Link>
            <Link to={"/term-of-use"}>
              <p>Условия использования</p>
            </Link>
            <Link to={"/faq"}>
              <p>Часто задаваемые вопросы</p>
            </Link>
            <Link to={"/gratitude"}>
              <p>Благодароность</p>
            </Link>
            <Link to={"/application"}>
              <p>Скачать</p>
            </Link>
          </div>
        </div>
        <div className={styles.about}>
          <h1>О приложении</h1>
          <p>
            Специально разработанные онлайн-упражнения направлены на изучение и
            запоминание способов образования настоящего, прошедшего и будущего
            времен в английском, а так же на развите других навыков, помогающих
            вам в совершенстве овладеть языком!
          </p>
          <div className={styles.icons}>
            <SocialIconsListComponent iconSize="2rem" />
          </div>
        </div>
      </div>
      <div className={styles.authorContainer}>
        <p>
          © 2022 - {new Date().getFullYear()} Все права защищены. Создано и
          разработано Дубовицким Ю.А.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;

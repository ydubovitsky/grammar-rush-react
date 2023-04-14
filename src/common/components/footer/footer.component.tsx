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
            <Link to={"main"}>
              <p>Main Page |</p>
            </Link>
            <Link to={"privacy-policy"}>
              <p>Privacy Policy |</p>
            </Link>
            <Link to={"term-of-use"}>
              <p>Term of use |</p>
            </Link>
            <Link to={"faq"}>
              <p>FAQ |</p>
            </Link>
            <Link to={"privacy-policy"}>
              <p>Download</p>
            </Link>
          </div>
        </div>
        <div className={styles.contactsContainer}>
          <p>
            <i className="fas fa-map-marked-alt"></i> Address
          </p>
          <p>
            <i className="fas fa-at"></i> Email
          </p>
          <p>
            <i className="fab fa-telegram"></i> Telegram
          </p>
        </div>
        <div className={styles.about}>
          <p>About Application</p>
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
          © 2022 - {new Date().getFullYear()} All Rights Reserved. Created By
          Yury Dubovitsky
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;

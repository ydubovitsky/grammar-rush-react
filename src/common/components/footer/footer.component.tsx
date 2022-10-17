import AnimatedLogoAtomicComponent from '../../atomic-components/animated-logo/animated-logo.component';
import SocialIconsListComponent from '../social-icons-list/social-icons-list.component';
import styles from './footer.module.css';

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <AnimatedLogoAtomicComponent />
          </div>
          <div className={styles.anchorsContainer}>
            <p>Home |</p>
            <p>Features |</p>
            <p>Examples |</p>
            <p>Download</p>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            ratione et vero tempore repudiandae, quod magnam, praesentium eos
            aliquam consequuntur labore? Culpa rem nemo ullam, soluta
            consequuntur hic quaerat corporis!
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
}

export default FooterComponent;
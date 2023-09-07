import styles from "./header.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
import MenuComponent from "./components/menu/menu.component";
import { useState } from "react";
import AnimatedLogoAtomicComponent from "../../../../common/atomic-components/animated-logo/animated-logo.component";

const HeaderComponent = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <AnimatedLogoAtomicComponent fontSize={"2rem"} name="Yeap! English" color="white"/>
        </Link>
      </div>
      <nav className={styles.nav}>
        <div
          className={styles.sidebar}
          onClick={() => setIsSidebarShow(!isSidebarShow)}
        >
          <i className="fa fa-bars"></i>
        </div>
        <div
          className={cn(
            styles.navContainer,
            isSidebarShow ? styles.showSidebar : ""
          )}
        >
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              <Link to={"dashboard/tenses/Future Continuous"}>Грамматика</Link>
            </div>
            <div className={styles.menuItem}>
              <Link to={"application"}>Мобильное приложение</Link>
            </div>
            <div className={styles.menuItem}>
              <Link to={"dashboard/articles"}>Статьи</Link>
            </div>
            <div className={styles.menuItem}>
              <Link to={"dashboard/info"}>Информация</Link>
            </div>
            <div className={styles.menuItem}>
              <MenuComponent />
            </div>
          </div>
          <div
            className={styles.closeBtn}
            onClick={() => setIsSidebarShow(!isSidebarShow)}
          >
            <i className="fas fa-times-circle"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;

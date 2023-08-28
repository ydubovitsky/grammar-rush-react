import cn from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './navigation-panel.module.css';
import MenuComponent from "../menu/menu.component";

const NavigationPanelComponent = () => {

  const [isSidebarShow, setIsSidebarShow] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar} onClick={() => setIsSidebarShow(!isSidebarShow)}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={cn(styles.navContainer, isSidebarShow ? styles.showSidebar : '')}>
        <div className={styles.menu}>
          <div className={styles.menuItem}><Link to={"dashboard/tenses/Future Continuous"}>Грамматика</Link></div>
          <div className={styles.menuItem}><Link to={"dashboard/articles"}>Теория</Link></div>
          <div className={styles.menuItem}><Link to={"dashboard/articles"}>Мобильное приложение</Link></div>
          <div className={styles.menuItem}><Link to={"dashboard/articles"}>Статьи</Link></div>
          <div className={styles.menuItem}><Link to={"dashboard/info"}>Информация</Link></div>
          <div className={styles.menuItem}><MenuComponent/></div>
        </div>
        <div className={styles.closeBtn} onClick={() => setIsSidebarShow(!isSidebarShow)}>
          <i className="fas fa-times-circle"></i>
        </div>
      </div>
    </div>
  )
}

export default NavigationPanelComponent;

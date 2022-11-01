import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userRolesSelector,
  logout,
} from "../../../../redux/features/auth/auth.slice";

const HeaderComponent = () => {
  const userRoles = useSelector(userRolesSelector);
  const dispatch = useDispatch();

  const showAdminLinkEl = (): any => {
    return userRoles.includes("ADMIN") ? (
      <Link to={"admin"} className={styles.navEl}>
        Admin
      </Link>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Grammar Rush</div>
      <div className={styles.nav}>
        <Link to={"/"} className={styles.navEl}>
          Main
        </Link>
        <Link to={"info"} className={styles.navEl}>
          Info
        </Link>
        <Link to={"trainer?themeId=1"} className={styles.navEl}>
          Trainer
        </Link>
        {showAdminLinkEl()}
        <div onClick={() => dispatch(logout())} className={styles.navEl}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

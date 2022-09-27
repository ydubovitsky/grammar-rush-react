import styles from './main.module.css';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  )
}

export default MainLayout;
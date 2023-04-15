import { NavLink, useLocation } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  const location = useLocation();

  return (
    <div className={styles.headerNavigation}>
      <div className={styles.currentPage}>
        <p>Current page:</p>
        {location.pathname === '/' ? 'Home' : location.pathname === '/about' ? 'About Us' : 'Forms'}
      </div>
      <nav className={styles.navigation}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="."
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="forms"
        >
          Forms
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="about"
        >
          About Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;

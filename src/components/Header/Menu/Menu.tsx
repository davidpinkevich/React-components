import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  const [location, setLocation] = useState(window.location.pathname);
  const changeLocal = () => {
    setLocation(window.location.pathname);
  };

  const path = location;
  return (
    <div className={styles.headerNavigation}>
      <div className={styles.currentPage}>
        <p>Current page:</p>
        {path === '/' ? 'Home' : path === '/about' ? 'About Us' : 'Forms'}
      </div>
      <nav className={styles.navigation}>
        <NavLink
          onClick={changeLocal}
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="."
        >
          Home
        </NavLink>
        <NavLink
          onClick={changeLocal}
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="forms"
        >
          Forms
        </NavLink>
        <NavLink
          onClick={changeLocal}
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

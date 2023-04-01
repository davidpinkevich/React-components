import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = () => {
  const [location, setLocation] = useState(window.location.pathname);

  const changeLocal = () => {
    setTimeout(() => setLocation(window.location.pathname), 0);
  };

  return (
    <div className={styles.headerNavigation}>
      <div className={styles.currentPage}>
        <p>Current page:</p>
        {location === '/' ? 'Home' : location === '/about' ? 'About Us' : 'Forms'}
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

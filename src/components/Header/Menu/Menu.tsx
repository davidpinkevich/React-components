import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

export class Menu extends Component {
  render() {
    return (
      <nav className={styles.navigation}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="."
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to="about"
        >
          About Us
        </NavLink>
      </nav>
    );
  }
}

export default Menu;

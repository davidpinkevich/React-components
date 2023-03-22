import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
type CounterState = {
  location: string;
};

export class Menu extends Component<Record<string, never>, CounterState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      location: window.location.pathname,
    };
  }

  changeLocal = () => {
    this.setState(() => ({
      location: window.location.pathname,
    }));
  };
  render() {
    const path = this.state.location;
    return (
      <div className={styles.headerNavigation}>
        <div className={styles.currentPage}>
          <p>Current page:</p>
          {path === '/' ? 'Home' : path === '/about' ? 'About Us' : 'Forms'}
        </div>
        <nav className={styles.navigation}>
          <NavLink
            onClick={this.changeLocal}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
            to="."
          >
            Home
          </NavLink>
          <NavLink
            onClick={this.changeLocal}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
            to="forms"
          >
            Forms
          </NavLink>
          <NavLink
            onClick={this.changeLocal}
            className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
            to="about"
          >
            About Us
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Menu;

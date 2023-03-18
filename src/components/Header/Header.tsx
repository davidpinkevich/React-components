import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu/Menu';
import styles from './Header.module.scss';

export class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.header}>
          <div className="__container">
            <Menu />
          </div>
        </header>
        <Outlet />
      </>
    );
  }
}

export default Header;

import React from 'react';
import Logo from '../../../assets/icons/Logo';
import cl from './header.module.scss';
import ThemeSwitcher from '../../atoms/ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className="header__container">
        <div className={cl.inner}>
          <Logo />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;

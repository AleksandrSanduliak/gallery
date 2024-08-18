import React from 'react';
import cl from './themeSwitcher.module.scss';
import Light from '../../../assets/icons/Light';
import Dark from '../../../assets/icons/Dark';
import { useAppSelector } from '../../../hooks/redux';
import { useDispatch } from 'react-redux';
import { Themes } from '../../../types/theme';
import { setTheme } from '../../../store/slice/themeSlice';

const ThemeSwitcher = () => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const dispatch = useDispatch();
  const setThemeStatus = () => {
    dispatch(setTheme());
  };

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={cl.themeSwitcher} onClick={setThemeStatus}>
      {theme === Themes.DARK && <Light />}
      {theme === Themes.LIGHT && <Dark />}
    </div>
  );
};

export default ThemeSwitcher;

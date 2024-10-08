import React from 'react';
import cl from './filterIcon.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { Themes } from '../../../types/theme';
import { colors } from '../../../consts/colors';

const FilterIcon = () => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeColor =
    theme === Themes.DARK ? colors.primaryLightGray : colors.primaryDarkGray;
  return (
    <svg
      className={cl.svg}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.2 5.5C17.3 5.5 16.7 6 16.5 6.7H4.6C4.2 6.7 4 6.9 4 7.3C4 7.7 4.2 7.9 4.6 7.9H16.4C16.6 8.6 17.4 9.1 18.1 9.1C19.1 9.1 19.9 8.3 19.9 7.3C20 6.3 19.1 5.5 18.2 5.5ZM18.2 7.9C17.8 7.9 17.6 7.7 17.6 7.3C17.6 6.9 17.8 6.7 18.2 6.7C18.6 6.7 18.8 6.9 18.8 7.3C18.8 7.7 18.5 7.9 18.2 7.9Z"
        fill={themeColor}
      />
      <path
        d="M18.2 11.4H11.3C11 10.7 10.4 10.2 9.5 10.2C8.6 10.2 8 10.7 7.8 11.4H4.6C4.2 11.4 4 11.6 4 12C4 12.4 4.2 12.6 4.6 12.6H7.8C8 13.3 8.8 13.8 9.5 13.8C10.2 13.8 11 13.3 11.3 12.6H18.2C18.6 12.6 18.8 12.4 18.8 12C18.8 11.6 18.5 11.4 18.2 11.4ZM9.5 12.6C9.2 12.6 8.9 12.4 8.9 12C8.9 11.6 9.1 11.4 9.5 11.4C9.9 11.4 10.1 11.6 10.1 12C10.1 12.4 9.9 12.6 9.5 12.6Z"
        fill={themeColor}
      />
      <path
        d="M18.2 16.1H16.2C16 15.4 15.3 14.9 14.5 14.9C13.6 14.9 13 15.4 12.8 16.1H4.6C4.2 16.1 4 16.3 4 16.7C4 17.1 4.2 17.3 4.6 17.3H12.7C12.9 18 13.7 18.5 14.4 18.5C15.1 18.5 15.9 18 16.1 17.3H18.1C18.5 17.3 18.7 17.1 18.7 16.7C18.8 16.4 18.5 16.1 18.2 16.1ZM14.5 17.3C14.1 17.3 13.9 17.1 13.9 16.7C13.9 16.3 14.1 16.1 14.5 16.1C14.9 16.1 15.1 16.3 15.1 16.7C15.1 17.1 14.8 17.3 14.5 17.3Z"
        fill={themeColor}
      />
    </svg>
  );
};

export default FilterIcon;

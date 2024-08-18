import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Themes } from '../../types/theme';
import { colors } from '../../consts/colors';

const Plus = () => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeColor =
    theme === Themes.DARK ? colors.primaryLightGray : colors.primaryDarkGray;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C10.1768 2 10.3464 2.07024 10.4714 2.19526C10.5964 2.32029 10.6667 2.48986 10.6667 2.66667V9.33333H17.3333C17.5101 9.33333 17.6797 9.40357 17.8047 9.5286C17.9298 9.65362 18 9.82319 18 10C18 10.1768 17.9298 10.3464 17.8047 10.4714C17.6797 10.5964 17.5101 10.6667 17.3333 10.6667H10.6667V17.3333C10.6667 17.5101 10.5964 17.6797 10.4714 17.8047C10.3464 17.9298 10.1768 18 10 18C9.82319 18 9.65362 17.9298 9.5286 17.8047C9.40357 17.6797 9.33333 17.5101 9.33333 17.3333V10.6667H2.66667C2.48986 10.6667 2.32029 10.5964 2.19526 10.4714C2.07024 10.3464 2 10.1768 2 10C2 9.82319 2.07024 9.65362 2.19526 9.5286C2.32029 9.40357 2.48986 9.33333 2.66667 9.33333H9.33333V2.66667C9.33333 2.48986 9.40357 2.32029 9.5286 2.19526C9.65362 2.07024 9.82319 2 10 2Z"
        fill={themeColor}
      />
    </svg>
  );
};

export default Plus;

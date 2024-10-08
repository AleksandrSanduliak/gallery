import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Themes } from '../../types/theme';
import { colors } from '../../consts/colors';

interface iMinus {
  margin?: string;
}

const Minus = ({ margin }: iMinus) => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeColor =
    theme === Themes.DARK ? colors.primaryLightGray : colors.primaryDarkGray;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: margin }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7 10.7H17.4C17.6 10.7 17.7 10.6 17.9 10.5C17.9 10.3 18 10.2 18 9.99999C18 9.79999 17.9 9.69999 17.8 9.49999C17.7 9.39999 17.5 9.29999 17.3 9.29999H10.7H9.3H2.7C2.5 9.29999 2.4 9.39999 2.2 9.49999C2.1 9.69999 2 9.79999 2 9.99999C2 10.2 2.1 10.3 2.2 10.5C2.3 10.6 2.5 10.7 2.7 10.7H9.4H10.7Z"
        fill={themeColor}
      />
    </svg>
  );
};

export default Minus;

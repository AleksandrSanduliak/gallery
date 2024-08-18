import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { Themes } from '../../types/theme';
import { colors } from '../../consts/colors';

const ArrowLeft = () => {
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
        d="M13.6877 4.28349C13.5129 4.06977 13.1979 4.03827 12.9841 4.21313L6.38415 9.61313C6.26808 9.7081 6.20077 9.85015 6.20077 10.0001C6.20077 10.1501 6.26808 10.2921 6.38415 10.3871L12.9841 15.7871C13.1979 15.962 13.5129 15.9305 13.6877 15.7167C13.8626 15.503 13.8311 15.188 13.6174 15.0131L7.49036 10.0001L13.6174 4.98709C13.8311 4.81223 13.8626 4.49722 13.6877 4.28349Z"
        fill={themeColor}
      />
    </svg>
  );
};

export default ArrowLeft;

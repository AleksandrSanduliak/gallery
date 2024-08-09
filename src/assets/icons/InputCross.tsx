import React from 'react';
import { Themes } from '../../types/theme';
import { useAppSelector } from '../../hooks/redux';
import { colors } from '../../consts/colors';

const InputCross = () => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeColor =
    theme === Themes.DARK ? colors.primaryLightGray : colors.primaryDarkGray;

  return (
    <div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.96368 2.16834C2.74322 1.94389 2.3858 1.94389 2.16534 2.16834C1.94489 2.39279 1.94489 2.7567 2.16534 2.98116L5.20166 6.07255L2.30785 9.01884C2.0874 9.2433 2.0874 9.60721 2.30785 9.83166C2.52831 10.0561 2.88574 10.0561 3.10619 9.83166L6 6.88537L8.89381 9.83166C9.11426 10.0561 9.47169 10.0561 9.69215 9.83166C9.9126 9.60721 9.9126 9.2433 9.69215 9.01884L6.79834 6.07255L9.83466 2.98116C10.0551 2.7567 10.0551 2.39279 9.83466 2.16834C9.6142 1.94389 9.25678 1.94389 9.03632 2.16834L6 5.25973L2.96368 2.16834Z"
          fill={themeColor}
        />
      </svg>
    </div>
  );
};

export default InputCross;

import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { Themes } from '../../../types/theme';
import cl from './Input.module.scss';

interface IInput {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  variant: 'default' | 'search' | 'filter';
}

const Input = ({
  value,
  setValue,
  placeholder,
  variant = 'default',
}: IInput) => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeStyle = theme === Themes.DARK ? cl.darkTheme : cl.lightTheme;

  const variantStyle = {
    default: cl.default,
    search: cl.search,
    filter: cl.filter,
  };

  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e?.target?.value);
      }}
      className={`${themeStyle} ${cl.input} ${variantStyle[variant]}`}
      type="text"
    />
  );
};

export default Input;

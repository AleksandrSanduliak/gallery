import React from 'react';
import cl from './search.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { Themes } from '../../../types/theme';
import Glass from '../../../assets/icons/Glass';
import InputCross from '../../../assets/icons/InputCross';
const Search = () => {
  const theme = useAppSelector((state) => state.theme.themeStatus);
  const themeStyle = theme === Themes.DARK ? cl.darkTheme : cl.lightTheme;
  const [input, setInput] = React.useState<string>('');
  const clearInput = () => setInput('');

  return (
    <div className={cl.wrapper}>
      <div className={cl.inputWrapper}>
        <div className={cl.icon}>
          <Glass />
        </div>
        <input
          placeholder="Painting title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${themeStyle} ${cl.input}`}
          type="text"
        />
        {input.length > 0 && (
          <div className={cl.cross} onClick={clearInput}>
            <InputCross />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

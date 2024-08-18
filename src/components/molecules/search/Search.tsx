import React from 'react';
import cl from './search.module.scss';
import Glass from '../../../assets/icons/Glass';
import Cross from '../../../assets/icons/Cross';
import Input from '../../atoms/Input/Input';

const Search = ({
  input,
  setInput,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const clearInput = () => setInput('');

  return (
    <div className={cl.wrapper}>
      <div className={cl.inputWrapper}>
        <div className={cl.icon}>
          <Glass />
        </div>
        <Input
          variant="search"
          placeholder="Painting title"
          value={input}
          setValue={setInput}
        />
        {input?.length > 0 && (
          <div className={cl.cross} onClick={clearInput}>
            <Cross width={12} height={12} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

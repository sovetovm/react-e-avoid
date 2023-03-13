import React from 'react';
import { Link } from 'react-router-dom';

import { setSearch } from '../redux/slices/searchSlice';
import { useAppDispatch } from '../redux/store';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState('');
  const onClickClear = () => {
    setValue('');
    dispatch(setSearch(''));
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const goodValue = event.target.value.replace(/[^0-9]/g, '');
    setValue(goodValue);
    dispatch(setSearch(goodValue));
  };
  return (
    <div className="flex justify-center mt-4">
      <div className="relative rounded-full">
        <input
          className="w-full px-4 py-2 rounded-full text-gray-700 focus:outline-none border-2"
          placeholder="Поиск"
          value={value}
          onChange={onChangeInput}
          maxLength={3}
        />
        <Link to="/">
          <button onClick={onClickClear} className="absolute top-0 right-0 h-full pr-3 py-2">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;

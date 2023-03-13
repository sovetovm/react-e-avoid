import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Arr from '../Arr';
import { selectSearch } from '../redux/slices/searchSlice';

const TextArea: React.FC = () => {
  const searchValue = useSelector(selectSearch);
  const result = Arr.find((obj) => obj.number === searchValue.search);
  return (
    <div>
      {result ? (
        <div>
          <div className="flex justify-center mt-4">
            <div className="mx-4 mt-8 w-4/6 text-center">
              <b className="bg-red-400 p-2">{result.danger}</b>
              <p className="text-gray-800 leading-6 mt-4">{result.brief}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link to={`/e/${result.number}`}>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Подробнее
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-800 leading-6 mt-4 text-center">
          Введите номер добавки в поле поиска выше
        </p>
      )}
    </div>
  );
};

export default TextArea;

import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="relative rounded-full">
        <input
          type="number"
          className="w-full px-4 py-2 rounded-full text-gray-700 focus:outline-none border-2"
          placeholder="Поиск"
        />
        <button className="absolute top-0 right-0 h-full px-4 py-2">
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
      </div>
    </div>
  );
};

export default Search;

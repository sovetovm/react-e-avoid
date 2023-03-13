import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 py-4">
      <Link to="/">
        <h1 className="text-white text-center text-xl font-bold">E-avoid: знай, что ты ешь</h1>
      </Link>
    </header>
  );
};

export default Header;

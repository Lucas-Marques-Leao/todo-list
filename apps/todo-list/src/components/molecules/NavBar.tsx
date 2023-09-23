import React from 'react';
import SearchBar from '../../components/atoms/SearchBar';
import SearchIcon from '../../components/atoms/SearchIcon';

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row gap-3 border w-full border-blue-800 p-4">
      <SearchIcon />
      <SearchBar />
    </nav>
  );
};

export default NavBar;

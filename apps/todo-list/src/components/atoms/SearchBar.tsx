import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="w-full border border-blue-800 rounded-md">
      <input
        className="p-1 w-full"
        type="text"
        placeholder="Digite sua busca..."
      />
    </div>
  );
};

export default SearchBar;

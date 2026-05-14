import React from 'react';

const Header = ({ title, userImage, logoSource }) => {
  return (
    <header className="bg-blue-600 w-full pt-8 pb-16 px-6 flex flex-col items-center">
      <div className="w-full flex justify-between items-center max-w-4xl mx-auto">
        <img src={logoSource} alt="Logo" className="h-10 w-auto" />
        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
          <img src={userImage} alt="Usuário" className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className="text-white text-3xl font-bold mt-4">
        {title}
      </h1>
    </header>
  );
};

export default Header;
import React from 'react';

const Header = ({ title, userImage, userName, logoSource }) => {
  return (
    <header className="bg-gradient-to-r from-[var(--bg-primary-color)] to-[var(--bg-secondary-color)] w-full pt-8 pb-16 px-6 flex flex-col items-center">
      <div className="w-full flex justify-between items-center  mx-auto">
        <img src={logoSource} alt="Logo" className="h-10 w-auto" />

        <div className='flex gap-2 items-center'>

          <div className='hidden md:block md:flex md:flex-col md:items-center'>
            <p className='instrument-sans text-lg text-white font-bold lg:text-3xl'>Olá, {userName}!</p>
            <span className='self-end instrument-sans text-sm underline text-white lg:text-xl'>Abrir perfil</span>
          </div>

          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md md:size-15 lg:size-20">
            <div>
              <img src={userImage} alt="Usuário" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
        

      </div>
      <h1 className="text-white text-3xl font-bold mt-4 instrument-sans lg:text-5xl">
        {title}
      </h1>
    </header>
  );
};

export default Header;
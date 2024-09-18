import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-10 text-center">
      <h1 className="text-4xl font-bold">Заголовок — основная суть предложения</h1>
      <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg">Button Text</button>
      <div className="mt-10 bg-gray-200 h-64 w-3/4 mx-auto"></div>
    </header>
  );
};

export default Header;
import React from "react";

const InfoSection = () => {
  return (
    <>
        <div className="bg-white py-10 text-center">
            <h1 className="text-4xl font-bold">Заголовок — основная суть предложения</h1>
            <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg">Button Text</button>
            <div className="mt-10 bg-gray-200 h-64 w-3/4 mx-auto"></div>
        </div>
        <section className="py-16 text-center">
            <h2 className="text-3xl font-semibold">Заголовок</h2>
            <div className="flex justify-center mt-8 space-x-10">
                <div>
                <div className="bg-gray-300 h-16 w-16 mx-auto mb-4"></div>
                <p>Описание 1</p>
                </div>
                <div>
                <div className="bg-gray-300 h-16 w-16 mx-auto mb-4"></div>
                <p>Описание 2</p>
                </div>
                <div>
                <div className="bg-gray-300 h-16 w-16 mx-auto mb-4"></div>
                <p>Описание 3</p>
                </div>
            </div>
        </section>
    </>
  );
  
};

export default InfoSection; 
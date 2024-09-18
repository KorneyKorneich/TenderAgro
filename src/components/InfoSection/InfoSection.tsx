import React from "react";

const InfoSection = () => {
  return (
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
  );
};

export default InfoSection; 
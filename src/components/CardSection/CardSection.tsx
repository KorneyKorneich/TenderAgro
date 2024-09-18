import React from "react";

const ImageTextSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="bg-gray-200 h-64 w-64 mb-6 md:mb-0 md:mr-8"></div>
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-semibold">Заголовок — о чем блок</h2>
          <p className="mt-4">Подзаголовок: Краткое описание текста блоков.</p>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
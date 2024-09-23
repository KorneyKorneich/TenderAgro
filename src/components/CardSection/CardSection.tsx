const ImageTextSection = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-center">
        Почему стоит выбрать нас?
      </h2>
      <section className="py-16">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
          <div className="bg-gray-200 h-64 w-64 mb-6 md:mb-0"></div>
          <div className="w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Экологичность</h2>
            <p className="mt-4">
              Наш продукт производится из органической пшеницы, без добавления
              химикатов.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:gap-10">
          <div className="bg-gray-200 h-64 w-64 mb-6 md:mb-0"></div>
          <div className="w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Польза для здоровья</h2>
            <p className="mt-4">
              Содержит большое количество витаминов и минералов.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:gap-10">
          <div className="bg-gray-200 h-64 w-64 mb-6 md:mb-0"></div>
          <div className="w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Натуральный вкус</h2>
            <p className="mt-4">
              Никаких искусственных добавок, только чистый вкус природы.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:gap-10">
          <div className="bg-gray-200 h-64 w-64 mb-6 md:mb-0"></div>
          <div className="w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Легкость в приготовлении</h2>
            <p className="mt-4">
              Быстро готовится и подходит для любого рациона.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageTextSection;


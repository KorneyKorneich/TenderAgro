import { Button } from "@/shared/components/Button/Button";
import HeroPic from "@shared/assets/img/flakes-in-bowl.webp";

const InfoSection = () => {
  return (
    <>
      <div className="bg-white py-10 text-center">
        <h1 className="w-3/4 mx-auto text-4xl font-bold">
          Натуральные хлопья зародышей пшеницы — польза от природы для вашего
          здоровья
        </h1>
        <p className="w-3/4 mt-2 mx-auto text-xl">
          Ежедневная порция энергии и полезных веществ в одном продукте.
          Питайтесь правильно, выбирая лучшее от природы.
        </p>
        <img
          className="mt-5 bg-gray-200 w-1/2 mx-auto rounded-lg"
          src={HeroPic}
        />
        <Button buttonText="Заказать" />
      </div>
      {/* <section className="py-16 text-center">
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
      </section> */}
    </>
  );
};

export default InfoSection;


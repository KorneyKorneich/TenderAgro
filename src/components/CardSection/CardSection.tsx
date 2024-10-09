import { Arrow } from "@/shared/assets/icons/Arrow";
import { cardsData } from "@shared/assets/info/cardsInfo";
import { useState } from "react";

const CardSection = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleCardChange = (direction: "forward" | "back") => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex;

      if (direction === "back") {
        newIndex = prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1;
      } else {
        newIndex = prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1;
      }

      return newIndex;
    });
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-center">
        Почему стоит выбрать нас?
      </h2>
      <section className="py-8">
        <div className="flex justify-center">
          {/* Назад */}
          <div
            className="p-10 text-center cursor-pointer content-center rotate-180 transition-transform transform hover:scale-110"
            onClick={() => handleCardChange("back")}
          >
            <Arrow height="30px" width="30px" />
          </div>

          {/* Карточка */}
          <div className="flex w-1/2 flex-col md:flex-row items-center justify-center md:gap-10">
            <div className="bg-gray-200 h-64 w-64 mb-6 md:mb-0"></div>
            <div className="w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold">
                {cardsData[currentIndex]?.cardTitle}
              </h2>
              <p className="mt-4">{cardsData[currentIndex]?.cardText}</p>
            </div>
          </div>

          {/* Вперед */}
          <div
            className="p-10 text-center cursor-pointer content-center transition-transform transform hover:scale-110"
            onClick={() => handleCardChange("forward")}
          >
            <Arrow height="30px" width="30px" />
          </div>
        </div>
        <div className="flex gap-2 justify-center mt-5">
          {cardsData.map((_, index) => {
            if (currentIndex === index) {
              return <div className="p-1 bg-blue-500 rounded-full"></div>;
            } else {
              return <div className="p-1 bg-gray-300 rounded-full"></div>;
            }
          })}
        </div>
      </section>
    </>
  );
};

export default CardSection;


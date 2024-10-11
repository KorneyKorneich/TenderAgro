import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ProductInfo = () => {
  const { t, i18n } = useTranslation(["flakes"]);
  const [isDescription, setIsDescription] = useState<boolean>(true);
  console.log(t("productInfo.productDescription"));
  return (
    <div className="w-3/4 mx-auto p-4">
      {/* Заголовок с кнопками переключения */}
      <div className="pb-4 flex justify-evenly border-b-2 border-blue-500">
        <div
          className={`cursor-pointer ${
            isDescription ? "font-bold text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setIsDescription(true)}
        >
          Описание
        </div>
        <div
          className={`cursor-pointer ${
            !isDescription ? "font-bold text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setIsDescription(false)}
        >
          Дополнительная информация
        </div>
      </div>

      <div className="pt-6 text-gray-800 leading-relaxed">
        {isDescription ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Описание продукта</h2>
            <p>{t("flakesInfoPage.productDescription")}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Пищевая ценность и состав
            </h2>

            {/* Таблица пищевой ценности */}
            <table className="table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Показатель</th>
                  <th className="border px-4 py-2">Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Калорийность</td>
                  <td className="border px-4 py-2">
                    {ProductInfoTxt.additionalInfo.nutritionFacts.calories}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Белки</td>
                  <td className="border px-4 py-2">
                    {ProductInfoTxt.additionalInfo.nutritionFacts.protein}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Жиры</td>
                  <td className="border px-4 py-2">
                    {ProductInfoTxt.additionalInfo.nutritionFacts.fat}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Углеводы</td>
                  <td className="border px-4 py-2">
                    {ProductInfoTxt.additionalInfo.nutritionFacts.carbohydrates}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Клетчатка</td>
                  <td className="border px-4 py-2">
                    {ProductInfoTxt.additionalInfo.nutritionFacts.fiber}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Состав элементов */}
            <h3 className="text-xl font-semibold mb-2">Состав элементов</h3>
            <ul className="list-disc pl-5">
              {ProductInfoTxt.additionalInfo.elements.map((element, index) => (
                <li key={index} className="mb-1">
                  {element.name}: {element.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


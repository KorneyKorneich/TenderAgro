import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ElementsList, NutrientElement } from "../ElemetsList/ElementsList";
import { NutritionTable } from "../NutritionTable/NutritionTable";

export const ProductInfo = () => {
  const { t } = useTranslation(["flakes"]);
  const [isDescription, setIsDescription] = useState(true);

  const nutritionData = {
    calories: t("flakesInfoPage.additionalInfo.nutritionFacts.calories"),
    protein: t("flakesInfoPage.additionalInfo.nutritionFacts.protein"),
    fat: t("flakesInfoPage.additionalInfo.nutritionFacts.fat"),
    carbohydrates: t(
      "flakesInfoPage.additionalInfo.nutritionFacts.carbohydrates"
    ),
    fiber: t("flakesInfoPage.additionalInfo.nutritionFacts.fiber"),
    caloriesValue: t(
      "flakesInfoPage.additionalInfo.nutritionFacts.caloriesValue"
    ),
    proteinValue: t(
      "flakesInfoPage.additionalInfo.nutritionFacts.proteinValue"
    ),
    fatValue: t("flakesInfoPage.additionalInfo.nutritionFacts.fatValue"),
    carbohydratesValue: t(
      "flakesInfoPage.additionalInfo.nutritionFacts.carbohydratesValue"
    ),
    fiberValue: t("flakesInfoPage.additionalInfo.nutritionFacts.fiberValue"),
  };

  const elementsData: NutrientElement[] = t(
    "flakesInfoPage.additionalInfo.elements",
    {
      returnObjects: true,
    }
  ) as NutrientElement[];

  return (
    <div className="w-full max-w-screen-md mx-auto p-4">
      <div className="pb-4 flex flex-col md:flex-row justify-evenly border-b-2 border-blue-500">
        <div
          className={`cursor-pointer py-2 mx-2 text-center ${
            isDescription ? "font-bold text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setIsDescription(true)}
        >
          {t("flakesInfoPage.articleOptionDescription")}
        </div>
        <div
          className={`cursor-pointer py-2 mx-2 text-center ${
            !isDescription ? "font-bold text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setIsDescription(false)}
        >
          {t("flakesInfoPage.articleOptionAdditionalInfo")}
        </div>
      </div>

      <div className="pt-6 text-gray-800 leading-relaxed">
        {isDescription ? (
          <div>
            <SectionHeader
              title={t("flakesInfoPage.productDescrioptionTitle")}
            />
            <p>{t("flakesInfoPage.productDescription")}</p>
          </div>
        ) : (
          <div>
            <SectionHeader title={t("flakesInfoPage.nutritionTableTitle")} />
            <NutritionTable nutrition={nutritionData} />
            <h3 className="text-xl font-semibold mb-2">
              {t("flakesInfoPage.elementsTitle")}
            </h3>
            <ElementsList elements={elementsData} />
          </div>
        )}
      </div>
    </div>
  );
};

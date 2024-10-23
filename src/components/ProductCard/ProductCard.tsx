import { Button } from "@/shared/components/Button/Button";
import HeroPic from "@shared/assets/img/flakes-large.webp";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { useTranslation } from "react-i18next";

export const ProductCard = () => {
  const { t } = useTranslation(["flakes", "common"]);
  const handleBuy = () => {};
  return (
    <>
      <div className="bg-gray-100">
        <div className=" w-3/4 mx-auto my-5 py-10 flex gap-14">
          <div className="w-1/2">
            <img className="rounded-lg" src={HeroPic} />
          </div>
          <div className="w-1/2 flex flex-col items-start gap-5">
            <h1 className="text-3xl font-semibold text-center">
              {t("flakesInfoPage.productName")}
            </h1>
            <p className="text-2xl"> price$$$</p>
            <p className="">{t("flakesInfoPage.productShortDescription")}</p>
            <Button
              buttonText={t("common.buttons.buy")}
              buttonHandler={handleBuy}
            />
          </div>
        </div>
      </div>
      <ProductInfo />
    </>
  );
};


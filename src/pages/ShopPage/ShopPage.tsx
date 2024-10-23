import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header/Header";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useTranslation } from "react-i18next";

export const ShopPage = () => {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <Header buttonHandle={() => {}} buttonTitle={t("common.buttons.order")} />
      <ProductCard />
      <FAQSection />
      <Footer />
    </>
  );
};


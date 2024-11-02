import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header/Header";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loader from "@/shared/components/Loader/Loader";

export const ShopPage = () => {
  const { t } = useTranslation(["common"]);
  return (
    <Suspense fallback={<Loader />}>
      <Header buttonHandle={() => {}} buttonTitle={t("common.buttons.order")} />
      <ProductCard />
      <FAQSection />
      <Footer />
    </Suspense>
  );
};


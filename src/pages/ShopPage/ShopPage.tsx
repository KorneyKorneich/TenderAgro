import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ProductCard } from "@/components/ProductCard/ProductCard";

export const ShopPage = () => {
  return (
    <>
      <Header buttonHandle={() => {}} buttonTitle="Заказать" />
      <ProductCard />
      <FAQSection />
      <Footer />
    </>
  );
};


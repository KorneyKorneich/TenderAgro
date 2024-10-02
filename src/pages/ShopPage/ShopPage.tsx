import CardSection from "@/components/CardSection/CardSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
// import InfoSection from "@/components/InfoSection/InfoSection";

export const ShopPage = () => {
  return (
    <>
      <Header buttonHandle={() => {}} buttonTitle="Заказать" />
      {/* <InfoSection /> */}
      <CardSection />
      <FAQSection />
      <Footer />
    </>
  );
};


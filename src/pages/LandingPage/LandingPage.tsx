import CardSection from "@/components/CardSection/CardSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import InfoSection from "@/components/InfoSection/InfoSection";
import { QuestionForm } from "@/components/QuestionForm/QuestionForm";
import HeroPic from "@shared/assets/img/flakes-large.webp";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const toProductsHandler = () => {
    navigate("/shop");
  };

  return (
    <>
      <Header buttonHandle={toProductsHandler} buttonTitle="К продуктам" />
      <InfoSection
        h1Text="Tender Agro — натуральные продукты для здоровья и силы"
        pText="Tender Agro — компания, ориентированная на производство и продажу натуральных сельскохозяйственных продуктов.  Мы верим, что лучшее питание — это то, что даёт нам природа, и наш продукт — идеальный выбор для всех, кто заботится о своём благополучии."
        img={HeroPic}
        buttonText="К продуктам"
        buttonHandler={toProductsHandler}
      />
      <CardSection />
      {/* <FAQSection /> */}
      <QuestionForm />
      <Footer />
    </>
  );
};


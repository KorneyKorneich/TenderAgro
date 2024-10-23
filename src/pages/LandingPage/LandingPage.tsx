import CardSection from "@/components/CardSection/CardSection";
import Footer from "@/shared/components/Footer/Footer";
import Header from "@/shared/components/Header/Header";
import InfoSection from "@/components/InfoSection/InfoSection";
import { QuestionForm } from "@/components/QuestionForm/QuestionForm";
import HeroPic from "@shared/assets/img/flakes-large.webp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LandingPage = () => {
  const { t } = useTranslation(["landing", "common"]);
  const navigate = useNavigate();

  const toProductsHandler = () => {
    navigate("/shop");
  };

  return (
    <>
      <Header
        buttonHandle={toProductsHandler}
        buttonTitle={t("common.buttons.toProducts")}
      />
      <InfoSection
        h1Text={t("landingPage.heroSection.title")}
        pText={t("landingPage.heroSection.mainText")}
        img={HeroPic}
        buttonText={t("common.buttons.toProducts")}
        buttonHandler={toProductsHandler}
      />
      <CardSection />
      <QuestionForm />
      <Footer />
    </>
  );
};


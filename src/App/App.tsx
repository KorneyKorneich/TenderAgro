import React from "react";
import "../index.css"

import Header from "../components/Header/Header"
import InfoSection from "../components/InfoSection/InfoSection"
import ImageTextSection from "../components/ImageTextSection/ImageTextSection"
import CardSection from "../components/CardSection/CardSection"
import FAQSection from "../components/FAQSection/FAQSection"
import Footer from "../components/Footer/Footer"



function App() {
  return (
    <div className="App">
      <Header />
      <InfoSection />
      <ImageTextSection />
      <CardSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
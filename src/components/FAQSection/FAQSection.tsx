import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Faq {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const { t } = useTranslation(["flakes"]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = t("flakesInfoPage.questions", {
    returnObjects: true,
  }) as Faq[];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-semibold">
        {t("flakesInfoPage.mostAskedQuestions")}
      </h2>
      <div className="max-w-xl mx-auto mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-gray-100">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;


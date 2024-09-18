import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Вопрос 1?", answer: "Ответ на вопрос 1." },
    { question: "Вопрос 2?", answer: "Ответ на вопрос 2." },
    { question: "Вопрос 3?", answer: "Ответ на вопрос 3." },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-semibold">Часто задаваемые вопросы</h2>
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
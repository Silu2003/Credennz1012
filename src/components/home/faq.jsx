import React, { useState } from "react";

export default function FAQ() {
  // State to track the open FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the FAQ item based on index
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h6>FAQ</h6>
            <h2>
              Frequently Asked
              <br /> Questions
            </h2>
          </div>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{item.question}</h3>
                  <span className="faq-toggle">
                    {openIndex === index ? "+" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <a href="#" className="get-template-btn">
            Get this template →
          </a>
        </div>
      </section>
    </div>
  );
}

// Sample FAQ data
const faqData = [
  {
    question: "Is it hard to customize this template?",
    answer:
      "With how easy to use Framer is, no template is too hard to customize! Of course, if you don't have any web design experience it might be a bit tricky to figure out at first. However, we've prepared a full video tutorial, walking you step-by-step on customizing the $none template! You get it with your purchase, for free.",
  },
  {
    question: "Is support available in case I get stuck?",
    answer:
      "Yes, we offer comprehensive support for all our templates. Our dedicated support team is always ready to assist you with any questions or issues you might encounter.",
  },
  {
    question: "What can I customize exactly on this template?",
    answer:
      "You have full control over customization. You can modify colors, fonts, layouts, add or remove sections, and even integrate additional features. The template is designed to be flexible and adaptable to your specific needs.",
  },
];

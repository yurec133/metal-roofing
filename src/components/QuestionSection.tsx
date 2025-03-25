"use client";
import { useState } from "react";
import FaqItem from "@/components/FaqItem";

const faqItems = [
  {
    question: "Do I need to pay to join?",
    answer: "No, joining our platform is completely free for all users.",
  },
  {
    question: "How soon can I start getting jobs?",
    answer:
      "You can start applying for jobs immediately after completing your profile setup.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide services worldwide, covering all major countries and regions.",
  },
  {
    question: "What type of projects will I work on?",
    answer:
      "Projects vary from short-term tasks to long-term contracts across multiple industries.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payments are processed securely through our platform upon project completion.",
  },
];

const QuestionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className={"mb-20 lg:mb-32"}>
      <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-12 text-center">
          Frequently Asked Questions
        </h3>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default QuestionSection;

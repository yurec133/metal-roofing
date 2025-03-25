import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="mb-4 border border-gray-300 rounded-lg shadow-sm transition-colors hover:border-gray-400">
      <button
        className="cursor-pointer flex items-center justify-between w-full p-5 text-left"
        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        aria-expanded={activeIndex === index}
        aria-controls={`content-${index}`}
      >
        <span className="font-bold text-blue-900 text-sm pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-blue-500 transform transition-transform ${
            activeIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`content-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          activeIndex === index
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;

import Dropdown from "../../assets/dropdown.svg?react";
import { useRef, useEffect, useState } from "react";

const Collapsible = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="w-full max-w-[333px] md:max-w-[684px] lg:max-w-[1126px] mx-auto mb-6">
      <button
        onClick={onClick}
        className="w-full h-[45px] md:h-[65px] border-b border-[#666] flex items-center justify-between cursor-pointer"
      >
        <span className="text-white font-inter text-lg md:text-2xl text-left">
          {question}
        </span>
        <Dropdown
          className={`w-[32px] h-[32px] md:w-[64px] md:h-[64px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="mt-6 text-white opacity-[0.5] text-base md:text-xl leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;

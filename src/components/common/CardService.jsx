import React from "react";

const CardService = ({ icon: Icon, title, description }) => {
  return (
    <div className="w-[333px] h-[377px] py-[38px] px-[36px] flex flex-col items-center justify-center border border-white/20 rounded-[12px] transition-all duration-300 hover:-translate-y-2 lg:cursor-pointer lg:w-[308px] lg:h-[348px] lg:py-6 lg:px-6">
      <div>
        <Icon className="w-[97px] h-[97px]" />
      </div>
      <h3 className="text-white text-center font-inter text-2xl font-medium mt-9">
        {title}
      </h3>
      <p className="text-white text-center opacity-[0.5] font-inter text-[16px] mt-4">
        {description}
      </p>
    </div>
  );
};

export default CardService;

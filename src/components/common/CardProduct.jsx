import React from "react";

const CardProduct = ({ imgSrc, imgSize, title, description }) => {
  return (
    <div className="flex flex-col justify-center w-[308px] h-[333px] bg-[#191919] rounded-2xl md:w-[332px] md:h-[359px] lg:w-[308px] lg:h-[333px] transition-all duration-300 hover:-translate-y-2 lg:cursor-pointer">
      <div className="bg-white rounded-t-2xl flex items-center justify-center h-[198px] overflow-hidden">
        <img src={imgSrc} alt={title} className="object-contain max-h-full" />
      </div>

      <div className="flex flex-col gap-3 justify-center pl-[24px] pt-[24px] pr-[28px] pb-[26px]">
        <h1 className="text-white font-inter text-lg font-semibold">{title}</h1>
        <p className="text-[#ffffffb3] font-inter">{description}</p>
      </div>
    </div>
  );
};

export default CardProduct;

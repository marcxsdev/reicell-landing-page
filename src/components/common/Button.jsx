import React from "react";

const Button = ({ text, icon: Icon, variant = "primary", onClick }) => {
  const baseClasses =
    "bg-[#02ED6D] hover:bg-[#018e41] active:bg-[#016b31] text-white font-inter font-bold rounded-2xl transition duration-300 flex items-center justify-center cursor-pointer";

  const variantClasses = {
    primary: {
      mobile: "w-[261px] h-14 px-2 py-4 text-lg gap-3",
      desktop:
        "md:w-[389px] md:h-[77px] md:px-4 md:py-[23px] md:text-2xl md:gap-6",
    },
    backToTop: {
      mobile: "w-[229px] h-14 px-8 py-4 text-lg",
      desktop: "md:w-80 md:h-[77px] md:px-14 md:py-6 md:text-2xl",
    },
  };

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant].mobile}
    ${variantClasses[variant].desktop}
  `.trim();

  const iconClasses = "w-6 h-6 md:w-8 md:h-8";
  return (
    <>
      <button className={buttonClasses} onClick={onClick}>
        {Icon && <Icon className={iconClasses} />}
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;

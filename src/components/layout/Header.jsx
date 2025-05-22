import logo from "../../assets/logo.svg";
import Instagram from "../../assets/instagram.svg?react";
import Whatsapp from "../../assets/whatsapp.svg?react";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-around mt-4">
      <div className="md:flex md:flex-row md:gap-10 lg:flex lg:flex-row lg:items-center lg:gap-28">
        <div className="">
          <img
            src={logo}
            alt="Reicell logo"
            className="w-30 h-19 lg:w-36 lg:h-24 cursor-pointer transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="hidden md:flex flex-row items-center">
          <nav>
            <ul className="flex flex-row gap-10">
              {["Sobre", "Serviços", "Produtos", "Orçamento"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`
            relative text-white font-inter text-lg md:text-base
            after:block after:absolute after:left-0 after:-bottom-2
            after:h-0.5 after:w-0 after:bg-[#02D562]
            md:hover:after:w-full md:after:transition-all md:after:duration-300
            md:active:text-[#02d562] active:text-[#02d562] transition-colors duration-200
          `}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex flex-row gap-8 items-center">
        <a href="#" target="_blank">
          <Whatsapp className="w-8 h-8 text-white active:text-[#02d562] transition-colors duration-200 lg:hover:text-[#02d562] lg:hover:-translate-y-0.5 lg:transition-transform lg:duration-200" />
        </a>

        <a
          href="https://www.instagram.com/reicellcelular_oficial/"
          target="_blank"
        >
          <Instagram className="w-6 h-6 text-white active:text-[#02d562] transition-colors duration-200 lg:hover:text-[#02d562] lg:hover:-translate-y-0.5 lg:transition-transform lg:duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Header;

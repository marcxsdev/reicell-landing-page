import Button from "../common/Button";
import Whatsapp from "../../assets/whatsapp.svg?react";
import Carousel from "../common/Carousel";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center lg:hidden px-4 pt-8 pb-16">
          <h1 className="text-[#F3F3F3] text-center font-inter text-5xl tracking-[-1.92px] font-bold max-w-[333px] md:text-7xl md:max-w-[684px]">
            Seu celular novo de novo, em poucas horas!
          </h1>
          <p className="text-white opacity-[0.5] text-center font-inter text-lg tracking-[-0.72px] max-w-[333px] mt-4 md:text-2xl md:max-w-[684px] md:mt-8">
            Resolvemos diversos problemas com rapidez, cuidado e peças de
            qualidade. Também oferecemos películas, carregadores, fones e muito
            mais.
          </p>
          <div className="mt-[30px] md:mt-8">
            <Button
              icon={Whatsapp}
              text={"Solicitar Orçamento"}
              variant="primary"
              onClick={() => {
                const section = document.getElementById("budget");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </section>

      <section className="hidden lg:flex w-full min-h-[830px]">
        <div className="bg-[#191919] basis-[55%] pt-[193px] pb-[110px] pl-[75px] pr-[30px] flex flex-col">
          <h1 className="text-[#F3F3F3] font-inter text-7xl font-black tracking-[-2.88px] max-w-[698px]">
            Seu celular novo de novo, em poucas horas!
          </h1>
          <p className="opacity-[0.5] text-white font-inter text-2xl max-w-[634px] mt-8">
            Resolvemos diversos problemas com rapidez, cuidado e peças de
            qualidade. Também oferecemos películas, carregadores, fones e muito
            mais.
          </p>
          <div className="mt-18">
            <Button
              icon={Whatsapp}
              text={"Solicitar Orçamento"}
              variant="primary"
              onClick={() => {
                const section = document.getElementById("budget");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

        <div className="basis-[45%]">
          <Carousel />
        </div>
      </section>
    </>
  );
};

export default Hero;

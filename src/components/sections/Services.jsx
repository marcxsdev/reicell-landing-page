import CardService from "../common/CardService";
import Screen from "../../assets/services/screen.svg?react";
import Battery from "../../assets/services/battery.svg?react";
import Board from "../../assets/services/board.svg?react";
import Headphone from "../../assets/services/headphone.svg?react";

const Services = () => {
  const services = [
    {
      title: "Troca de Tela",
      description:
        "Substituímos telas quebradas com rapidez e peças de qualidade.",
      icon: Screen,
    },
    {
      title: "Troca de Baterias",
      description:
        "Seu celular descarrega rápido? A gente resolve com uma bateria nova.",
      icon: Battery,
    },
    {
      title: "Reparos de Placa",
      description:
        "Corrigimos falhas internas com diagnóstico técnico especializado.",
      icon: Board,
    },
    {
      title: "Acessórios",
      description:
        "Capinhas, películas, carregadores, fones e muito mais! Tudo no mesmo lugar.",
      icon: Headphone,
    },
  ];
  return (
    <div className="flex flex-col gap-12 items-center justify-center w-full max-w-[1290px] mx-auto px-4 md:px-20 md:items-start lg:px-0 mt-28">
      <div className="">
        <h1 className="text-white font-inter text-5xl font-black tracking-[-1.68px] md:text-6xl md:text-left lg:text-7xl">
          Serviços
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {services.map((service, index) => (
          <CardService
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

import CardService from "../common/CardService";
import Screen from "../../assets/services/screen.svg?react";
import Battery from "../../assets/services/battery.svg?react";
import Board from "../../assets/services/board.svg?react";
import Headphone from "../../assets/services/headphone.svg?react";

const Services = () => {
  const services = [
    {
      title: "Troca de Tela",
      description: "Substituímos telas quebradas com rapidez e qualidade.",
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
        "Capinhas, películas, carregadores e mais!<br>Tudo no mesmo lugar.",
      icon: Headphone,
    },
  ];
  return (
    <div>
      <h1 className="text-white font-inter text-5xl font-black tracking-[-1.68px] md:text-6xl md:text-left lg:text-7xl">
        Serviços
      </h1>

      <div className="">
        {services.map((service, index) => {
          <CardService
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />;
        })}
      </div>
    </div>
  );
};

export default Services;

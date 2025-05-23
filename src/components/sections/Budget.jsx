import Button from "../common/Button";
import { useState } from "react";
import Whatsapp from "../../assets/whatsapp.svg?react";

const Budget = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [problem, setProblem] = useState("");
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    if (!name || !model || !problem) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setError("");

    const mensagem = `Olá, meu nome é ${name}, tenho um ${model}. ${problem}. Gostaria de solicitar um orçamento, por favor!`;
    const whatsappLink = `https://wa.me/556136264247?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <h1 className="text-white text-center font-inter text-5xl font-black tracking-[-1.68px] mt-24 md:text-6xl md:tracking-[-2.4px] lg:text-7xl lg:tracking-[-2.88px]">
        Quero um Orçamento
      </h1>

      <div className="mt-12 flex justify-center items-center">
        <form className="space-y-8 w-full max-w-md flex flex-col justify-center items-center">
          <div className="relative">
            <label>
              <span className="absolute left-3 -top-3 bg-[#151414] px-2 text-white font-inter text-lg md:text-xl">
                Nome:
              </span>
              <input
                type="text"
                name="name"
                className="w-[333px] h-[45px] rounded-[15px] border-2 border-[#FFFFFF80] border-opacity-50 bg-transparent text-[#FFFFFF80] px-4 pt-2 pb-2 text-lg font-inter focus:outline-none focus:border-opacity-100 focus:border-white transition-all duration-200 md:w-[584px] md:h-[60px] lg:w-[635px]"
                placeholder="Digite seu nome..."
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="relative">
            <label>
              <span className="absolute left-3 -top-3 bg-[#151414] px-2 text-white font-inter text-lg md:text-xl">
                Modelo do seu celular:
              </span>
              <input
                type="text"
                name="model"
                className="w-[333px] h-[45px] rounded-[15px] border-2 border-[#FFFFFF80] border-opacity-50 bg-transparent text-[#FFFFFF80] px-4 pt-2 pb-2 text-lg font-inter focus:outline-none focus:border-opacity-100 focus:border-white transition-all duration-200 md:w-[584px] md:h-[60px] lg:w-[635px]"
                placeholder="iPhone 13, Galaxy S21..."
                onChange={(e) => setModel(e.target.value)}
              />
            </label>
          </div>

          <div className="relative">
            <label>
              <span className="absolute left-3 -top-3 bg-[#151414] px-2 text-white font-inter text-lg md:text-xl">
                O que aconteceu?
              </span>
              <textarea
                name="problem"
                rows={4}
                className="w-[333px] h-[119px] rounded-[15px] border-2 border-[#FFFFFF80] border-opacity-50 bg-transparent text-[#FFFFFF80] px-4 pt-4 pb-2 text-lg font-inter focus:outline-none focus:border-opacity-100 focus:border-white transition-all duration-200 resize-none md:w-[584px] md:h-[145px] lg:w-[635px]"
                placeholder="Quebrei a tela..."
                onChange={(e) => setProblem(e.target.value)}
              />
            </label>
          </div>

          {error && <p className="text-red-500 text-sm font-inter ">{error}</p>}

          <Button
            icon={Whatsapp}
            text={"Solicitar Orçamento"}
            variant="primary"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Budget;

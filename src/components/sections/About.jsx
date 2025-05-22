const About = () => {
  return (
    <div className="flex flex-col gap-[24px] items-center justify-center w-full max-w-[1290px] mx-auto px-4 md:px-20 md:items-start lg:px-0">
      <h1 className="text-white font-inter text-5xl font-black tracking-[-1.68px] md:text-6xl md:text-left lg:text-7xl">
        Sobre Nós
      </h1>
      <p className="opacity-[0.5] text-white max-w-[333px] md:max-w-[684px] lg:max-w-[1290px] text-center font-inter text-[16px] tracking-[-0.64px] md:text-left lg:text-2xl">
        Há mais de 20 anos no mercado, a{" "}
        <span className="text-[#02ED6D] font-bold opacity-100">
          Reicell Celular
        </span>{" "}
        é referência em assistência técnica de celulares na região. Com um
        compromisso sólido com a qualidade e a satisfação dos clientes,
        oferecemos serviços como troca de telas, reparos de placa, limpeza
        interna, além da venda de acessórios como capinhas, películas,
        carregadores e muito mais. Nossa história é feita de confiança,
        dedicação e milhares de aparelhos restaurados com excelência.
      </p>
    </div>
  );
};

export default About;

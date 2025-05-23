import { useState } from "react";
import Collapsible from "../common/Collapsible";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quanto tempo leva um conserto?",
      answer:
        "Depende do problema, mas muitos reparos, como troca de tela ou bateria, são feitos no mesmo dia. Assim que recebermos seu aparelho, faremos uma análise e informamos o prazo exato.",
    },
    {
      question: "Oferecem garantia nos serviços?",
      answer:
        "Oferecemos garantia de 90 dias, exceto nos casos em que o cliente optar por peças do tipo genérica, que são mais acessíveis mas não acompanham garantia.",
    },
    {
      question: "Trabalham só com celulares?",
      answer:
        "Nosso foco principal é a assistência técnica para celulares, mas dependendo do caso, também realizamos serviços em outros equipamentos eletrônicos, como notebooks e computadores. Se estiver com algum problema em outro dispositivo, entre em contato com a gente pelo WhatsApp para avaliarmos a possibilidade do reparo.",
    },
    {
      question: "Onde nos encontrar?",
      answer: (
        <>
          <p className="opacity-50">
            Temos duas unidades para melhor atender você!
            <br />
            Loja 1: Quadra 49 lote 20 Centro, Santo Antônio do Descoberto - GO
            <br />
            Loja 2: Quadra 64 lote 12 Centro, Santo Antônio do Descoberto - GO
            <br />
            Veja os mapas abaixo para chegar até nós facilmente.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d959.0781221148691!2d-48.264454330355264!3d-15.945049499044796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDU2JzQyLjIiUyA0OMKwMTUnNDkuNyJX!5e0!3m2!1sen!2sbr!4v1747960291392!5m2!1sen!2sbr"
                className="w-full h-[250px] md:h-[350px] rounded-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d959.0684752538834!2d-48.266121930355226!3d-15.94706649904468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDU2JzQ5LjQiUyA0OMKwMTUnNTUuNyJX!5e0!3m2!1sen!2sbr!4v1747960355978!5m2!1sen!2sbr"
                className="w-full h-[250px] md:h-[350px] rounded-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </>
      ),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-[#151414] mt-24 py-10 px-4 md:px-8 lg:px-20">
      <h2 className="text-white font-inter text-5xl font-black mb-14 text-center md:text-6xl lg:text-7xl">
        Perguntas Frequentes
      </h2>
      {faqs.map((item, index) => (
        <Collapsible
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </section>
  );
};

export default FAQ;

import { useState, useEffect } from "react";
import CardProduct from "../common/CardProduct";
import Dropdown from "../../assets/dropdown.svg?react";

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const products = [
    {
      imgSrc: "/products/pelicula.webp",
      imgSize: "w-[189px] h-[189px]",
      title: "Películas de vidro",
      description:
        "Proteção de tela com películas diversas: fosca, 3D, privacidade e mais.",
    },
    {
      imgSrc: "/products/capa.jfif",
      imgSize: "w-[263px] h-[263px]",
      title: "Capinhas",
      description:
        "Estilo e proteção com capinhas em silicone, cases, SPACES, anti-impacto etc.",
    },
    {
      imgSrc: "/products/charger.jpg",
      imgSize: "w-[167px] h-[169px]",
      title: "Carregadores",
      description:
        "Carregadores rápidos, portáteis, por indução e muito mais modelos práticos.",
    },
    {
      imgSrc: "/products/fone.webp",
      imgSize: "w-[180px] h-[180px]",
      title: "Fones",
      description:
        "Fones com fio, bluetooth, intra-auriculares e opções para todos os gostos.",
    },
  ];

  return (
    <div className="flex flex-col gap-12 items-center justify-center w-full max-w-[1290px] mx-auto px-4 md:px-20 md:items-start lg:px-0 mt-28">
      <h1 className="text-white font-inter text-5xl text-center font-black tracking-[-1.68px] md:text-6xl md:text-left lg:text-7xl">
        Produtos em Destaque
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full">
        {products.map((product, index) => {
          const isVisible = !isMobile || index < 2 || (isMobile && showAll);

          return (
            <div
              key={index}
              className={`flex justify-center w-full transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 max-h-[1000px]"
                  : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
              }`}
            >
              <CardProduct
                imgSrc={product.imgSrc}
                imgSize={product.imgSize}
                title={product.title}
                description={product.description}
              />
            </div>
          );
        })}
        {isMobile && (
          <button
            className="text-white text-xl font-inter flex flex-row justify-center items-center transition-all duration-300 ease-out hover:scale-105"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Mostrar menos" : "Mostrar mais"}
            <Dropdown
              className={`transition-transform duration-300 ease-out ${
                showAll ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;

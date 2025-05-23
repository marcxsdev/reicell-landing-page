import Button from "../common/Button";

const ScrollToTopButton = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Button
          text="Voltar ao Topo"
          variant="backToTop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        <p className="flex justify-center items-center text-white font-inter text-[14px] font-medium md:text-lg lg:text-xl mt-14 pb-4">
          © 2025 • Reicell Celular
        </p>
      </div>
    </>
  );
};

export default ScrollToTopButton;

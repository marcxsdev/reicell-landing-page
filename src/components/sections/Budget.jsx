import Button from "../common/Button";
import { useState } from "react";

const Budget = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [problem, setProblem] = useState();

  return (
    <div>
      <h1 className="text-white text-center font-inter text-5xl font-black tracking-[-1.68px]">
        Quero um Orçamento
      </h1>

      <div className="">
        <form>
          <div className="">
            <label>
              <span className="text-white opacity-[0.5]">Nome:</span>
              <input type="text" name="name" />
            </label>
          </div>
          <div className="">
            <label>
              <span>Modelo do seu celular:</span>
              <input type="text" name="model" />
            </label>
          </div>
          <div className="">
            <label>
              <span>Problema:</span>
              <textarea name="model"></textarea>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Budget;

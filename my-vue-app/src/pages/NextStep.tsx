import { Buttonn } from "../components/Button/Button";
import { BiSolidCircle } from "react-icons/bi";
import "../styles/StepPages.css";

export const NextStep = () => {
  return (
    <>
      <div className="content">
        <div className="title">
          <h1> Próximos passos! </h1>
        </div>
        <div className="txt2">
          <p>
            Após registrar o seu veículo, você terá total autonomia para acionar
            o sinistro quando desejar.
          </p>
          <p>
            É simples: clique no botão <span className="c1">"Acionar Sinistro"</span> e compartilhe a sua
            localização. Imediatamente, nossa equipe estará pronta para atender
            você.
          </p>
        </div>
        <div className="circles">
          <BiSolidCircle className="circle" id="circle1"></BiSolidCircle>
          <BiSolidCircle className="circle" id="circle2"></BiSolidCircle>
          <span className="c1"><BiSolidCircle className="circle" id="circle3"></BiSolidCircle></span>
          <BiSolidCircle className="circle" id="circle4"></BiSolidCircle>
        </div>
        <div className="buttons">
          <Buttonn id="red-button"> Voltar </Buttonn>
          <Buttonn> Próximo </Buttonn>
        </div>
      </div>
    </>
  );
};

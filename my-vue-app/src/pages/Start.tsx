import { Buttonn } from "../components/Button/Button";
import { BiSolidCircle } from "react-icons/bi";
import "../styles/StepPages.css";

export const Start = () => {
  return (
    <>
      <div className="content content-blue">
        <div className="title">
          <h1> <span className="c1"> Vamos iniciar! </span> </h1>
        </div>
        <div className="txt1">
          <p> <span className="c3">Primeiros passos</span> </p>
        </div>
        <div className="txt2">
          <p>
            <span className="c6">
                Para registrar o seu veículo, é possível acessar a página designada
                para o <span className="c1">Cadastro do veículo</span>, onde você terá a oportunidade de inserir
                todas as informações pertinentes e detalhadas sobre o seu automóvel.
            </span>
          </p>
        </div>
        <div className="circles circles-blue">
          <BiSolidCircle className="circle" id="circle1"></BiSolidCircle>
          <span className="c1"><BiSolidCircle className="circle" id="circle2"></BiSolidCircle></span>
          <BiSolidCircle className="circle" id="circle3"></BiSolidCircle>
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

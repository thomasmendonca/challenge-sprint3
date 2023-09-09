import { Buttonn } from "../components/Button/Button";
import { BiSolidCircle } from "react-icons/bi";
import Rocket from "../images/VectorRocket.png";
import "../styles/StepPages.css";

export const Ready = () => {
  return (
    <>
      <div className="content content-blue">
        <div className="title">
          <h1>
            <span className="c1"> Tudo pronto! </span>
          </h1>
        </div>
        <div className="txt1">
          <p>
            <span className="c6">
              Além disso, oferecemos um chat para um atendimento personalizado e
              ágil. Estamos aqui para ajudar!
            </span>
          </p>
        </div>
        <div className="img-rocket">
          <img src={Rocket} alt="Ícone de chat rápido" />
        </div>
        <div className="circles circles-blue">
          <BiSolidCircle className="circle" id="circle1"></BiSolidCircle>
          <BiSolidCircle className="circle" id="circle2"></BiSolidCircle>
          <BiSolidCircle className="circle" id="circle3"></BiSolidCircle>
          <span className="c1">
            <BiSolidCircle className="circle" id="circle4"></BiSolidCircle>
          </span>
        </div>
        <div className="buttons">
          <Buttonn id="red-button"> Voltar </Buttonn>
          <Buttonn> Concluir </Buttonn>
        </div>
      </div>
    </>
  );
};

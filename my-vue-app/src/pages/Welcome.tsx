import { Buttonn } from "../components/Button/Button";
import Guincho from "../images/guincho.png";
import { BiSolidCircle } from "react-icons/bi";
import "../styles/StepPages.css";

export const Welcome = () => {
  return (
    <>
      <div className="content">
        <div className="title">
          <h1>
            {" "}
            Bem-vindo(a) à <span className="c1">Dev</span>
            <span className="c2">Solutions</span>
          </h1>
        </div>
        <div className="txt1">
          <p> Aqui buscamos a melhor solução para o seu atendimento! </p>
        </div>
        <div className="txt2">
          <p>
            {" "}
            Nós facilitamos o seu processo de atendimento, escolhendo o melhor
            modal para o seu veículo!{" "}
          </p>
        </div>
        <div className="img">
          <img src={Guincho} alt="Imagem de guincho" />
        </div>
        <div className="circles">
          <span className="c1"><BiSolidCircle className="circle" id="circle1"></BiSolidCircle></span>
          <BiSolidCircle className="circle" id="circle2"></BiSolidCircle>
          <BiSolidCircle className="circle" id="circle3"></BiSolidCircle>
          <BiSolidCircle className="circle" id="circle4"></BiSolidCircle>
        </div>
        <div className="buttons">
          <Buttonn id="start-button"> Começar </Buttonn>
        </div>
      </div>
    </>
  );
};

import { Buttonn } from "../components/Button/Button";
import Tick from "../images/Vector (1).png";
import "../styles/StepPages.css";

export const Finish = () => {
  return (
    <>
      <div className="content content-blue">
        <div className="title">
          <h1>Tudo certo!</h1>
          <img src={Tick} alt="" />
        </div>
        <div className="txt1">
          <p>
            <span className="c6">
              Estamos encaminhando seus dados para o nosso atendente virtual,
              que irá entrar em contato para obter mais informações sobre o
              ocorrido e oferecer a melhor assistência possível.
            </span>
          </p>
        </div>
        <div className="buttons">
          <Buttonn> Continuar </Buttonn>
        </div>
      </div>
    </>
  );
};

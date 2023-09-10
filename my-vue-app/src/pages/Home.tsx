import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Buttonn } from "../components/Button/Button";
import Logo from "../images/img-logo-ds.png";
import CarCrash from "../images/car-crash-vector.png";

import "../styles/Home.css";

export const Home = () => {
  return (
    <>
      <div className="home-content">
        <Header />
        <section>
          <div className="home-title">
            <img src={Logo} alt="Logo DevSolutions" />
            <h1> Bem-vindo(a), Usuário(a)! </h1>
          </div>
          <div className="options">
            <div className="newVehicle">
              <h2>Novo veículo</h2>
              <p>
                Para cadastrar um novo veículo, basta clicar no botão abaixo:
              </p>
              <Buttonn> Cadastrar Veículo </Buttonn>
            </div>
            <div className="callWarranty">
              <h2>Em caso de acidentes ou problemas mecânicos.</h2>
              <p>
                Para acionar o sinistro, basta dar um clique no botão abaixo:
              </p>
              <div className="btn-img">
                <Buttonn> Acionar Sinistro </Buttonn>
                <img src={CarCrash} alt="Acidente de carro" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

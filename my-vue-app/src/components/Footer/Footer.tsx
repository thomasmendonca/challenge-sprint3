import "./Footer.css";
import Logo from "../../images/img-logo-pb.png";
import Whatsapp from "../../images/whatsapp.png";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";

export const Footer = () => {
  return (
    <footer>
      <div className="title">
        <img src={Logo} alt="Logo DevSolutions" />
        <h3>DevSolutions</h3>
      </div>
      <div className="links">
        <nav>
          <ul>
            <li>Quem Somos</li>
            <li>
              <img src={Whatsapp} alt="" />
              Whatsapp
            </li>
            <li>Chat On-line</li>
            <li>E-mail</li>
            <li>Perguntas Frequentes</li>
            <li>Política de Privacidade</li>
          </ul>
        </nav>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/porto/" target="_blank">
          <img src={Instagram} alt="Logo Instagram" />
        </a>
        <a href="https://www.facebook.com/porto?locale=pt_BR" target="_blank">
          <img src={Facebook} alt="Logo Facebook" />
        </a>
      </div>
    </footer>
  );
};

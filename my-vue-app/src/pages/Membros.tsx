import { Card } from "../components/Card/Card"
import '../styles/Membros.css'

import Thomas from "../images/thomas.png"
import Gabriel from "../images/gabriel.png"
import Kaue from "../images/kaue.png"
import MDantas from "../images/mdantas.png"
import MLopes from "../images/mlopes.png"

export const Membros = () => {
    const members = [
        {id:1, img:Thomas, title:"Desenvolvedor Front End", name:"Thomas Nícolas de Melo Mendonça", rm:99832},
        {id:2, img:MLopes, title:"Desenvolvedor Front End", name:"Matheus Giusto Lopes", rm:99969},
        {id:3, img:Gabriel, title:"Desenvolvedor Back End", name:"Gabriel Augusto Fernandes", rm:98986},
        {id:5, img:Kaue, title:"Desenvolvedor Chatbot", name:"Kauê Fernades Braz", rm:97768},
        {id:4, img:MDantas, title:"Desenvolvedor DataBase", name:"Matheus Dantas de Sousa", rm:98406},
    ]

    return(
        <>
            <div className="title">
                <h1>Criadores</h1>
            </div>
            <div className="mcard-container">
                {members.map((member) => (
                    <div className="mcard">
                        <Card key={member.id}>
                            <div className="image">
                                <img src={member.img} alt={member.name} className="member-picture"/>
                            </div>
                            <div className="info">
                                <div className="member-title">
                                    <h3>{member.title}</h3>
                                </div> 
                                <div className="member-info">
                                    <p>{member.name}</p>
                                    <p>RM: {member.rm}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="back-button">
                <button type="button">Voltar</button>
            </div>
        </>
    )
}
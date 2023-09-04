import { MemberCard } from "../components/MemberCard/MemberCard"
import '../components/MemberCard/MemberCard.css'

export const Membros = () => {
    const members = [
        {id:1, title:"Desenvolvedor Front End", name:"Thomas Nícolas de Melo Mendonça", rm:99832},
        {id:2, title:"Desenvolvedor Front End", name:"Matheus Giusto Lopes", rm:99969},
        {id:3, title:"Desenvolvedor Back End", name:"Gabriel Augusto Fernandes", rm:98986},
        {id:5, title:"Desenvolvedor Chatbot", name:"Kauê Fernades Braz", rm:97768},
        {id:4, title:"Desenvolvedor DataBase", name:"Matheus Dantas de Sousa", rm:98406},
    ]

    return(
        <div>
            <div className="title">
                <h1>Criadores</h1>
            </div>
            <div className="mcard-container">
                {members.map((member) => (
                    <MemberCard key={member.id}>
                        <h3>{member.title}</h3>
                        <div className="image"></div>
                        <div className="info">
                            <p>{member.name}</p>
                            <p>RM: {member.rm}</p>
                        </div>
                    </MemberCard>
                ))}
            </div>
            <div className="back-button">
                <button type="button">Voltar</button>
            </div>
        </div>
    )
}
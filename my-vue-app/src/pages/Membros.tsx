import { MemberCard } from "../components/MemberCard"

export const Membros = () => {
    const members = [
        {id:1, img:"../images/teste.jpg", title:"Desenvolvedor Front End", name:"Thomas Nícolas de Melo Mendonça", rm:99832},
        {id:2, img:"#", title:"Desenvolvedor Front End", name:"Matheus Giusto Lopes", rm:99969},
        {id:3, img:"#", title:"Desenvolvedor Back End", name:"Gabriel Augusto Fernandes", rm:98986},
        {id:4, img:"#", title:"Desenvolvedor DataBase", name:"Matheus Dantas de Sousa", rm:98406},
        {id:5, img:"#", title:"Desenvolvedor Chatbot", name:"Kauê Fernades Braz", rm:97768},
    ]

    return(
        <div className="container">
            <h1>Criadores</h1>
            {members.map((member) => (
                <MemberCard key={member.id}>
                    <div><img src="./images/teste.jpg" alt="" /></div>
                    <h3>{member.title}</h3>
                    <p>{member.name}</p>
                    <p>{member.rm}</p>
                </MemberCard>
            ))}
        </div>
    )
}
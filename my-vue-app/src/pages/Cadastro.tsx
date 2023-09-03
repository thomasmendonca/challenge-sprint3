export default function Cadastro() {
    return (
        <div>
            <header>
                <div>
                    <h1>DevSolutions</h1>
                </div>
            </header>
            <section>
                <div>
                    <h2>Criar conta</h2>
                    <p>Preencha seus dados para criar sua conta</p>
                </div>
                <div>
                    <input type="text" name="" id="cpf" placeholder="Digite seu CPF" />
                </div>
                <div>
                    <input type="text" name="" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div>
                    <fieldset>
                        <legend>Gênero: </legend>
                        <button type="button"> Feminino </button>
                        <button type="button"> Maculino </button>
                        <button type="button"> Outro </button>
                    </fieldset>
                </div>
                <div>
                    <input type="text" name="" id="tel" placeholder="Digite seu telefone" />
                </div>
                <div>
                    <input type="password" name="" id="pwd" placeholder="Crie sua nova senha" />
                </div>
                <div>
                    <input type="password" name="" id="pwdConfirm" placeholder="Confirme sua nova senha" />
                </div>
                <div>
                    <button type="button"> Criar conta </button>
                </div>
            </section>
            <footer>
                
            </footer>
        </div>
    )
}
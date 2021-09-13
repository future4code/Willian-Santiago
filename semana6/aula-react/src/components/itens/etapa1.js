const Primeiro = () => {
    return(
        <div>
        <h1>Etapa1 - Dados Gerais</h1>
        <h2>Qual seu nome?</h2>
        <input placeholder="Nome"/>

        <h2>Qual sua idade?</h2>
        <input placeholder="Idade"/>

        <h2>Qual seu e-mail?</h2>
        <input placeholder="E-mail"/>

        <h2>Qual sua escolaridade?</h2>
        <input placeholder="Escolaridade"/>

   

        <p><label for="escolaridade">Escolha sua escolaridade:</label></p>

        <select name="escolaridade" id="escolaridade">
        <option value="ensino-medio">Ensino médio completo</option>
        <option value="medio-incompleto">Ensino médio incompleto</option>
        <option value="ensino-superior">Ensino superior completo</option>
        <option value="superior-incompleto">Ensino superior incompleto</option>
        </select>

        

        </div>
    )
}

export default Primeiro;
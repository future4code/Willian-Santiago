
const Terceiro = ()=>{
    return(
        <div>
            <h1>Informações Gerais de Ensino</h1>
            <h2>Por que você não terminou umm curso de graduação?</h2>
            <input placeholder="Fale o por que" />

            <h2>Você fez algum curso complementar?</h2>
            <p><label for="escolaridade">Escolha sua escolaridade:</label></p>

        <select name="cursos" id="cursos">
        <option value="none">Nenhum</option>
        <option value="tecnico">Curso tecnico</option>
        <option value="curso-ingles">Curso de inglês</option>
        
        </select>

        </div>
    )
}

export default Terceiro;
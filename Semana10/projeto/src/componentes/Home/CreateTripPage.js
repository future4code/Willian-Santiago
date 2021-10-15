
import React from "react"
import axios from "axios"
import useForm from "../Hooks/hooks"
import { useHistory } from "react-router"
import { MenuBotoes, Formulario } from "./styled"


const CreateTripsPage = () => {

    const {form, onChange, cleanFields} = useForm({
        name: "",
        planet: "",
        data: "",
        description: "",
        durationInDays: ""

    })

    const cadastrarNovasViagens = (e) => {
        e.preventDefault()
        cleanFields()

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Willian-TurmaMaryam/trips"


        axios.post(url, form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            alert("Viagem criada", res.data.trips)

        })
        .catch((erro) => {

        })
    }

    const history = useHistory()
    const voltarPainel = () => {
        history.push("/login")
    }
    // const criarViagens = () => {
    //     history.push("")
    // }

    return (
        <div>
            <MenuBotoes>
            <button onClick={voltarPainel}>Voltar</button>
            <button>Criar viagens</button>
            </MenuBotoes>
            <h1>Formulário para criar novas viagens</h1>

            <Formulario onSubmit={cadastrarNovasViagens}>
                <input name={"name"} 
                value={form.name} 
                onChange={onChange}
                placeholder="Nome"
                required/>

                <input name={"planet"} value={form.planet} 
                onChange={onChange}
                placeholder="Planeta"
                required/>

                <input name={"date"} value={form.date} 
                onChange={onChange}
                placeholder="Data"
                required/>

                <input name={"description"} value={form.description} 
                onChange={onChange}
                placeholder="Descrição"
                required/>
                
                <input name={"durationInDays"} value={form.durationInDays} 
                onChange={onChange}
                placeholder="Duração"
                required/>

                <button>Cadastrar</button>
            </Formulario>

        </div>
    )
}
export default CreateTripsPage
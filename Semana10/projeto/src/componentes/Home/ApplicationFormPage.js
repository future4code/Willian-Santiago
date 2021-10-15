
import React, {useState, useEffect} from "react"
import axios from "axios"
import useForm from "../Hooks/hooks"
import { useHistory } from "react-router"
import { MenuBotoes, Formulario } from "./styled"




const ApplicationFormPage = () => {
    
    const {form, onChange, cleanFields} = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        trips: ""
    })

    const [trips, setTrips] = useState([])

    const formularioCadastro = (e) => {
        e.preventDefault()
        cleanFields()
        formularioViagens()
    }




    const history = useHistory()
    const voltarHome = () => {
        history.push("/")
    }
    // const enviarFormulario = () => {
    //     history.push("")
    // }
    
    
        useEffect (() => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Willian-TurmaMaryam/trips"
            axios.get (url)
            .then((res) =>{
              setTrips(res.data.trips)
              console.log(res.data.trips)
            })
            .catch((erro) =>{
                  console.log(erro)
                  alert (`Algum erro aconteceu ${erro}`)
                })
        
          }, [])

          const formularioViagens = () =>{
            const body ={
              name: form.name,
              age: form.age,
              profession: form.profession,
              country: form.country,
              applicationText: form.applicationText,
            } 
      
          axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips/${form.trip}/apply`, body)
              
          .then((res) =>{
            console.log("sucesso")
          })
          .catch((err) =>{
              console.log(err)
          })
      
        };


         const listaFormularioMapeada = trips.map((trip) => {
            return  <option>{trip.name}</option>
            
                   
          })

    return (
        <div>

            <MenuBotoes>
           
           <button onClick={voltarHome}>Voltar</button>

            <Formulario onSubmit={formularioCadastro}>
            <h1>Formulário</h1>
            <select>{listaFormularioMapeada}</select>

            <input name={"name"} 
            type={"name"} 
            value={form.name} 
            onChange={onChange} 
            placeholder="Nome" 
            required 
            />

            <input name={"age"} 
            type={"number"} 
            value={form.age} 
            onChange={onChange} 
            placeholder="Idade" 
            required
            />

            <input name={"applicationText"} 
            value={form.applicationText} 
            onChange={onChange} 
            placeholder="Texto" 
            required 
            pattern={"^.{10,}"}
            title={"O texto deve ter no minimo 10 letras"}/>

            <input name={"profession"} 
            value={form.profession} 
            onChange={onChange} 
            placeholder="Profissão" 
            required/>

            <label for="country">País que você vive</label>
                <p
                >
                <select
                name={"country"}
                value={form.country}
                onChange={onChange}
                type="select"
                required
                >
                <option value="Choose">Escolha o país</option> 
                <option value="Brasil">Brasil</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="França">França</option>
                <option value="Mexico">Mexico</option>
                <option value="China">China</option>
                </select></p>
                

            <button>Enviar</button>
            
            </Formulario>
            </MenuBotoes>

        </div>
    )
}
export default ApplicationFormPage
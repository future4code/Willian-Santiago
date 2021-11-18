import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import useForm from "../Hooks/Hooks"
import { StyledContainer } from "./styled"
import { BASE_URL } from "../url/url"
import axios from "axios"

const ApplicationPage = () => {

    const [form, onChange, clear] = useForm({
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: "Brasil",
            trip: null
    })
    const [trips, setTrips] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)

    const body = {

            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: "Brasil"

    }
    axios.post(`${BASE_URL}/Willian-TurmaMaryam/trips/${form.trip.id}/apply`, body)
    .then((res) => {
        console.log(res)
    })
    .catch((erro) => {

    })
    }

    useEffect(() => {
     axios.get(`${BASE_URL}/Willian-TurmaMaryam/trips`, form)
    .then((res) => {
    
     
     setTrips(res.data.trips)

     })
    .catch((erro) => {
        
    })
    }, [])



    return(
        <StyledContainer>
            Candidata-se
            <form onSubmit={onSubmit}>
                <TextField
                name={"name"}
                type={"name"}
                value={form.name}
                onChange={onChange}
                placeholder={"Nome"}

                />
                <TextField
                name={"age"}
                type={"number"}
                value={form.age}
                onChange={onChange}
                placeholder={"Idade"}

                />

                <TextField
                name={"applicationText"}
                type={"text"}
                value={form.applicationText}
                onChange={onChange}
                placeholder={"Texto de candaditura"}

                />

                <TextField
                name={"profession"}
                type={"name"}
                value={form.profession}
                onChange={onChange}
                placeholder={"Profissão"}

                />
                
                
                
                <InputLabel>Países</InputLabel>
                <Select
                name={"coutry"}
                value={form.country}
                onChange={onChange}
                >
                
                <MenuItem value={"Brasil"}>Brasil</MenuItem>
                </Select>
                

                <FormControl>
                <InputLabel>Viagens</InputLabel>
                <Select
                name={"trip"}
                value={form.trip}
                onChange={onChange}
                >
                
                
                {trips.map((trip) => {
                    return <MenuItem value={trip}>{trip.name}</MenuItem>
                })}
                </Select>
                </FormControl>
                <Button type={"submit"}>Enviar</Button>

            </form>

        </StyledContainer>
    )
}
export default ApplicationPage
import { TextField, Typography, Button } from "@material-ui/core"
import React from "react"
import useForm from "../Hooks/Hooks"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../url/url"

const LoginPage = () => {
  const navigate = useNavigate()
  const goToListPage = () => {
    navigate("/list")
  }

  const [form, onChange, clear] = useForm({
    email: "",
    password: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    login()
  }


  const login = () => {

    const axiosConfig = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    axios.post(`${BASE_URL}/:aluno/login`, form, axiosConfig)
    .then((res) => {
      console.log(res.data.token)
      goToListPage()

    })
    .catch((erro) => {

    })
  }


  return(
    <div>
      <Typography variant="h2">Login</Typography>
      <form onSubmit={onSubmit}>
        <TextField 
        name={"email"}
        type={"email"}
        placeholder={"Email"}
        value={form.email}
        onChange={onChange}
        />

        <TextField 
        name={"password"}
        type={"password"}
        placeholder={"Senha"}
        value={form.password}
        onChange={onChange}
        />

        <Button
        type={"submit"}
        variant={"contained"}
        color={"primary"}
        >Entrar</Button>
      </form>

    </div>
  )
}
export default LoginPage
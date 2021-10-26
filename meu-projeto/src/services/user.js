import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToRecipesList } from "../routes/cordinator"

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")

    }).catch((erro) => {
        alert(erro.response.data.message)

    })

}

export const signUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(history)
        setRightButtonText("Logout")
        console.log("Teste", body)

    })
    .catch((erro) => {
        alert(erro.response.data.message)

    })

}
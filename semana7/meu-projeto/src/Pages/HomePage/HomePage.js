import React from "react"
import { useNavigate } from "react-router"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

const Home = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/login")
  }

  const goToApplication = () => {
    navigate("/cadastrar")
  }

  return(
    <div>
      <Typography variant="h2">Viage Conosco</Typography>
      <Button 
      onClick={goToLogin}
      margin={"normal"}
      variant={"contained"}
      color={"primary"}
      >Área do administrador</Button>

      <Button 
      onClick={goToApplication}
      variant={"contained"}
      color={"primary"}
      margin={"normal"}
      >Candidate-se</Button>

    </div>
  )
}
export default Home
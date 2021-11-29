import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StyledToolbarra } from "./styled"
import { goToRecipesList, goToLogin } from "../../routes/cordinator"

import { useHistory } from "react-router-dom"

const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
    
    const logout = () => {
      localStorage.removeItem("token")
    }
    const rightButtonAction = () => {
      if(token){
        logout()  
        setRightButtonText("Login")
        goToLogin(history)
      }else{
        goToLogin(history)
      }
    }
  return (
    
      <AppBar position="static">
        <StyledToolbarra>

        <Typography variant="h6" >
            Teste
            <Button onClick={()=> goToRecipesList(history)} color="inherit">Inicio</Button>
          </Typography>

        <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbarra>
      </AppBar>
    
  );
}
export default Header
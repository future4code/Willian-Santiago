import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StyledToolbarra } from "./styled"
import { goToRecipesList, goToLogin } from "../../routes/cordinator"

import { useHistory } from "react-router-dom"

const Header = () => {
    const history = useHistory()
  return (
    
      <AppBar position="static">
        <StyledToolbarra>

        <Typography variant="h6" >
            Teste
            <Button onClick={()=> goToRecipesList(history)} color="inherit">Inicio</Button>
          </Typography>

        <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolbarra>
      </AppBar>
    
  );
}
export default Header
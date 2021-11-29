import { Typography, Button, ListItem, List, ListItemText, ListItemLink, Link } from "@material-ui/core"
import React from "react"
import { useNavigate } from "react-router"

const TripListPage = () => {
  const navigate = useNavigate()

  const goToCreateTripPage = () => {
    navigate("/criar")
  }
  return(
    <div>
      <Typography variant="h2">
        Lista de viagens
        </Typography>

        <Button
        onClick={goToCreateTripPage}
        variant={"contained"}
        color={"primary"}
        >Criar viagem</Button>

        
        <List component="nav" aria-label="secodary mailbox folders">
        <Link to={"/detalhes/viagens"}>
          <ListItem button>
            <ListItemText primary="Viagem para Marte" />
          </ListItem>
          </Link>

          <Link to={"/detalhes/viagens"}>
          <ListItem button>
            <ListItemText primary="Viagem para a Lua" />
          </ListItem>
          </Link>
        </List>
        

    </div>
  )
}
export default TripListPage
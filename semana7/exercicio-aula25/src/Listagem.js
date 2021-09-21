import axios from "axios"
import React from "react"


const headers = {
    headers: {
        Authorization: "Willian-Turma-da-Maryam"
    }
}

      
      export default class App extends React.Component {
      
         state = {
          usuarios: [],
          listName: "",
          listEmail: ""
        };
      
        componentDidMount() {
          this.getAllUsers();
        }
      
        componentDidMount() {
          this.getAllUsers();
        }
      
        handleListName = (e) => {
          this.setState({ listName: e.target.value });
      
        };
        handleListEmail = (e) => {
          this.setState({ listEmail: e.target.value });
        };
        createUsers = () => {
          const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
          const body = {
             name: this.state.listName,
             email: this.state.listEmail
          }
          
          axios.post(url, body, headers)
          .then((res) => {
            this.setState({ listName: "" });
            this.setState({ listEmail: "" });
            this.getAllUsers();
      
          })
          .catch((erro) => {
            
      
          })
      }
      
        getAllUsers= () => {
          const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
          axios.get(url, headers)
          .then((res) => {
            console.log(res)
            this.setState({ usuarios: res.data.result.list });
      
          })
          .catch((erro) => {
            console.log(erro)
      
          })
        }
   

  render() {
    
    return (
      
      <div>
          <h1>Teste</h1>
      
      </div>  
    );
   
  }

}


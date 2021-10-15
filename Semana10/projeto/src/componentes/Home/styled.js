import react from "react"
import styled from "styled-components"

export const EstiloGlobal = styled.div`
    margin: 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        text-align: center;
    }
    
`;
export const MenuBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;

button{
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: skyblue;
    margin: 20px;
}
`;

export const EstiloListas = styled.div`
    display: flex;
    border: 2px solid #CCC;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    text-align: center;
    width: 100vh;
`;

export const Formulario = styled.form`
    display: flex;
    width: 100vh;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
 input{
     padding: 20px;
     margin: 10px;
     border: 2px solid #CCC;
     border-radius: 10px;
 }
`;

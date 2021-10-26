
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Router from "./routes/Router"
import theme from "./constants/theme"
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header"
import { useState } from 'react';


function App() {

  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
     
    </ThemeProvider>
  );
}

export default App;

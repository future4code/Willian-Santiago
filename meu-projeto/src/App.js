
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Router from "./routes/Router"
import theme from "./constants/theme"



function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router />
     
    </ThemeProvider>
  );
}

export default App;

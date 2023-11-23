
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
  
      <BrowserRouter>
        <NavBar/>
        <Routes/>
      </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Company from "./Components/Pages/Company";
import Contato from "./Components/Pages/Contato";
import NewProject from "./Components/Pages/NewProject";

import Container from "./Components/layout/Container";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
            <Link to="/">Sobre</Link>
            <Link to="/company">Empresa</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/newproject">Novo Projeto</Link>
         </ul> 
          <Container customClass="minheight">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/company' element={<Company/>}/>
              <Route path='/contato' element={<Contato/>}/>
              <Route path='/newproject' element={<NewProject/>}/>
            </Routes>
          </Container>
          <p>Footer</p>
      </Router>
    </div>
  );
}


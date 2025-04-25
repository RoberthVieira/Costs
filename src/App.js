import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Company from "./Components/Pages/Company";
import Contato from "./Components/Pages/Contato";
import NewProject from "./Components/Pages/NewProject";


import Container from "./Components/layout/Container";
import NavBar from "./Components/layout/NavBar";
import Footer from "./Components/layout/Footer";
import Projects from "./Components/Pages/Projects";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Container customClass="minheight">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/company' element={<Company/>}/>
              <Route path='/contato' element={<Contato/>}/>
              <Route path='/newproject' element={<NewProject/>}/>
            </Routes>
          </Container>
      </Router>
      <Footer/>
    </div>
  );
}


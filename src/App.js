import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
         <ul>
          <li>Home</li>
          <li>Contato</li>
         </ul> 
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/company' element={<Company/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/newproject' element={<NewProject/>}/>
         </Routes>
      </Router>
    </div>
  );
}


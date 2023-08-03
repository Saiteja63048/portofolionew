import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/Projects' element={<Projects/>}></Route>
          <Route path='/Skills' element={<Skills/>}></Route> */}

        </Routes>
    </div>
  );
}

export default App;

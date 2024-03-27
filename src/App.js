// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/home"
import About from './components/about';
import Contact from './components/contact';
import './App.css';
import './nav.css'
// import Chal from './components/use';
import Nav from './components/nav';
function App() {
  return (
    <>
    <Router>
   <Nav />
   <Routes>
       <Route path='/Home' element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Contact" element={<Contact />} />
   </Routes>
    </Router>
    </>

  );
}

export default App;

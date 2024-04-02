// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup.js";
import Home from "./components/home"
import About from './components/about';
import Contact from './components/contact';
import Button from "./components/button";
import './App.css';
import './nav.css'
import Capital from "./components/capital";
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
<Button />
<div id="province"></div>
<Capital />
<div id="capi"></div>
<div className="main">

<div className="main-content">
  <div className="img-div">

                <img className="imgclass" src="FASTNUimage.jpg" alt="University" />
  </div>
             <div>

            <Signup />
             </div>
            </div>
           
</div>
    </>

  );
}

export default App;

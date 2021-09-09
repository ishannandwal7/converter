import React from 'react';
import "./Bootstrap.css";
import "./App.css";
import Navbar from './components/navbar';
import Main from './components/main';
import Cal from './components/center';
import Footer from './components/footer';
// import Home from './components/Home';
const App = () => {
  // console.log(Menu);
  return (
    <>
    <Navbar/>
    <Main/>
    <Cal/>
    <div className="container-fluid" id="foot">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,96L60,133.3C120,171,240,245,360,261.3C480,277,600,235,720,197.3C840,160,960,128,1080,101.3C1200,75,1320,53,1380,42.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <Footer/>
    </div>
    {/* <svg  id="foot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,165.3C384,171,480,117,576,85.3C672,53,768,43,864,48C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
   
    {/* <h1 className="container-fluid bg-dark text-light">ishan nandwal</h1> */}
    {/* <Home /> */}
    </>
  )
}

export default App

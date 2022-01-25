import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {HashRouter as Router, Navigate, Route, Routes} from "react-router-dom"
import Nav from "./Nav/Nav.js"
import Intro from "./Intro/IntroApp.js"
import TravelApp from "./TravelJournal/TravelApp";
import MemeApp from "./MemeGenerator/MemeApp";   
import MarkDownApp from "./MarkDownEditor/MarkDownApp";
import TenziesApp from "./Tenzies/TenziesApp";    
import TrivialApp from "./Trivial/TrivialApp"; 
import Code from "./Code/CodeApp";

/** Highlight js Code  **/
import 'highlight.js/styles/tomorrow-night-bright.css';

ReactDOM.render(
  <React.StrictMode>              
    <Router>
      <Nav/>   
      <Routes>              
        <Route path="*" element={<Navigate to="/Intro/IntroAppINTRO" />}/> {/* default to render INTRO */}
        <Route path="/Intro/IntroApp:APPNAME" element={<Intro />} />
        <Route path="/TravelJournal/TravelApp:APPNAME" element={<TravelApp />} />    
        <Route path="/MemeGenerator/MemeApp:APPNAME" element={<MemeApp />} />          
        <Route path="/MarkDownEditor/MarkDownApp:APPNAME" element={<MarkDownApp />} />  
        <Route path="/Tenzies/TenziesApp:APPNAME" element={<TenziesApp />} />
        <Route path="/Trivial/TrivialApp:APPNAME" element={<TrivialApp />} />
        <Route path="/Code/CodeApp:APPNAME" element={<Code />} />
      </Routes>         
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


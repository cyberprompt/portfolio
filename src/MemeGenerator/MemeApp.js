import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import './Meme.css';
import Header from "./components/Header";
import Meme from "./components/Meme";

import { showCode, hideCode } from "../Code/codeutils.js";
import Code from "../Code/CodeApp";

/** Highlight js Code  **/
import hljs from 'highlight.js';   

function App() {

   /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
   const routerparams = useParams(); 
   useEffect(()=> {	
    /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
    document.querySelector("html").setAttribute("id",routerparams.APPNAME);
    document.querySelector("body").classList = "";  // remove any previous classes added
    document.querySelector("body").classList.add(routerparams.APPNAME);
    document.title = `${routerparams.APPNAME} Demo App : 2022 Ed Murphy`;   // set a title for this app
    },[routerparams.APPNAME]);

    useEffect(()=>{
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
      });
    },[])      

    return (
      <div id="container">        
        <Header/>
        <Meme/>

        <div className="viewcodeicon" title="View Meme Generator Code" onClick={()=>showCode(routerparams.APPNAME)}>
                <img src="/img/viewcode-icon.png" alt="View Meme Generator Code"/> 
        </div> 
        <Code apptype={routerparams.APPNAME} appname="Meme Generator" hidecode={()=>hideCode(routerparams.APPNAME)}/>

      </div>
    );
  }
  
  export default App;


import { useState, useEffect } from "react";
import NavLink from "./NavLink.js"
import "./Nav.css"
import Code from "../Code/CodeApp";
import { showCode, hideCode } from "../Code/codeutils.js";
import hljs from 'highlight.js';  

function Nav(){

const [reactLinks, setReactLinks] = useState([]);
const [htmlLinks, setHtmlLinks] = useState([]);

useEffect(() => {
    fetch("/NavData.json")
    .then(response => response.json())
    .then(data => {                
        setReactLinks(data.reactlinks);
        setHtmlLinks(data.htmllinks);    
        return ()=>{}; // cleanup
    });
}, []); // no dependency array    

/** Code Highlighter Initialization **/
useEffect(()=>{
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  },[])


function handleLinkFocus(e){
    const elid = e.target.id;
    let infodiv = document.querySelector("div[data-for='" + elid + "']");    
    infodiv.classList.remove("animatesecondary");
    infodiv.classList.add("animateprimary");
}

function handleLinkBlur(e){
    const elid = e.target.id;
    let infodiv = document.querySelector("div[data-for='" + elid + "']");
    infodiv.classList.remove("animateprimary");
    infodiv.classList.add("animatesecondary");
}; 


function handleMenuEnter(){
    document.querySelector("#sitenav.menu").classList.add("animateprimary");
    document.querySelector("#sitenav.menu").classList.remove("animatesecondary");
    document.querySelector("#sitenav.menu .title").classList.add("animateprimary");
    document.querySelector("#sitenav.menu .title").classList.remove("animatesecondary");
};

function handleMenuLeave(){
    document.querySelector("#sitenav.menu").classList.add("animatesecondary");
    document.querySelector("#sitenav.menu").classList.remove("animateprimary");
    document.querySelector("#sitenav.menu .title").classList.add("animatesecondary");
    document.querySelector("#sitenav.menu .title").classList.remove("animateprimary");    
};

/** removed hideCode and showCode to utilities.js */

const reactlinks = reactLinks.map((link)=>{
    return(
        <NavLink key={link.id} id={link.id} type={link.type} link={link.link} 
        text={link.text} summary={link.summary} icons={link.icons}
        linkshow={handleLinkFocus} linkhide={handleLinkBlur}/>
    )
})


const htmllinks = htmlLinks.map((link)=>{
    return(
        <NavLink key={link.id} id={link.id} type={link.type} link={link.link} 
        text={link.text} summary={link.summary} icons={link.icons}
        linkshow={handleLinkFocus} linkhide={handleLinkBlur}/>
    )
})

    return(
        <>
        <div id="sitenav" className="menu" onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
            <div className="title">Portfolio Navigation <span>&middot;&middot;&middot;</span></div>
            <ul className="nav">
                {reactlinks}
                <NavLink key="divider" id="divider" type="divider" text="Non-React Projects" icons={[]} />
                {htmllinks}                
            </ul>          
            <div id="NavCodeBug" className="viewcodeicon" title="View Navigation Code" onClick={()=>showCode("NAV")}>
                <img src="/img/viewcode-icon.png" alt="View Navigation Code"/> 
                <span>view code</span>
            </div>  
        </div>
        <Code apptype="NAV" appname="Navigation" hidecode={()=>hideCode("NAV")}/>
        </>
    )
}

export default Nav
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import "./Intro.css";
import { showCode, hideCode } from "../Code/codeutils.js";
import Code from "../Code/CodeApp";
import {initSquareMove, toggleMoreContact, showMoreContact} from "./Intro.js";
import caretarrowwhiteup from "./img/caretarrow-white-up.png";
import caretarrowwhitedown from "./img/caretarrow-white-down.png";
import Cont from "./components/Cont";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Ext from "./components/Ext";
import Ref from "./components/Ref";

/** Highlight js Code  **/
import hljs from 'highlight.js';   

function IntroApp(){

  /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
  const routerparams = useParams(); 
    document.querySelector("html").setAttribute("id",routerparams.APPNAME);
    document.querySelector("body").classList = "";  // remove any previous classes added
    document.querySelector("body").classList.add(routerparams.APPNAME);
    document.title = `${routerparams.APPNAME} Demo App : 2022 Ed Murphy`;   // set a title for this app
  /** end app setup routine **/

  useEffect(()=>{
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
      initSquareMove();
    });
  },[])  

    return(    
      <div id="IntroApp">
        
        <div id="container">

          <div id="title">
              <div id="titlewrapper">
                <div className="humor" id="callmeed">Please call me "Ed"</div>
                <div className="fname">Edward</div>
                <div className="lname">Murphy</div>
                <div className="position"><span>&lt;</span> UX Front End Developer <span>/&gt;</span></div>
              </div>
          </div>
          
          <div id="photo"><img src="/img/edmurphy-profilepic.jpg"/></div>
          
          <div id="rightgutter">
              <div className="pixelline"></div>
              <div className="pixelsquare" title="Sense of humor scale. Please leave this alone unless you have one!"></div>

              <div id="morecontactlink" onClick={showMoreContact}>
                <div className="text show">more</div>
                <div className="glyph">
                  <img id="moredown" className="show" src={caretarrowwhitedown} alt="more arrow"/>
                  <img id="moreup" className="" src={caretarrowwhiteup} alt="less arrow"/>
                </div>
              </div>

          </div>

          <div id="contact" onMouseEnter={toggleMoreContact} onMouseLeave={toggleMoreContact}>                
                  
            <Cont type="Phone" url="tel:1-617-997-9716" text="617.997.9716" target={false} />
            <Cont type="Email" url="mailto:cyberprompt@gmail.com" text="cyberprompt@gmail.com" target={false} />
            <Cont type="Location" url="https://www.google.com/maps/place/Chelsea,+MA+02150/@42.3889607,-71.0380471,13.18z/data=!4m5!3m4!1s0x89e371b266e21107:0x76239b15fba2b915!8m2!3d42.3917638!4d-71.0328284?hl=en" text="Chelsea, MA" target={true}/>
            <div className="flexbreak"></div>                     
            <Cont type="LinkedIn" url="https://www.linkedin.com/in/ed-murphy-5041339/" text="My LinkedIn Page" target={true}/>
            <Cont type="Resume" url="https://docs.google.com/document/d/1yG5yG_-XU_lmUhTyu2rCeflt90JFVN9v/edit?usp=sharing&ouid=114089190624294583017&rtpof=true&sd=true" text="View/Download" target={true} />
                                                   
          </div>

          <div id="details">
            
              <div className="detail">
                <header>PROFILE</header>
                <p>Internet developer of over 20 years working with companies from non-profit to corporate.</p>
                <p>Latest skills and experience in Node.js (local), VS Code, React, JSX, React Router, HTML5, ES6, CSS3, SCSS, Typescript and Figma.</p>
                <br></br>
                <p>This site is a demonstration of some recent work, some older and are subject to change. All of the projects have been combined into this one React application.</p>
                <p style={{color: '#000'}}><b>&lt;</b> Begin by hovering over the left Portfolio Navigation Bar.</p>
              </div>

              <div className="detail">
                <header>EXPERIENCE</header>
                <Exp pos="UI/UX Developer III" dates="2011-2017" loc="Biogen Idec / Weston MA" desc="Lead User Interface and Frontend-feature engineer for their product websites." hrule={true}/>
                <Exp pos="Email Template Specialist" dates="2002-2003" loc="Constant Contact / Needham MA" desc="Developed and integrated custom HTML Email template designs." hrule={true}/>
                <Exp pos="UI/UX Lead Developer" dates="2000-2001" loc="Emptoris / Burlington, MA" desc="Developed the GUI for a web-based e-Procurement application utilizing Cross-Browser DHTML and CSS." hrule={true} />                    
                <Exp pos="UI Principal Developer" dates="1999-2000" loc="National Leisure Group / Woburn MA" desc="Team leader and HTML Application Developer for the Special Projects division." hrule={false} />
              </div>            

              <div className="detail">

                <header>References</header>

                <div className="refblock">
                <Ref refclass="ref1" pos="Senior Director" url="https://www.linkedin.com/in/jyotinehra/" name="Jyoti Nehra" company="Biogen Idec" sep={true} />
                <Ref refclass="ref2" pos="Director" url="https://www.linkedin.com/in/katherinepotteiger/" name="Katie Poteiger" company="Biogen Idec" sep={false} />
                </div>
                <div className="hrule"></div>
                <div className="refblock">
                <Ref refclass="ref1" pos="Scrum Master" url="https://www.linkedin.com/in/rowanmeade/" name="Rowan Meade" company="Biogen Idec" sep={true} />
                <Ref refclass="ref2" pos="Senior Android Dev" url="https://www.linkedin.com/in/ilyatsymbal/" name="Ilya Tsymbal" company="Biogen Idec" sep={false} />
                </div>
                <div className="hrule"></div>
                <div className="refblock">
                <Ref refclass="ref1" pos="Senior Engineer" url="https://www.linkedin.com/in/eugenebethel/" name="Eugene Bethel" company="Biogen Idec" sep={true} />
                <Ref refclass="ref2" pos="Senior Web Dev" url="https://www.linkedin.com/in/elenalebedev/" name="Elena Lebedev" company="Biogen Idec" sep={false} />           
                </div>  
                <div className="hrule"></div>
                <div className="refblock">
                <Ref refclass="ref1" pos="Web Ops Manager" url="https://www.linkedin.com/in/mayajadehorowitz" name="Maya Jade (Hallett) Horowitz" company="Biogen Idec" sep={false} />
                {/*<Ref refclass="ref2" pos="" url="" name="" company="" sep={false} />*/}
                </div>                                              

              </div>                            
            
          </div>
          
          <div id="extras">

            <div className="extra">
              <header>EDUCATION</header>    

              <Edu date="1999" loc="Worcester Polytechnic, Waltham" type="C, C++ / Unix Programming" />
              <Edu date="1996" loc="UMASS/Boston" type="Biology/Medical Technology" />
              <Edu date="1994" loc="Mass Bay College" type="Life Sciences" />     
              <Edu date="1987" loc="Waltham Vocational HS" type="Electronics" />

              <div className="divider"></div>

              <header>SKILLS</header>   

              <div className="extrablock">
                <ul>
                  <li>Javascript / JSON</li>
                  <li>React</li>
                  <li>CSS3 / SCSS</li>
                  <li>HTML5</li>
                  <li>Typescript</li>
                  <li>Graphics</li>
                  <li>Audio/Video Editing</li>
                </ul>
              </div>                  

              <div className="divider"></div>                              

              <header>PERSONAL EXTRAS</header>    

              <Ext what="Biology / Anatomy & Physiology Tutor" where="Mass Bay College" />
              <Ext what="Ballroom & Latin Dance Instructor" where="Arthur Murray, Danvers MA" />   
              <Ext what="Freelance Web Developer" where="Sole Proprietor, Cyberprompt Web Solutions" />      
              <Ext what="Turntablist / DJ" where="Sole Proprietor, Ed Busy Productions" />                               

              <div className="humor" id="cooking">I also enjoy cooking<br/>and baking.</div>

            </div>            

          </div>

        </div>



        <div className="viewcodeicon" title="View Introduction Code" onClick={()=>showCode(routerparams.APPNAME)}>
                <img src="/img/viewcode-icon.png" alt="View Introduction Code"/> 
        </div> 
        <Code apptype={routerparams.APPNAME} appname="Introduction" hidecode={()=>hideCode(routerparams.APPNAME)}/>
      </div>
      
    )
}

export default IntroApp
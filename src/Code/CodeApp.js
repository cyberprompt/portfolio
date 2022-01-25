import "./Code.css";

function Code(props){

    let code = "";
    
switch (props.apptype){    // default is NAV
    case "INTRO":
        code=`import \{ useEffect \} from "react";
        import \{useParams\} from "react-router-dom";
        import "./Intro.css";
        import \{ showCode, hideCode \} from "../Code/codeutils.js";
        import Code from "../Code/CodeApp";
        import \{initSquareMove, toggleMoreContact, showMoreContact\} from "./Intro.js";
        import caretarrowwhiteup from "./img/caretarrow-white-up.png";
        import caretarrowwhitedown from "./img/caretarrow-white-down.png";
        import Cont from "./components/Cont";
        import Edu from "./components/Edu";
        import Exp from "./components/Exp";
        import Ext from "./components/Ext";
        import Ref from "./components/Ref";
        
        /** Highlight js Code  **/
        import hljs from 'highlight.js';   
        
        function IntroApp()\{
        
          /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
          const routerparams = useParams(); 
            document.querySelector("html").setAttribute("id",routerparams.APPNAME);
            document.querySelector("body").classList = "";  // remove any previous classes added
            document.querySelector("body").classList.add(routerparams.APPNAME);
            document.title = \`$\{routerparams.APPNAME\} Demo App : 2022 Ed Murphy\`;   // set a title for this app
          /** end app setup routine **/
        
          useEffect(()=>\{
            document.querySelectorAll('pre code').forEach((el) => \{
              hljs.highlightElement(el);
              initSquareMove();
            \});
          \},[])  
        
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
        
                      <div id="morecontactlink" onClick=\{showMoreContact\}>
                        <div className="text show">more</div>
                        <div className="glyph">
                          <img id="moredown" className="show" src=\{caretarrowwhitedown\} alt="more arrow"/>
                          <img id="moreup" className="" src=\{caretarrowwhiteup\} alt="less arrow"/>
                        </div>
                      </div>
        
                  </div>
        
                  <div id="contact" onMouseEnter=\{toggleMoreContact\} onMouseLeave=\{toggleMoreContact\}>                
                          
                    <Cont type="Phone" url="tel:1-617-997-9716" text="617.997.9716" target=\{false\} />
                    <Cont type="Email" url="mailto:cyberprompt@gmail.com" text="cyberprompt@gmail.com" target=\{false\} />
                    <Cont type="Location" url="https://www.google.com/maps/place/Chelsea,+MA+02150?hl=en" text="Chelsea, MA" target=\{true\}/>
                    <div className="flexbreak"></div>                     
                    <Cont type="LinkedIn" url="https://www.linkedin.com/in/ed-murphy-5041339/" text="My LinkedIn Page" target=\{true\}/>
                    <Cont type="Resume" url="https://docs.google.com/document/d/1yG5yG_-XU_lmUhTyu2rCeflt90JFVN9v" text="View/Download" target=\{true\} />
                                                           
                  </div>
        
                  <div id="details">
                    
                      <div className="detail">
                        <header>PROFILE</header>
                        <p>Internet developer of over 20 years working with companies from non-profit to corporate.</p>
                        <p>Latest skills and experience in Node.js (local), VS Code, React, JSX, React Router, HTML5, ES6, CSS3, SCSS, Typescript and Figma.</p>
                        <br></br>
                        <p>This site is a demonstration of some recent work, some older and are subject to change. All of the projects have been combined into this one React application.</p>
                        <p style=\{\{color: '#000'\}\}><b>&lt;</b> Begin by hovering over the left Portfolio Navigation Bar.</p>
                      </div>
        
                      <div className="detail">
                        <header>EXPERIENCE</header>
                        <Exp pos="UI/UX Developer III" dates="2011-2017" loc="Biogen Idec / Weston MA" desc="Lead User Interface and Frontend-feature engineer for their product websites." hrule=\{true\}/>
                        <Exp pos="Email Template Specialist" dates="2002-2003" loc="Constant Contact / Needham MA" desc="Developed and integrated custom HTML Email template designs." hrule=\{true\}/>
                        <Exp pos="UI/UX Lead Developer" dates="2000-2001" loc="Emptoris / Burlington, MA" desc="Developed the GUI for a web-based e-Procurement application utilizing Cross-Browser DHTML and CSS." hrule=\{true\} />                    
                        <Exp pos="UI Principal Developer" dates="1999-2000" loc="National Leisure Group / Woburn MA" desc="Team leader and HTML Application Developer for the Special Projects division." hrule=\{false\} />
                      </div>            
        
                      <div className="detail">
        
                        <header>References</header>
        
                        <div className="refblock">
                        <Ref refclass="ref1" pos="Senior Director" url="https://www.linkedin.com/in/jyotinehra/" name="Jyoti Nehra" company="Biogen Idec" sep=\{true\} />
                        <Ref refclass="ref2" pos="Director" url="https://www.linkedin.com/in/katherinepotteiger/" name="Katie Poteiger" company="Biogen Idec" sep=\{false\} />
                        </div>
                        <div className="hrule"></div>
                        <div className="refblock">
                        <Ref refclass="ref1" pos="Scrum Master" url="https://www.linkedin.com/in/rowanmeade/" name="Rowan Meade" company="Biogen Idec" sep=\{true\} />
                        <Ref refclass="ref2" pos="Senior Android Dev" url="https://www.linkedin.com/in/ilyatsymbal/" name="Ilya Tsymbal" company="Biogen Idec" sep=\{false\} />
                        </div>
                        <div className="hrule"></div>
                        <div className="refblock">
                        <Ref refclass="ref1" pos="Senior Engineer" url="https://www.linkedin.com/in/eugenebethel/" name="Eugene Bethel" company="Biogen Idec" sep=\{true\} />
                        <Ref refclass="ref2" pos="Senior Web Dev" url="https://www.linkedin.com/in/elenalebedev/" name="Elena Lebedev" company="Biogen Idec" sep=\{false\} />           
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
        
        
        
                <div className="viewcodeicon" title="View Introduction Code" onClick=\{()=>showCode(routerparams.APPNAME)\}>
                        <img src="/img/viewcode-icon.png" alt="View Introduction Code"/> 
                </div> 
                <Code apptype=\{routerparams.APPNAME\} appname="Introduction" hidecode=\{()=>hideCode(routerparams.APPNAME)\}/>
              </div>
              
            )
        \}
        
        export default IntroApp`;
        break;

    case "MD":
        code=`import React, \{useEffect\} from "react"
        import \{useParams\} from "react-router-dom";
        import "./MD.css"
        import "./MDE.css"
        import Sidebar from "./components/Sidebar"
        import Editor from "./components/Editor"
        import Split from "react-split"
        import \{nanoid\} from "nanoid"
        import \{ confirmAlert \} from 'react-confirm-alert'; // Import
        import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
        
        import \{ showCode, hideCode \} from "../Code/codeutils.js";
        import Code from "../Code/CodeApp";
        
        /** Highlight js Code  **/
        import hljs from 'highlight.js';  
        
        export default function App() \{
        
           /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
           const routerparams = useParams(); 
           useEffect(()=> \{	
            /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
            document.querySelector("html").setAttribute("id",routerparams.APPNAME);
            document.querySelector("body").classList = "";  // remove any previous classes added
            document.querySelector("body").classList.add(routerparams.APPNAME);
            document.title = \`$\{routerparams.APPNAME\} Demo App : 2022 Ed Murphy\`;   // set a title for this app
            \},[routerparams.APPNAME]);
        
            useEffect(()=>\{
                document.querySelectorAll('pre code').forEach((el) => \{
                  hljs.highlightElement(el);
                \});
              \},[])  
        
            // lazy state initialization - run once on load only
            const [notes, setNotes] = React.useState(
                    ()=>\{
                        const oldnotes = localStorage.getItem("notes");
                        return oldnotes !== null ? JSON.parse(oldnotes) : [];
                    \}
                )
        
            const [currentNoteId, setCurrentNoteId] = React.useState(
                (notes[0] && notes[0].id) || ""
            )
            
            React.useEffect(()=>\{
                localStorage.setItem("notes",JSON.stringify(notes));
            \},[notes]);
            
        
            function createNewNote() \{
                const newNote = \{
                    id: nanoid(),
                    body: "# Type your markdown note's title here"
                \}
                setNotes(prevNotes => [...prevNotes, newNote])
                setCurrentNoteId(newNote.id)
            \}
            
            function updateNote(text) \{
                
                // organizes latest edited note to top of list
        
                setNotes(oldNotes=>\{
                    const oldNotesLen = oldNotes.length;
                    let newNotesArray = [];
                    for(let n=0; n<oldNotesLen; n++)\{
                        const oldNote = oldNotes[n];
                        if(oldNote.id === currentNoteId)\{
                            newNotesArray.unshift(\{...oldNote, body: text\});
                        \}else\{
                            newNotesArray.push(oldNote);
                        \}
                    \}
                    return newNotesArray;
                \});
        
            \}
        
            function deleteNote()\{
                setNotes((prevState)=>\{
                    return prevState.filter((note)=>\{
                        return note.id !== currentNoteId
                    \})
                \})        
            \}
        
            function confirmDeleteNote()\{
                confirmAlert(\{
                    customUI: (\{ onClose \}) => \{
                      return (
                        <div className='custom-ui'>
                          <h2>Are you sure<br/>you want to delete<br/>this note?</h2>                  
                          <div className="flexbuttons">
                          <button onClick=\{onClose\}>No</button>
                          <button
                            onClick=\{() => \{
                              deleteNote();
                              onClose();
                            \}\}
                          >                      
                            Yes, Delete it!
                          </button>
                          </div>
                        </div>
                      );
                    \}
                  \});
            \}
            
            function findCurrentNote() \{
                return notes.find(note => \{
                    return note.id === currentNoteId
                \}) || notes[0]
            \}
            
            return (
                <main>
                \{
                    notes.length > 0 
                    ?
                    <Split 
                        sizes=\{[30, 70]\} 
                        direction="horizontal" 
                        className="split"
                    >
                        <Sidebar
                            notes=\{notes\}
                            currentNote=\{findCurrentNote()\}
                            setCurrentNoteId=\{setCurrentNoteId\}
                            newNote=\{createNewNote\}
                            deleteNote=\{confirmDeleteNote\}
                        />
                        \{
                            currentNoteId && 
                            notes.length > 0 &&
                            <Editor 
                                currentNote=\{findCurrentNote()\} 
                                updateNote=\{updateNote\} 
                            />
                        \}
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button 
                            className="first-note" 
                            onClick=\{createNewNote\}
                        >
                            Create one now
                        </button>
                    </div>
                    
                \}
        
                <div className="viewcodeicon" title="View Markdown Editor Code" onClick=\{()=>showCode(routerparams.APPNAME)\}>
                        <img src="/img/viewcode-icon.png" alt="View Markdown Editor Code"/> 
                </div> 
                <Code apptype=\{routerparams.APPNAME\} appname="Markdown Editor" hidecode=\{()=>hideCode(routerparams.APPNAME)\}/>        
                </main>
            )
        \}
        `;
        break;

    case "MEME":
        code=`import React, \{useEffect\} from "react"
        import \{useParams\} from "react-router-dom";
        import './Meme.css';
        import Header from "./components/Header";
        import Meme from "./components/Meme";
        
        import \{ showCode, hideCode \} from "../Code/codeutils.js";
        import Code from "../Code/CodeApp";
        
        /** Highlight js Code  **/
        import hljs from 'highlight.js';   
        
        function App() \{
        
           /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
           const routerparams = useParams(); 
           useEffect(()=> \{	
            /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
            document.querySelector("html").setAttribute("id",routerparams.APPNAME);
            document.querySelector("body").classList = "";  // remove any previous classes added
            document.querySelector("body").classList.add(routerparams.APPNAME);
            document.title = \`$\{routerparams.APPNAME\} Demo App : 2022 Ed Murphy\`;   // set a title for this app
            \},[routerparams.APPNAME]);
        
            useEffect(()=>\{
              document.querySelectorAll('pre code').forEach((el) => \{
                hljs.highlightElement(el);
              \});
            \},[])      
        
            return (
              <div id="container">        
                <Header/>
                <Meme/>
        
                <div className="viewcodeicon" title="View Meme Generator Code" onClick=\{()=>showCode(routerparams.APPNAME)\}>
                        <img src="/img/viewcode-icon.png" alt="View Meme Generator Code"/> 
                </div> 
                <Code apptype=\{routerparams.APPNAME\} appname="Meme Generator" hidecode=\{()=>hideCode(routerparams.APPNAME)\}/>
        
              </div>
            );
          \}
          
          export default App;
        
        `;
        break;

    case "TENZIES":
        code=`import React, \{useState, useEffect\} from "react"
        import \{useParams\} from "react-router-dom";
        import "./Tenzies.css"
        import data from "./components/dicedata"
        import Dice from "./components/Dice";
        import Confetti from 'react-confetti'
        
        import \{ showCode, hideCode \} from "../Code/codeutils.js";
        import Code from "../Code/CodeApp";
        
        /** Highlight js Code  **/
        import hljs from 'highlight.js';
        
        function App()\{
        
            const [diceData, setDiceData] = useState(()=>data); // lazy state initialization
            const [rollCount, setRollCount] = useState(0);      // counts # of rolls
            const [canPlay, setCanPlay] = useState(false);      // UI blocker prevents rolls
            const [firstPick, setFirstPick] = useState(null);     // holds ID of first chosen die
            const [lastPick, setLastPick] = useState(null);       // holds ID of last chosen die
            const [didWin, setDidWin] = useState(false);         // player won game or not
            const [didLose, setDidLose] = useState(false);       // player lost game or not
            const [gameMsg, setGameMsg] = useState(null);      // holds error or win message 
        
            
           /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
           const routerparams = useParams(); 
           useEffect(()=> \{	
            /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
            document.querySelector("html").setAttribute("id",routerparams.APPNAME);
            document.querySelector("body").classList = "";  // remove any previous classes added
            document.querySelector("body").classList.add(routerparams.APPNAME);
            document.title = \`$\{routerparams.APPNAME\} Demo App : 2022 Ed Murphy\`;   // set a title for this app
            \},[routerparams.APPNAME]);
        
            useEffect(()=>\{
                document.querySelectorAll('pre code').forEach((el) => \{
                  hljs.highlightElement(el);
                \});
              \},[])         
        
        
            // for use if user wins/loses game.
            // this runs after every change to the specified dependency array.
            // in this case the diceData
            useEffect(() => \{
                if(firstPick && lastPick)\{
        
                    const dicecount = diceData.length;  // yes i know it's 10 but imagine if it changed
                    let diceselected = 0;               // we'll count how many dice were selected and do math stuff 
                    let dicetotal = 0;                  // we will add up the selected die values only
        
                    const firstdie = diceData.find(die=>die.id===firstPick);
                    const firstval = firstdie.val;
                    const lastdie = diceData.find(die=>die.id===lastPick);
                    const lastval = lastdie.val;            
                    
                    //Lose Game Check for incorrect choice      
        
                    if(firstval !== lastval)\{
                        loseGame(firstval,lastPick,lastval);
                    \}else\{
                        diceData.forEach(obj=> \{            
                            if(obj.on)\{                                     // is this a selected die?
                                dicetotal = dicetotal + obj.val;            // add this die value to the total
                                diceselected++;                             // increment the selected # of dice
                            \}
                        \});
                
                        if(diceselected === dicecount)\{                     // all dice have been selected
                            if(dicetotal % diceselected === 0)\{ winGame() \}; 
                        \}
                    \} 
                \} 
        
            \}, [diceData, firstPick, lastPick])
        
            function winGame()\{
                let gamemsg = "";
                switch (rollCount)\{
                    case 1: gamemsg = "IMPOSSIBLE!"; break;
                    case 2: case 3: case 4: case 5: gamemsg = "Holy Christmas!"; break;
                    case 6: case 7: case 8: case 9: gamemsg = "Amazing!"; break;
                    default: break;
                \}
                if(rollCount >= 10)\{ gamemsg = "Great Job!"\};
                if(rollCount >= 20)\{ gamemsg = "Nice Work."\};
                if(rollCount > 20)\{ gamemsg = "Meh."\};
                setGameMsg(\`$\{gamemsg\} You finished with a total of $\{rollCount\} Rolls\`);  
                document.querySelector("main").classList.add("win");
                setDidWin(true);
                setCanPlay(false);
            \}
        
            function loseGame(firstval, lastid, lastval)\{            
                document.getElementById(lastid).classList.add("error");
                document.querySelector("main").classList.add("error");
                setGameMsg(\`You Lost! You chose $\{lastval\} instead of $\{firstval\}.\`);  
                setDidLose(true)
                setCanPlay(false);        
            \}
        
            function newGame()\{
                setDiceData(data);
                setRollCount(0);
                setDidWin(false);
                setDidLose(false);
                setFirstPick(null);
                setLastPick(null);
                setCanPlay(false); 
                setGameMsg(null); 
                document.querySelector("main").classList = "";      
            \}
        
            function rollDice()\{
                setRollCount(rollCount+1);
                setDiceData((prevState)=>\{           
                    return prevState.map((die) => \{                
                        const rndnum = Math.ceil(Math.random() * 6);  
                        return die.on ? die : \{...die, val: rndnum\}
                    \});
                    \}
                )
        
                setCanPlay(true);
        
            \}
        
        
            function toggleDice(id)\{  
                if(canPlay)\{                         
        
                    let isfirst = false;
        
                    if(firstPick === null)\{
                        isfirst = true; 
                        setFirstPick(id);
                    \}else\{
                        isfirst = false;
                        setLastPick(id);
                    \}
                    
        
                    setDiceData((prevState)=>\{
                        return prevState.map((die) => \{              
                            if(die.id !== id)\{
                                return \{...die, last: false\}
                            \}else\{
                                return \{...die, on: true, first: isfirst, last: true\} 
                            \}
                        \});
                    \});      
        
                \}
            \}
        
            const dice = diceData.map(
                    (die) => \{
                        return(
                            <Dice id=\{die.id\} 
                            dieclass=\{die.on ? "dice on" : "dice"\} 
                            number=\{die.val ? die.val : "?"\} 
                            handleClick=\{()=>toggleDice(die.id)\}/>
                        )
                    \}
                )
        
            return(
            <div id="container">
                <main>
                    \{didWin && <Confetti />\}
                    <h1>Tenzies</h1>               
        
                        \{ 
                            !gameMsg  ?
                                rollCount === 0 ?    
                                    <div id="instrux">
                                        <div>Roll until all dice are the same.</div><div>Click to keep current value.</div>
                                    </div> : <p id="score">\{rollCount\} Roll\{rollCount === 1 ? "" : "s"\}</p>
                            :
                            <div id="gamemessage" className=\{didWin ? "win" : "lose"\}>\{gameMsg\}</div>
                        \}
                        
                        
                    <div id="dicedisplay">
                        \{dice\}           
                    </div>
                    \{
                        didWin || didLose ? <button id="newgame" onClick=\{newGame\}>New Game</button> : 
                        <button id="roll" onClick=\{rollDice\}>ROLL</button>
                    \}
                </main>
        
                <div id="TenziesCodeBug" className="viewcodeicon" title="View Tenzies Game Code" onClick=\{()=>showCode(routerparams.APPNAME)\}>
                        <img src="/img/viewcode-icon.png" alt="View Tenzies Game Code"/> 
                </div> 
                <Code apptype=\{routerparams.APPNAME\} appname="Tenzies Game" hidecode=\{()=>hideCode(routerparams.APPNAME)\}/>
        
            </div>
            )
        \}
        
        export default App`;
        break;   

    case "TRAVEL":
        code=`import './Travel.css';
        import globeicon from "./img/globeicon.png";
        import Entries from "./components/Entries.js";
        import \{useEffect\} from "react"
        import \{useParams\} from "react-router-dom";
        import \{ showCode, hideCode \} from "../Code/codeutils.js";
        import Code from "../Code/CodeApp";
        
        /** Highlight js Code  **/
        import hljs from 'highlight.js';  
        
        function App() \{
        
           /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
           const routerparams = useParams(); 
           useEffect(()=> \{	
            /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
            document.querySelector("html").setAttribute("id",routerparams.APPNAME);
            document.querySelector("body").classList = "";  // remove any previous classes added
            document.querySelector("body").classList.add(routerparams.APPNAME);
            document.title = \`$\{routerparams.APPNAME\} Demo App : 2022 Ed Murphy\`;   // set a title for this app
            \},[routerparams.APPNAME]);
        
        
            useEffect(()=>\{
              document.querySelectorAll('pre code').forEach((el) => \{
                hljs.highlightElement(el);
              \});
            \},[])    
        
            return (
              <div id="container">
                
                <div id="header">
                  <nav><img id="navicon" src=\{globeicon\} alt="globe"/> my travel journal</nav>
                </div>
        
                <main>
                    <Entries/>                                
                </main>
        
                <div className="viewcodeicon" title="View Travel Journal Code" onClick=\{()=>showCode(routerparams.APPNAME)\}>
                        <img src="/img/viewcode-icon.png" alt="View Travel Journal Code"/> 
                </div> 
                <Code apptype=\{routerparams.APPNAME\} appname="Travel Journal" hidecode=\{()=>hideCode(routerparams.APPNAME)\}/>
        
              </div>
            );
          \}
          
          export default App;`;
        break;

    case "TRIVIAL":
        code=`
        import \{useParams\} from "react-router-dom";
        import "./Trivial.css";
        import Header from "./components/Header";
        import Footer from "./components/Footer";
        import OptionsForm from "./components/OptionsForm";
        import Question from "./components/Question";
        import Error from "./components/Error";
        import Delete from "./components/Delete";
        import Summary from "./components/Summary";
        import \{nanoid\} from "nanoid";
        // custom js inclusion functions
        import \{clean\} from "./utilities"
        
        
        function App()\{
        
        const [gameStart, setGameStart] = useState(false);      // after options submitted
        const [gameOver, setGameOver] = useState(false);        // game completed, notify total and continue options
        const [gameError, setGameError] = useState(false);      // general trigger (true) to notify user/restart game
        const [deleteData, setDeleteData] = useState(-1);       // set to 0 for all data deletion, 1 for player deletion, 2 for postDelete confirmation
        const [questionsData, setQuestionsData] = useState([]);    // game question data JSON
        const [optionsData, setOptionsData] = useState(\{
            categoryinput: "",
            typeinput: "",
            difficultyinput: "",
            amountinput : 1
        \});
        // Player and Options Data set by localstorage if exists ** TO DO **
        const [playerData, setPlayerData] = useState(\{player:"", questions:0, answered:0, correct:0, score:0, options: optionsData \});   // player name #questions/correct answers and total score 
        const [playerTotals, setPlayerTotals] = useState(\{totalquestions:0, totalcorrect:0, totalscore:0\});   // updated by useEffect to combine current game and previous game totals (used in Summary)
        const [pastPlayers, setPastPlayers] = useState([]);
        const routerparams = useParams(); 
        
        useEffect(()=> \{	
        /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
        document.querySelector("html").setAttribute("id",routerparams.APPNAME);
        document.querySelector("body").classList = "";  // remove any previous classes added
        document.querySelector("body").classList.add(routerparams.APPNAME);
        document.title = \`$\{routerparams.APPNAME\} Demo App : 2022 Ed Murphy\`;   // set a title for this app
        \},[routerparams.APPNAME]);
        
        
        
        useEffect(()=> \{		  
        
            const ls = window.localStorage;
        
            if(playerData.answered > 0)\{
                if(playerData.answered === playerData.questions)\{    
                    if(!gameOver)\{                            
                        console.log("game finished");            
                        // check for existing saved localstorage for player and update
                        const appdata = ls.getItem("appdata");
                        if(appdata === null)\{            
        
                            // create array and add first player data object
                            let playerArray = [playerData];
                            ls.setItem("appdata", JSON.stringify(playerArray));
        
                        \}else\{ // update existing data of current player
        
                            const oldappdata = JSON.parse(appdata);                             // create complete data object from local storage value
                            const \{player, questions, correct, score\} = playerData;    // current player game data values
        
                            const objidx = oldappdata.map(obj => obj.player).indexOf(player);   // look for player name in complete data object
                                                                                                // return index or -1 
        
                            if(objidx > -1 )\{                                                   // player data object found at index
                                const oldappobj = oldappdata[objidx];                           // copy data to its own object
                                const totalquestions= oldappobj.questions + questions;          // variables to be used for playerTotals, passed to Summary Screen with playerData
                                const totalcorrect  = oldappobj.correct + correct;
                                const totalscore    = oldappobj.score + score;
                                setPlayerTotals((prevtotals)=>\{
                                    return\{
                                        ...prevtotals, ...\{totalquestions,totalcorrect,totalscore\}                                
                                    \}
                                \});
        
                                let newappobj = \{\};                                             // create new object to hold updated all-game totals
                                newappobj.player    = player;                                   // keep the player!
                                newappobj.questions = totalquestions;                           // update previous questions total
                                newappobj.correct   = totalcorrect;                             // ...same for correct values
                                newappobj.score     = totalscore;                               // ...same for score
                                newappobj.options   = optionsData;                              // include current game options
                                                            
                                oldappdata[objidx] = newappobj;                                 // overwrite oldappdata player object with updated object
        
                            \}else\{                                                              
                                oldappdata.push(playerData);                                    // Add new player object to empty array                     
                            \}
                            ls.setItem("appdata", JSON.stringify(oldappdata));
                        \}        
                        setGameOver(true); 
                    \}
                \} 
        
            \}else\{
                
                    // get any past players from localstorage and setPastPlayers to pass to optionsform
        
                    const appdata = ls.getItem("appdata");
                    let playerArray = [];
                    if(appdata !== null)\{            
                        const jsondata = JSON.parse(appdata);  
                        playerArray = jsondata.map((obj)=>\{
                            return obj.player;
                        \})
                        setPastPlayers(playerArray)
                    \}
        
            \}         
            
        
        
        \}, [playerData,gameOver,optionsData,playerTotals]);	    
        
        
        function handleOptionsSubmit(e)\{
            //e.preventDefault();
            // player must enter name
            if(playerData.player !== "")\{
                const dataUrl = new URL("https://opentdb.com/api.php");
                const categoryinput = optionsData.categoryinput;
                const typeinput = optionsData.typeinput;
                const difficultyinput = optionsData.difficultyinput;
                const amountinput = optionsData.amountinput;
        
                dataUrl.search = new URLSearchParams(\{
                    category : categoryinput,
                    type : typeinput,
                    difficulty : difficultyinput,
                    amount : amountinput
                \});
        
                fetch(dataUrl)
                    .then(res =>\{       
                        if(res.ok)\{
                            return res.json()        
                        \}else\{                          // error handling. improve?
                            // console.log(res);
                            return Promise.reject(\{status: res.status, statusText: res.statusText \})
                        \}
                    \})
                    .then( function(data)\{              // lots of object modification to create the structure we need. 
                            let qcount = 0;
                            data.results.forEach(obj => \{
        
                                qcount++; obj.count = qcount;   // existing data didn't number them so adding a count to the data                            
                                switch (obj.difficulty)\{        // adding point scale values for difficulty
                                    case("easy"): obj.points = 1; break;
                                    case("medium"): obj.points = 2; break;
                                    case("hard"): obj.points = 3; break;
                                    default: break;
                                \}
                                obj.questionId = "Q-" + nanoid();      // set ID for this whole question object. Adding letter to ensure valid id for Questions
                                
                                const answerArray=[];       // Correct and Incorrect Answers randomization, merge and insertion
                                const answerIdArray=[];     // lookup array storing IDs for use for every answer
                                let correctIndex = 0;
        
                                if(obj.type === "multiple")\{  // Multiple Choice
                                    //  choose a random index to put the correct answer in a new array
                                    let incArrayLen = obj.incorrect_answers.length;
                                    let correctidx = Math.floor(Math.random() * incArrayLen);
                                    let inccount = 0;
                                    for(let i=0; i<=incArrayLen; i++)\{
                                        if(i===correctidx)\{
                                            answerArray.push(obj.correct_answer);                                         
                                            correctIndex = i;               
                                        \}else\{
                                            answerArray.push(obj.incorrect_answers[inccount]); 
                                            inccount++;               
                                        \}
                                        answerIdArray.push("A-" + nanoid()); // again, add letter prefix to ensure valid ID for Answers
                                    \}
                                \}else\{  // True False
                                    correctIndex = obj.correct_answer === "True" ? 0 : 1;
                                    answerArray[0] = "True"; answerArray[1] = "False"; 
                                    answerIdArray[0] = "A-" + nanoid(); answerIdArray[1] = "A-" + nanoid();
                                \}                            
        
                                obj.answerArray = answerArray;     // insert correct and incorrect answers as single array
                                obj.answerIdArray = answerIdArray; // reference by index each answer's ID for values in answerArray
                                obj.correctIndex = correctIndex;   // store which index in the answer array is the correct answer 
        
                            \});
                            return(
                                setQuestionsData(data.results)
                            )
                        \}
                    )
                    .then(                  
                        () => \{     // store the number of questions in player data object
                            const questions = parseInt(optionsData.amountinput)
                            setPlayerData(prevPlayerData => \{
                                return\{
                                    ...prevPlayerData, questions
                                \}
                            \})
                        \}  
                        , setGameStart(true)
                    )
                    .catch((err) => \{
                        console.log('Fetch Error:', err, err.status, err.statusText) // final error reporting if any
                        triggerError();
                    \});
        
            \}else\{
                document.querySelector("input[name=player]").classList.add("error");
            \}
        \}
        
        // General Fetch Error Handling
        function triggerError()\{
            document.querySelector("#page").classList.add("error");
            setGameError(true);
        \}
        
        
        /*** Options Form Functions ***/
        
        function handleOptionsChange(e)\{
            let \{name, type, value, checked\} = e.target;
            console.log(value);
            setOptionsData(prevOptionsData => \{
                return\{
                    ...prevOptionsData,
                    [name]:type === "checkbox" ? checked : value
                \}
            \});
        
        \}
        
        function handlePlayerChange(e)\{     // specific for the player name only
            document.querySelector("#optionsform [name=player]").classList.remove("error");
            const \{value\} = e.target;
            const player = value.toLowerCase();
        
            // check for previous name entry ** TO DO **
        
            setPlayerData(prevPlayerData => \{
                return\{
                    ...prevPlayerData, player
                \}
            \});
        \}
        
        
        /***  Question and Answer Functions ***/
        
        function handleAnswerSelect(e)\{
        
            const et = e.target;
            const selectedtype = et.getAttribute("data-type");                
            const questionid = et.getAttribute("data-questionid")
            const questionobj = document.querySelector("#"+questionid);
            const selectedid = et.getAttribute("id");
            let iscorrect = et.getAttribute("data-correct");
            let points = parseInt(et.getAttribute("data-points"));
        
            if(!document.querySelector("#"+questionid).classList.contains("disabled"))\{  // stop interaction if choice already made
        
                if(iscorrect === "true")\{    // update player game stats
                    
                    setPlayerData(prevPlayerData => \{
                        const correct = prevPlayerData.correct + 1;
                        const answered = prevPlayerData.answered + 1;
                        const score = prevPlayerData.score + points;
                        return\{
                            ...prevPlayerData, ...\{correct, answered, score\}
                        \}
                    \});
        
                    // update visual points notification and animations
                    const pointsstr = points > 1 ? "s" : "";
                    questionobj.querySelector("legend span small").textContent = points + " point" + pointsstr;     
                    document.querySelector("body").classList.add("win");         
                        
                    if(selectedtype === "multiple")\{
                        et.classList.add("win");   // winning multiple choice                   
                        const notchosen = \`#$\{questionid\} .answerblock span:not(.win)\`;
                        questionobj.querySelectorAll(notchosen).forEach(el=> el.classList.add('disabled'));    // disable other choices                     
                    \}else\{
                        const elstyled = questionobj.querySelector(\`label[for=$\{selectedid\}]\`);
                        elstyled.classList.add("win");      // label to show win styling               
                        const notchosen = \`#$\{questionid\} .answerblock label:not(.win)\`;
                        questionobj.querySelector(notchosen).classList.add('disabled');    // disable other choice   
                        questionobj.querySelectorAll("input").forEach(el => el.setAttribute("disabled","disabled")); // disable checkboxes              
                    \}
        
                \}else\{  
        
                    setPlayerData(prevPlayerData => \{
                        const answered = prevPlayerData.answered + 1;
                        return\{
                            ...prevPlayerData, ...\{answered\}
                        \}
                    \});                
        
                    // update visual points notification and animations
                    questionobj.querySelector("legend span small").textContent = "0 points";   
                    document.querySelector("body").classList.add("lose");              
        
                    if(selectedtype === "multiple")\{
                        et.classList.add("lose");    // style incorrect choice
                        const notchosen = \`#$\{questionid\} .answerblock span:not(.lose,[data-correct="true"])\`;
                        questionobj.querySelectorAll(notchosen).forEach(el=> el.classList.add('disabled'));    // disable remaining choices    
                        const correctchoice = \`#$\{questionid\} .answerblock span[data-correct="true"]\`;
                        questionobj.querySelector(correctchoice).classList.add('correctchoice');               // reveal correct answer
                    \}else\{
                        const elstyled = questionobj.querySelector(\`label[for=$\{selectedid\}]\`);
                        elstyled.classList.add("lose");    // style incorrect choice
                        const correctchoice = \`#$\{questionid\} .answerblock label[data-correct="true"]\`;
                        questionobj.querySelector(correctchoice).classList.add('correctchoice');               // reveal correct answer
                        questionobj.querySelectorAll("input").forEach(el => el.setAttribute("disabled","disabled")); // disable checkboxes
                    \}
        
                \}  // end if iscorrect         
        
                questionobj.classList.add("disabled"); // disable this question from interaction
                let questionorder = questionobj.getAttribute("data-order") * 1; // get order to find next question to animate     
        
                if(questionorder < playerData.questions)\{
        
                    // set timeout, add "exit" class, set timeout, remove element and set "enter" on next element
                    setTimeout(()=>\{
                        questionobj.classList.add("exit");
                        document.querySelector("body").classList.remove("win","lose");
                        setTimeout(()=>\{
                            questionobj.classList.replace("exit","disappear");   // go away             
                            const nextselector = '.questionblock[data-order="' + (questionorder + 1) + '"]';
                            const nextquestion = document.querySelector(nextselector);                   
                            nextquestion.classList.add("enter");
                        \}, 500);
                    \}, 2000);
        
                \}else\{
                    setTimeout(()=>\{
                        questionobj.classList.add("exit");
                        setTimeout(()=>\{
                            questionobj.classList.replace("exit","disappear");   // go away 
                        \}, 500)
                    \}, 2000);
                \} // end if questions is more than current order
        
            \}
        
            
        \}
        
        function handleGameContinue()\{
            document.querySelector("body").classList.remove("win","lose");
            setGameOver(false);
            setPlayerData(prevPlayerData => \{
                return\{
                    ...prevPlayerData, ...\{answered: 0, correct: 0, score: 0\}
                \}
            \});  
        
            handleOptionsSubmit();
        \}
        
        function handleGameQuit()\{
            document.location.reload();
        \}
        
        function handleMenuToggle()\{
            document.querySelector("#playerinfobox").classList.toggle("show");
        \}
        
        function handleSettingsToggle()\{        // shows settings for player 
            document.querySelector("#playersettings").classList.toggle("show");
        \}
        
        function deletionControl(which)\{
            setDeleteData(which);
        \}
        
        function handleDelete(which)\{
            switch(which)\{
                case 0:
                    window.localStorage.clear();
                    setDeleteData(2);
                    break;
                case 1:
                    const appobj = JSON.parse(window.localStorage.getItem("appdata"));
                    const delobj = appobj.filter((obj)=>\{
                                    return obj.player !== playerData.player;
                                \});                    
                    console.log(delobj);
                    window.localStorage.setItem("appdata",JSON.stringify(delobj));
                    setDeleteData(2);
                    break;
                default:
                    setDeleteData(-1);
                    break;                
            \}
        \}    
        
        
        // Render the Question Components
        const questions = questionsData.map(
            (qdata) => \{
                return(
                    <Question key=\{qdata.questionId\} 
                        questionid = \{qdata.questionId\}
                        count=\{qdata.count\}
                        category=\{qdata.category\} 
                        type=\{qdata.type\} 
                        difficulty=\{qdata.difficulty\}
                        points=\{qdata.points\}
                        question=\{clean(qdata.question)\} 
                        answerarray=\{clean(qdata.answerArray)\}
                        answeridarray=\{qdata.answerIdArray\}
                        correctindex=\{qdata.correctIndex\}
                        handleselect = \{handleAnswerSelect\}
                    />
                )
            \}
        )
        
        return(
        
            <div id="page">       
        
            <Header player=\{playerData.player\} 
                questioncount=\{playerData.questions\} 
                questioncorrect=\{playerData.correct\} 
                score=\{playerData.score\} 
                gamestart=\{gameStart\} 
                togglemenu=\{handleMenuToggle\} 
                togglesettings=\{handleSettingsToggle\}
                deleteplayer=\{()=>deletionControl(1)\}
                deleteall=\{()=>deletionControl(0)\}
                quit=\{handleGameQuit\}
            />
        
            <div id="container">
                <main>                
                    \{!gameStart && !gameOver && 
                        <OptionsForm 
                            pastplayers=\{pastPlayers\}
                            optionsdata=\{optionsData\} 
                            playerchange=\{handlePlayerChange\} 
                            optionssubmit=\{handleOptionsSubmit\} 
                            optionschange=\{handleOptionsChange\}
                        />
                    \}               
                    <div id="questionblocks">\{gameStart && questions\}</div>
                    \{gameError && <Error handleerror=\{handleGameQuit\} />\}
                </main>
            </div>
            
            \{gameOver && 
                <Summary 
                    playerdata=\{playerData\}
                    playertotals=\{playerTotals\}
                    continue=\{handleGameContinue\} 
                    quit=\{handleGameQuit\}
                />
            \}
        
            \{deleteData > -1 && 
                <Delete  
                    deletetype = \{deleteData\}
                    player=\{playerData.player\} 
                    deletefunction=\{()=>handleDelete(deleteData)\}
                    canceldelete=\{()=>handleDelete(-1)\}
                    finishdelete=\{handleGameQuit\}
                />
            \}
        
            <Footer/>
        
        </div>
        )
        
        
        \}
        
        export default App`
        break;
        
    default: code = `import \{ useState, useEffect \} from "react";
    import \{ useLinkClickHandler \} from "react-router-dom";
    import NavLink from "./NavLink.js"
    import "./Nav.css"
    
    function Nav()\{
    
    const [reactLinks, setReactLinks] = useState([]);
    const [htmlLinks, setHtmlLinks] = useState([]);
    
    useEffect(() => \{
        fetch("/NavData.json")
        .then(response => response.json())
        .then(data => \{                
            setReactLinks(data.reactlinks);
            setHtmlLinks(data.htmllinks);    
            return ()=>\{\}; // cleanup
        \});
    \}, []); // no dependency array    
    
    
    function handleLinkFocus(e)\{
        const elid = e.target.id;
        let infodiv = document.querySelector("div[data-for='" + elid + "']");    
        infodiv.classList.remove("animatesecondary");
        infodiv.classList.add("animateprimary");
    \}
    
    function handleLinkBlur(e)\{
        const elid = e.target.id;
        let infodiv = document.querySelector("div[data-for='" + elid + "']");
        infodiv.classList.remove("animateprimary");
        infodiv.classList.add("animatesecondary");
    \}; 
    
    
    function handleMenuEnter()\{
        document.querySelector("#sitenav.menu").classList.add("animateprimary");
        document.querySelector("#sitenav.menu").classList.remove("animatesecondary");
        document.querySelector("#sitenav.menu .title").classList.add("animateprimary");
        document.querySelector("#sitenav.menu .title").classList.remove("animatesecondary");
    \};
    
    function handleMenuLeave()\{
        document.querySelector("#sitenav.menu").classList.add("animatesecondary");
        document.querySelector("#sitenav.menu").classList.remove("animateprimary");
        document.querySelector("#sitenav.menu .title").classList.add("animatesecondary");
        document.querySelector("#sitenav.menu .title").classList.remove("animateprimary");    
    \};
    
    
    
    const reactlinks = reactLinks.map((link)=>\{
        return(
            <NavLink key=\{link.id\} id=\{link.id\} type=\{link.type\} link=\{link.link\} 
            text=\{link.text\} summary=\{link.summary\} icons=\{link.icons\}
            linkshow=\{handleLinkFocus\} linkhide=\{handleLinkBlur\}/>
        )
    \})
    
    const htmllinks = htmlLinks.map((link)=>\{
        return(
            <NavLink key=\{link.id\} id=\{link.id\} type=\{link.type\} link=\{link.link\} 
            text=\{link.text\} summary=\{link.summary\} icons=\{link.icons\}
            linkshow=\{handleLinkFocus\} linkhide=\{handleLinkBlur\}/>
        )
    \})
    
        return(
            <div id="sitenav" className="menu" onMouseEnter=\{handleMenuEnter\} onMouseLeave=\{handleMenuLeave\}>
                <div className="title">Portfolio Navigation <span>&middot;&middot;&middot;</span></div>
                <ul className="nav">
                    \{reactlinks\}
                    \{htmllinks\}
                </ul>            
            </div>
        )
    \}
    
    export default Nav`;

        break;        
}

    return(
        <blockquote id={`codeblock${props.apptype}`} className="codeblock">  
        <p className="codetitle"><span>{props.appname} Code</span><img src="/img/onoff-icon.png" onClick={props.hidecode}/></p>          
        <pre><code>{code}</code></pre>
        </blockquote>        
    )
}

export default Code
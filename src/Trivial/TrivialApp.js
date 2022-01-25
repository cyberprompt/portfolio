import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./Trivial.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OptionsForm from "./components/OptionsForm";
import Question from "./components/Question";
import Error from "./components/Error";
import Delete from "./components/Delete";
import Summary from "./components/Summary";
import {nanoid} from "nanoid";
// custom js inclusion functions
import {clean} from "./utilities"

import { showCode, hideCode } from "../Code/codeutils.js";
import Code from "../Code/CodeApp";

/** Highlight js Code  **/
import hljs from 'highlight.js';  

function App(){

    const [gameStart, setGameStart] = useState(false);      // after options submitted
    const [gameOver, setGameOver] = useState(false);        // game completed, notify total and continue options
    const [gameError, setGameError] = useState(false);      // general trigger (true) to notify user/restart game
    const [deleteData, setDeleteData] = useState(-1);       // set to 0 for all data deletion, 1 for player deletion, 2 for postDelete confirmation
    const [questionsData, setQuestionsData] = useState([]);    // game question data JSON
    const [optionsData, setOptionsData] = useState({
        categoryinput: "",
        typeinput: "",
        difficultyinput: "",
        amountinput : 1
    });
    // Player and Options Data set by localstorage if exists ** TO DO **
    const [playerData, setPlayerData] = useState({player:"", questions:0, answered:0, correct:0, score:0, options: optionsData });   // player name #questions/correct answers and total score 
    const [playerTotals, setPlayerTotals] = useState({totalquestions:0, totalcorrect:0, totalscore:0});   // updated by useEffect to combine current game and previous game totals (used in Summary)
    const [pastPlayers, setPastPlayers] = useState([]);
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

    useEffect(()=> {		  

        const ls = window.localStorage;

        if(playerData.answered > 0){
            if(playerData.answered === playerData.questions){    
                if(!gameOver){                            
                   
                    // check for existing saved localstorage for player and update
                    const appdata = ls.getItem("appdata");
                    if(appdata === null){            

                        // create array and add first player data object
                        let playerArray = [playerData];
                        ls.setItem("appdata", JSON.stringify(playerArray));

                    }else{ // update existing data of current player

                        const oldappdata = JSON.parse(appdata);                             // create complete data object from local storage value
                        const {player, questions, correct, score} = playerData;    // current player game data values

                        const objidx = oldappdata.map(obj => obj.player).indexOf(player);   // look for player name in complete data object
                                                                                            // return index or -1 

                        if(objidx > -1 ){                                                   // player data object found at index
                            const oldappobj = oldappdata[objidx];                           // copy data to its own object
                            const totalquestions= oldappobj.questions + questions;          // variables to be used for playerTotals, passed to Summary Screen with playerData
                            const totalcorrect  = oldappobj.correct + correct;
                            const totalscore    = oldappobj.score + score;
                            setPlayerTotals((prevtotals)=>{
                                return{
                                    ...prevtotals, ...{totalquestions,totalcorrect,totalscore}                                
                                }
                            });

                            let newappobj = {};                                             // create new object to hold updated all-game totals
                            newappobj.player    = player;                                   // keep the player!
                            newappobj.questions = totalquestions;                           // update previous questions total
                            newappobj.correct   = totalcorrect;                             // ...same for correct values
                            newappobj.score     = totalscore;                               // ...same for score
                            newappobj.options   = optionsData;                              // include current game options
                                                        
                            oldappdata[objidx] = newappobj;                                 // overwrite oldappdata player object with updated object

                        }else{                                                              
                            oldappdata.push(playerData);                                    // Add new player object to empty array                     
                        }
                        ls.setItem("appdata", JSON.stringify(oldappdata));
                    }        
                    setGameOver(true); 
                }
            } 

        }else{
            
                // get any past players from localstorage and setPastPlayers to pass to optionsform

                const appdata = ls.getItem("appdata");
                let playerArray = [];
                if(appdata !== null){            
                    const jsondata = JSON.parse(appdata);  
                    playerArray = jsondata.map((obj)=>{
                        return obj.player;
                    })
                    setPastPlayers(playerArray)
                }

        }         
        
   

	}, [playerData,gameOver,optionsData,playerTotals]);	    


    function handleOptionsSubmit(e){
        //e.preventDefault();
        // player must enter name
        if(playerData.player !== ""){
            const dataUrl = new URL("https://opentdb.com/api.php");
            const categoryinput = optionsData.categoryinput;
            const typeinput = optionsData.typeinput;
            const difficultyinput = optionsData.difficultyinput;
            const amountinput = optionsData.amountinput;

            dataUrl.search = new URLSearchParams({
                category : categoryinput,
                type : typeinput,
                difficulty : difficultyinput,
                amount : amountinput
            });

            fetch(dataUrl)
                .then(res =>{       
                    if(res.ok){
                        return res.json()        
                    }else{                          // error handling. improve?
                        // console.log(res);
                        return Promise.reject({status: res.status, statusText: res.statusText })
                    }
                })
                .then( function(data){              // lots of object modification to create the structure we need. 
                        let qcount = 0;
                        data.results.forEach(obj => {

                            qcount++; obj.count = qcount;   // existing data didn't number them so adding a count to the data                            
                            switch (obj.difficulty){        // adding point scale values for difficulty
                                case("easy"): obj.points = 1; break;
                                case("medium"): obj.points = 2; break;
                                case("hard"): obj.points = 3; break;
                                default: break;
                            }
                            obj.questionId = "Q-" + nanoid();      // set ID for this whole question object. Adding letter to ensure valid id for Questions
                            
                            const answerArray=[];       // Correct and Incorrect Answers randomization, merge and insertion
                            const answerIdArray=[];     // lookup array storing IDs for use for every answer
                            let correctIndex = 0;

                            if(obj.type === "multiple"){  // Multiple Choice
                                //  choose a random index to put the correct answer in a new array
                                let incArrayLen = obj.incorrect_answers.length;
                                let correctidx = Math.floor(Math.random() * incArrayLen);
                                let inccount = 0;
                                for(let i=0; i<=incArrayLen; i++){
                                    if(i===correctidx){
                                        answerArray.push(obj.correct_answer);                                         
                                        correctIndex = i;               
                                    }else{
                                        answerArray.push(obj.incorrect_answers[inccount]); 
                                        inccount++;               
                                    }
                                   answerIdArray.push("A-" + nanoid()); // again, add letter prefix to ensure valid ID for Answers
                                }
                            }else{  // True False
                                correctIndex = obj.correct_answer === "True" ? 0 : 1;
                                answerArray[0] = "True"; answerArray[1] = "False"; 
                                answerIdArray[0] = "A-" + nanoid(); answerIdArray[1] = "A-" + nanoid();
                            }                            

                            obj.answerArray = answerArray;     // insert correct and incorrect answers as single array
                            obj.answerIdArray = answerIdArray; // reference by index each answer's ID for values in answerArray
                            obj.correctIndex = correctIndex;   // store which index in the answer array is the correct answer 

                        });
                        return(
                            setQuestionsData(data.results)
                        )
                    }
                )
                .then(                  
                    () => {     // store the number of questions in player data object
                        const questions = parseInt(optionsData.amountinput)
                        setPlayerData(prevPlayerData => {
                            return{
                                ...prevPlayerData, questions
                            }
                        })
                    }  
                   , setGameStart(true)
                )
                .catch((err) => {
                    console.log('Fetch Error:', err, err.status, err.statusText) // final error reporting if any
                    triggerError();
                });

        }else{
            document.querySelector("input[name=player]").classList.add("error");
        }
    }

    // General Fetch Error Handling
    function triggerError(){
        document.querySelector("#page").classList.add("error");
        setGameError(true);
    }
    
    
    /*** Options Form Functions ***/

    function handleOptionsChange(e){
        let {name, type, value, checked} = e.target;
        console.log(value);
        setOptionsData(prevOptionsData => {
            return{
                ...prevOptionsData,
                [name]:type === "checkbox" ? checked : value
            }
        });
    
    }

    function handlePlayerChange(e){     // specific for the player name only
        document.querySelector("#optionsform [name=player]").classList.remove("error");
        const {value} = e.target;
        const player = value.toLowerCase();

        // check for previous name entry ** TO DO **

        setPlayerData(prevPlayerData => {
            return{
                ...prevPlayerData, player
            }
        });
    }


    /***  Question and Answer Functions ***/
    
    function handleAnswerSelect(e){

        const et = e.target;
        const selectedtype = et.getAttribute("data-type");                
        const questionid = et.getAttribute("data-questionid")
        const questionobj = document.querySelector("#"+questionid);
        const selectedid = et.getAttribute("id");
        let iscorrect = et.getAttribute("data-correct");
        let points = parseInt(et.getAttribute("data-points"));

        if(!document.querySelector("#"+questionid).classList.contains("disabled")){  // stop interaction if choice already made

            if(iscorrect === "true"){    // update player game stats
                
                setPlayerData(prevPlayerData => {
                    const correct = prevPlayerData.correct + 1;
                    const answered = prevPlayerData.answered + 1;
                    const score = prevPlayerData.score + points;
                    return{
                        ...prevPlayerData, ...{correct, answered, score}
                    }
                });

                // update visual points notification and animations
                const pointsstr = points > 1 ? "s" : "";
                questionobj.querySelector("legend span small").textContent = points + " point" + pointsstr;     
                document.querySelector("body").classList.add("win");         
                   
                if(selectedtype === "multiple"){
                    et.classList.add("win");   // winning multiple choice                   
                    const notchosen = `#${questionid} .answerblock span:not(.win)`;
                    questionobj.querySelectorAll(notchosen).forEach(el=> el.classList.add('disabled'));    // disable other choices                     
                }else{
                    const elstyled = questionobj.querySelector(`label[for=${selectedid}]`);
                    elstyled.classList.add("win");      // label to show win styling               
                    const notchosen = `#${questionid} .answerblock label:not(.win)`;
                    questionobj.querySelector(notchosen).classList.add('disabled');    // disable other choice   
                    questionobj.querySelectorAll("input").forEach(el => el.setAttribute("disabled","disabled")); // disable checkboxes              
                }

            }else{  

                setPlayerData(prevPlayerData => {
                    const answered = prevPlayerData.answered + 1;
                    return{
                        ...prevPlayerData, ...{answered}
                    }
                });                

                // update visual points notification and animations
                questionobj.querySelector("legend span small").textContent = "0 points";   
                document.querySelector("body").classList.add("lose");              

                if(selectedtype === "multiple"){
                    et.classList.add("lose");    // style incorrect choice
                    const notchosen = `#${questionid} .answerblock span:not(.lose,[data-correct="true"])`;
                    questionobj.querySelectorAll(notchosen).forEach(el=> el.classList.add('disabled'));    // disable remaining choices    
                    const correctchoice = `#${questionid} .answerblock span[data-correct="true"]`;
                    questionobj.querySelector(correctchoice).classList.add('correctchoice');               // reveal correct answer
                }else{
                    const elstyled = questionobj.querySelector(`label[for=${selectedid}]`);
                    elstyled.classList.add("lose");    // style incorrect choice
                    const correctchoice = `#${questionid} .answerblock label[data-correct="true"]`;
                    questionobj.querySelector(correctchoice).classList.add('correctchoice');               // reveal correct answer
                    questionobj.querySelectorAll("input").forEach(el => el.setAttribute("disabled","disabled")); // disable checkboxes
                }

            }  // end if iscorrect         

            questionobj.classList.add("disabled"); // disable this question from interaction
            let questionorder = questionobj.getAttribute("data-order") * 1; // get order to find next question to animate     

            if(questionorder < playerData.questions){

                // set timeout, add "exit" class, set timeout, remove element and set "enter" on next element
                setTimeout(()=>{
                    questionobj.classList.add("exit");
                    document.querySelector("body").classList.remove("win","lose");
                    setTimeout(()=>{
                        questionobj.classList.replace("exit","disappear");   // go away             
                        const nextselector = '.questionblock[data-order="' + (questionorder + 1) + '"]';
                        const nextquestion = document.querySelector(nextselector);                   
                        nextquestion.classList.add("enter");
                    }, 500);
                }, 2000);

            }else{
                setTimeout(()=>{
                    questionobj.classList.add("exit");
                    setTimeout(()=>{
                        questionobj.classList.replace("exit","disappear");   // go away 
                    }, 500)
                }, 2000);
            } // end if questions is more than current order

        }

        
    }

    function handleGameContinue(){
        document.querySelector("body").classList.remove("win","lose");
        setGameOver(false);
        setPlayerData(prevPlayerData => {
            return{
                ...prevPlayerData, ...{answered: 0, correct: 0, score: 0}
            }
        });  

       handleOptionsSubmit();
    }

    function handleGameQuit(){
        document.location.reload();
    }

    function handleMenuToggle(){
        document.querySelector("#playerinfobox").classList.toggle("show");
    }

    function handleSettingsToggle(){        // shows settings for player 
        document.querySelector("#playersettings").classList.toggle("show");
    }

    function deletionControl(which){
        setDeleteData(which);
    }

    function handleDelete(which){
        switch(which){
            case 0:
                window.localStorage.clear();
                setDeleteData(2);
                break;
            case 1:
                const appobj = JSON.parse(window.localStorage.getItem("appdata"));
                const delobj = appobj.filter((obj)=>{
                                return obj.player !== playerData.player;
                            });                    
                console.log(delobj);
                window.localStorage.setItem("appdata",JSON.stringify(delobj));
                setDeleteData(2);
                break;
            default:
                setDeleteData(-1);
                break;                
        }
    }    
    
    
    // Render the Question Components
    const questions = questionsData.map(
        (qdata) => {
            return(
                <Question key={qdata.questionId} 
                    questionid = {qdata.questionId}
                    count={qdata.count}
                    category={qdata.category} 
                    type={qdata.type} 
                    difficulty={qdata.difficulty}
                    points={qdata.points}
                    question={clean(qdata.question)} 
                    answerarray={clean(qdata.answerArray)}
                    answeridarray={qdata.answerIdArray}
                    correctindex={qdata.correctIndex}
                    handleselect = {handleAnswerSelect}
                />
            )
        }
    )

    return(

        <div id="page">       

        <Header player={playerData.player} 
            questioncount={playerData.questions} 
            questioncorrect={playerData.correct} 
            score={playerData.score} 
            gamestart={gameStart} 
            togglemenu={handleMenuToggle} 
            togglesettings={handleSettingsToggle}
            deleteplayer={()=>deletionControl(1)}
            deleteall={()=>deletionControl(0)}
            quit={handleGameQuit}
        />

        <div id="container">
            <main>                
                {!gameStart && !gameOver && 
                    <OptionsForm 
                        pastplayers={pastPlayers}
                        optionsdata={optionsData} 
                        playerchange={handlePlayerChange} 
                        optionssubmit={handleOptionsSubmit} 
                        optionschange={handleOptionsChange}
                    />
                }               
                <div id="questionblocks">{gameStart && questions}</div>
                {gameError && <Error handleerror={handleGameQuit} />}
            </main>
        </div>
        
        {gameOver && 
            <Summary 
                playerdata={playerData}
                playertotals={playerTotals}
                continue={handleGameContinue} 
                quit={handleGameQuit}
            />
        }

        {deleteData > -1 && 
            <Delete  
                deletetype = {deleteData}
                player={playerData.player} 
                deletefunction={()=>handleDelete(deleteData)}
                canceldelete={()=>handleDelete(-1)}
                finishdelete={handleGameQuit}
            />
        }

        <Footer/>

        <div className="viewcodeicon" title="View Triva Game Code" onClick={()=>showCode(routerparams.APPNAME)}>
                <img src="/img/viewcode-icon.png" alt="View Trivia Game Code"/> 
        </div> 
        <Code apptype={routerparams.APPNAME} appname="Trivia Game" hidecode={()=>hideCode(routerparams.APPNAME)}/>        

    </div>
    )


}

export default App
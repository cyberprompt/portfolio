import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import "./Tenzies.css"
import data from "./components/dicedata"
import Dice from "./components/Dice";
import Confetti from 'react-confetti'

import { showCode, hideCode } from "../Code/codeutils.js";
import Code from "../Code/CodeApp";

/** Highlight js Code  **/
import hljs from 'highlight.js';

function App(){

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


    // for use if user wins/loses game.
    // this runs after every change to the specified dependency array.
    // in this case the diceData
    useEffect(() => {
        if(firstPick && lastPick){

            const dicecount = diceData.length;  // yes i know it's 10 but imagine if it changed
            let diceselected = 0;               // we'll count how many dice were selected and do math stuff 
            let dicetotal = 0;                  // we will add up the selected die values only

            const firstdie = diceData.find(die=>die.id===firstPick);
            const firstval = firstdie.val;
            const lastdie = diceData.find(die=>die.id===lastPick);
            const lastval = lastdie.val;            
            
            //Lose Game Check for incorrect choice      

            if(firstval !== lastval){
                loseGame(firstval,lastPick,lastval);
            }else{
                diceData.forEach(obj=> {            
                    if(obj.on){                                     // is this a selected die?
                        dicetotal = dicetotal + obj.val;            // add this die value to the total
                        diceselected++;                             // increment the selected # of dice
                    }
                });
        
                if(diceselected === dicecount){                     // all dice have been selected
                    if(dicetotal % diceselected === 0){ winGame() }; 
                }
            } 
        } 

    }, [diceData, firstPick, lastPick])

    function winGame(){
        let gamemsg = "";
        switch (rollCount){
            case 1: gamemsg = "IMPOSSIBLE!"; break;
            case 2: case 3: case 4: case 5: gamemsg = "Holy Christmas!"; break;
            case 6: case 7: case 8: case 9: gamemsg = "Amazing!"; break;
            default: break;
        }
        if(rollCount >= 10){ gamemsg = "Great Job!"};
        if(rollCount >= 20){ gamemsg = "Nice Work."};
        if(rollCount > 20){ gamemsg = "Meh."};
        setGameMsg(`${gamemsg} You finished with a total of ${rollCount} Rolls`);  
        document.querySelector("main").classList.add("win");
        setDidWin(true);
        setCanPlay(false);
    }

    function loseGame(firstval, lastid, lastval){            
        document.getElementById(lastid).classList.add("error");
        document.querySelector("main").classList.add("error");
        setGameMsg(`You Lost! You chose ${lastval} instead of ${firstval}.`);  
        setDidLose(true)
        setCanPlay(false);        
    }

    function newGame(){
        setDiceData(data);
        setRollCount(0);
        setDidWin(false);
        setDidLose(false);
        setFirstPick(null);
        setLastPick(null);
        setCanPlay(false); 
        setGameMsg(null); 
        document.querySelector("main").classList = "";      
    }

    function rollDice(){
        setRollCount(rollCount+1);
        setDiceData((prevState)=>{           
            return prevState.map((die) => {                
                const rndnum = Math.ceil(Math.random() * 6);  
                return die.on ? die : {...die, val: rndnum}
            });
            }
        )

        setCanPlay(true);

    }


    function toggleDice(id){  
        if(canPlay){                         

            let isfirst = false;

            if(firstPick === null){
                isfirst = true; 
                setFirstPick(id);
            }else{
                isfirst = false;
                setLastPick(id);
            }
            

            setDiceData((prevState)=>{
                return prevState.map((die) => {              
                    if(die.id !== id){
                        return {...die, last: false}
                    }else{
                        return {...die, on: true, first: isfirst, last: true} 
                    }
                });
            });      

        }
    }

    const dice = diceData.map(
            (die) => {
                return(
                    <Dice id={die.id} 
                    dieclass={die.on ? "dice on" : "dice"} 
                    number={die.val ? die.val : "?"} 
                    handleClick={()=>toggleDice(die.id)}/>
                )
            }
        )

    return(
    <div id="container">
        <main>
            {didWin && <Confetti />}
            <h1>Tenzies</h1>               

                { 
                    !gameMsg  ?
                        rollCount === 0 ?    
                            <div id="instrux">
                                <div>Roll until all dice are the same.</div><div>Click to keep current value.</div>
                            </div> : <p id="score">{rollCount} Roll{rollCount === 1 ? "" : "s"}</p>
                    :
                    <div id="gamemessage" className={didWin ? "win" : "lose"}>{gameMsg}</div>
                }
                
                
            <div id="dicedisplay">
                {dice}           
            </div>
            {
                didWin || didLose ? <button id="newgame" onClick={newGame}>New Game</button> : 
                <button id="roll" onClick={rollDice}>ROLL</button>
            }
        </main>

        <div id="TenziesCodeBug" className="viewcodeicon" title="View Tenzies Game Code" onClick={()=>showCode(routerparams.APPNAME)}>
                <img src="/img/viewcode-icon.png" alt="View Tenzies Game Code"/> 
        </div> 
        <Code apptype={routerparams.APPNAME} appname="Tenzies Game" hidecode={()=>hideCode(routerparams.APPNAME)}/>

    </div>
    )
}

export default App
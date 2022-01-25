import "../css/summary.css";
import GameButton from "./GameButton";

function Summary(props){

    const {player, questions, correct, score} = props.playerdata;    
    const {totalquestions, totalcorrect, totalscore} = props.playertotals;        
    const successrate = Math.round((parseInt(correct)/parseInt(questions)) * 100);
    const totalsuccessrate = Math.round((parseInt(totalcorrect)/parseInt(totalquestions)) * 100);
    
    return(
        <>
        <div id="shadescreen"></div>
        <div id="summaryscreen">

            <div id="summaryscroll">

                <h1>Game Summary for {player}</h1>

                <div id="summarycontent">
                    
                    <div id="playerstats">
                        <h3>This Game</h3>
                        <div>
                            <div>Questions</div><div>{questions}</div>
                        </div>
                        <div>
                            <div>Correct</div><div>{correct}</div>
                        </div>
                        <div>
                            <div>Success</div><div>{successrate}%</div>
                        </div>
                        <div>
                            <div>Game Points</div><div>{score}</div>
                        </div>
                    </div>

                    { (totalquestions>0) && 
                    <div id="playertotals">
                        <h3>All Games</h3>
                        <div>
                            <div>Questions</div><div>{totalquestions}</div>
                        </div>
                        <div>
                            <div>Correct</div><div>{totalcorrect}</div>
                        </div>
                        <div>
                            <div>Success</div><div>{totalsuccessrate}%</div>
                        </div>
                        <div>
                            <div>Total Points</div><div>{totalscore}</div>
                        </div>
                    </div>             
                    }

                </div>

                <div id="summarybuttons">
                    <GameButton id="continuegame" buttonclick={props.continue} text="New Questions"/>
                    <GameButton id="quitgame" buttonclick={props.quit} text="Quit Game"/>
                </div>
            
            </div>

        </div>        
       </>
    )

}

export default Summary
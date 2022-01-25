import PastPlayerFormOptions from "./PastPlayerFormOptions"
import GameButton from "./GameButton"

function OptionsForm(props){    

return( 
<div id="optionsform">
<h1>Create your quiz!</h1>

    <div id="playerchoice">
        <div>
            <label htmlFor="newplayer">NEW PLAYER</label><br/>
            <input type="text" name="player" autoComplete="off" value={props.playername} placeholder="Enter Your Name" onChange={props.playerchange}/>
        </div>

        {props.pastplayers.length > 0 && 
        <>
        <span>OR</span>
            <div>
                <label htmlFor="chooseplayer">CHOOSE PLAYER</label><br/>
                <select name="chooseplayer" value={props.playername} onChange={props.playerchange}>
                    <option value="">Past Players</option>
                    <PastPlayerFormOptions pastplayers={props.pastplayers}/>
                </select>
            </div>
        </>
        }
    </div>
    <div id="gameoptions">
        <div>
            <label htmlFor="categoryinput">CATEGORY</label>
            <select name="categoryinput" value={props.optionsdata.categoryinput} onChange={props.optionschange}>
                <option value="9">Any Subject</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime & Manga</option>
                <option value="32">Entertainment: Cartoon & Animations</option>
            </select> 
        </div>
        <div>
            <label htmlFor="typeinput">TYPE</label>
            <select name="typeinput" value={props.optionsdata.typeinput} onChange={props.optionschange}>
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
            </select>
        </div>
        <div>
            <label htmlFor="difficultyinput">DIFFICULTY</label>
            <select name="difficultyinput" value={props.optionsdata.difficultyinput} onChange={props.optionschange}>
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>   
        <div>
            <label htmlFor="amountinput">QUESTIONS</label>
            <select name="amountinput" value={props.optionsdata.amountinput} onChange={props.optionschange}>
                <option value="1">1</option> {/** temp for testing. reset optionsData.amountinput back to default 5 **/}
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>                                                                      
    </div>
    <GameButton id="startgame" buttonclick={props.optionssubmit} text="START GAME"/>
</div>
)


}

export default OptionsForm
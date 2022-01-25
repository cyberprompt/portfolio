import "../css/header.css"
import {hamburgermenuicon} from "../img/base64imgs"

function Header(props){

    return(
        <header>
            <h1 onClick={props.quit} title="Return to Game Options">Trivial</h1>
            {            
            props.gamestart &&
                <>
                <div id="playerinfomenu"><img alt="menu" id="menuicon" src={hamburgermenuicon} onClick={props.togglemenu}/></div>
            
                <div id="playerinfobox">
                    <div id="playername" onClick={props.togglesettings}>{props.player}</div>
                    <div id="gameinfodisplay">
                        <div className="gameinforow">
                            <div>Questions</div><span>{props.questioncount}</span>
                        </div>
                        <div className="gameinforow">
                            <div>Correct</div><span>{props.questioncorrect}</span>
                        </div>
                        <div className="gameinforow">
                            <div>Points</div><span>{props.score}</span>    
                        </div>                        
                    </div>
                    <div id="playersettings">
                        <h4>settings</h4>
                        <div onClick={props.deleteplayer}><i>❌</i>delete player</div>
                        <div onClick={props.deleteall}><i>💣</i>delete all</div>
                    </div>
                </div>
                </> 
            }
        </header>
    )
}

export default Header
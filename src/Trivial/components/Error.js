import GameButton from "./GameButton";


function Error(props){
    return(
        <div id="gameerror">
            <div id="errorblock">
                <h1>Error! Reload Game.</h1>
                <GameButton id="restartgame" buttonclick={props.handleerror} text="RELOAD GAME"/>
            </div>        
        </div>
    )
}

export default Error
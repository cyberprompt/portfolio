function GameButton(props){
    return(
        <button id={props.id} onClick={props.buttonclick}>{props.text}</button>
    )
}

export default GameButton
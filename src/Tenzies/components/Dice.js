

function Dice(props){
    return(
        <div key={props.id} className={props.dieclass} id={props.id} onClick={props.handleClick}>{props.number}</div>
    )
}

export default Dice

function Choices(props){

    if(props.type === "multiple"){
        return(
            <span className={props.difficulty} id={props.id} 
                data-questionid={props.questionid} data-type={props.type}
                data-correct={props.correct} data-points={props.correct ? props.points : 0} 
                onClick={props.handleselect}>{props.text}</span>
        )
    }else{ // True False
        return(
            <>
            <input type="checkbox" className={props.difficulty} id={props.id} name={props.id} 
                data-questionid={props.questionid} data-type={props.type}
                data-correct={props.correct} data-points={props.correct ? props.points : 0} 
                onChange={props.handleselect} />
            <label htmlFor={props.id} className={props.difficulty} data-correct={props.correct}>{props.text}</label>
            </>
        )
    }

}

export default Choices
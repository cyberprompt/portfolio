import Choice from "./Choice"


function Questions(props){
    
    const answerarray= props.answerarray;
    const answeridarray = props.answeridarray;
    const correctindex = props.correctindex;

    const choices = answerarray.map((choice, idx)=>{
        return(
            <Choice difficulty={props.difficulty} id={answeridarray[idx]} key={answeridarray[idx]} questionid={props.questionid}
               type={props.type} text={choice} correct={idx===correctindex ? true : false} 
               points={props.points} handleselect = {props.handleselect}
            />
        )

    });

    function shortCat(cat){
       return cat.replace("Entertainment:","")
    }

    const isfirst = props.count === 1 ? "questionblock enter" : "questionblock";

    return(
        <div className={isfirst} id={props.questionid} data-order={props.count}>
            <fieldset className={props.difficulty}>
            <legend>Question {props.count} : {shortCat(props.category)} 
                <span className={props.difficulty}>{props.difficulty} <small></small></span>
            </legend>
            <div className="quizquestion">{props.question}</div>
            <div className={props.type === "multiple" ? "answerblock" : "answerblock boolean"}>
                {choices}
            </div>            
            </fieldset>
        </div>
    )
}

export default Questions
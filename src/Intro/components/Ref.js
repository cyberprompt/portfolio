import linkedinicon from "../img/linkedIn-icon.png";

export default function Ref(props){

    return(
        <>
        <div className={props.refclass}>
        <div className="subheader light">{props.pos}</div>
        <p><a href={props.url} target="_blank" noopener="true"><img src={linkedinicon}></img>{props.name}</a></p>
        <span>{props.company}</span>
        </div>
        {props.sep ? <div className="separator"><div className="sepline"></div></div> : "" }
        </>
    )

}    

    
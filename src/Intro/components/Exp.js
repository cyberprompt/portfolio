export default function Exp(props){

    return(
        <>
        <div className="subheader">{props.pos}<span>{props.dates}</span></div>
        <div className="subheader">{props.loc}</div>
        <p>{props.desc}</p>     
        {props.hrule ? <div className="hrule"></div> : "" }
        </>
    )

}    
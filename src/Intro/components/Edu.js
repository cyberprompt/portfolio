export default function Edu(props){

    return(
        <div className="extrablock">
            <div className="subheader light">{props.date}</div>
            <p>{props.loc}</p>
            <span>{props.type}</span>
        </div>
    )

}    



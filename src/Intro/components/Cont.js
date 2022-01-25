export default function Cont(props){

    const target = props.target ? "_blank" : "_self";

    return(
        <div>
            <header>{props.type}</header>
            <span><a href={props.url} target={target} noopener="true">{props.text}</a></span>
        </div>
    )
}
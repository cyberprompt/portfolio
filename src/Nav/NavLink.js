import {Link} from "react-router-dom"				    // needed for links to Routes to work!

function NavLinks(props){

    const linkicons = props.icons.map((icon)=>{
        return(
            <img src={/img/ + icon}></img>
        )
    });


    return(

        props.type !== "divider" ? 
            <li>
                {
                props.type === "react" ? 
                    <Link to={props.link} key={`${props.id}link`} id={`navlink${props.id}`} onMouseEnter={props.linkshow} onMouseLeave={props.linkhide}>{props.text}</Link>
                    : 
                    <a href={props.link} id={`navlink${props.id}`} onMouseEnter={props.linkshow} onMouseLeave={props.linkhide}>{props.text}</a>
                }
                <div className="navlink" data-for={`navlink${props.id}`}>                
                    {props.summary}
                    <div className="navicons">{linkicons}</div>
                </div>            
            </li>    
        :
        <li className="divider">{props.text}</li>
    )

}

export default NavLinks
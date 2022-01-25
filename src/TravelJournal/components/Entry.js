import navmarkericon from "../img/navmarkericon.png"
import greece from "../img/greece.jpg"
import sanfran from "../img/sanfran.jpg"
import turkscaicos from "../img/turkscaicos.jpg"

function Entry({id,loc,link,place,dates,desc}){

    let locimg = {};
    switch(id){
        case 1: locimg = greece; break;
        case 2: locimg = sanfran; break;
        case 3: locimg = turkscaicos; break;
        default: break;
    }

return(    
    
    <div className="entry">
        <div className="entryimg"><img className="travelimg" alt="vacation scene" src={locimg}/></div>            
        <div className="detail">
            <div className="locdetail">
                <img src={navmarkericon} alt="marker"/>
                <span>{loc}</span>
                <a href={link} target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <h1>{place}</h1>
            <div className="locdates">{dates}</div>
            <p className="locdesc">{desc}</p>
        </div>
    </div>

    )
}

export default Entry
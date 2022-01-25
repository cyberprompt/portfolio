import traveldata from "../data/traveldata"
import Entry from "./Entry"


const entries = traveldata.map(function(entry){
    return(        
        <Entry key={entry.id} id={entry.id} loc={entry.loc} 
        link={entry.link} place={entry.place} dates={entry.dates} desc={entry.desc} />
    )
});

function Entries(){
    return(
        <div id="entries">{entries}</div>
    )
}

export default Entries


import React from "react"


function toggleImg(val){
    const el = document.getElementById(val);
    if(el.className.indexOf("show")>-1){
        el.setAttribute("class","");
    }else{
        el.setAttribute("class","show");
    }    
}

export default function Sidebar(props) {

    const noteElements = props.notes.map((note, index) => (    

        <div key={note.id} className="sidebar-row" onMouseEnter={()=>toggleImg(note.id)} onMouseLeave={()=>toggleImg(note.id)}>
            <div                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split(`\n`)[0]}</h4>
            </div>
            <img id={note.id} alt="garbage" onClick={props.deleteNote} src="data:image/gif;base64,R0lGODlhEAAQAPMAANXV1e3t7d/f39HR0dvb2/Hx8dTU1OLi4urq6mZmZpmZmf///wAAAAAAAAAAAAAAACH5BAEAAAwALAAAAAAQABAAAARBkMlJq71Yrp3ZXkr4WWCYnOZSgQVyEMYwJCq1nHhe20qgCAoA7QLyAYU7njE4JPV+zOSkCEUSFbmTVPPpbjvgTAQAOw=="/>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}

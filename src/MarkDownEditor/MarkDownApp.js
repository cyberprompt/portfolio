import React, {useEffect} from "react"
import {useParams} from "react-router-dom";
import "./MD.css"
import "./MDE.css"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { showCode, hideCode } from "../Code/codeutils.js";
import Code from "../Code/CodeApp";

/** Highlight js Code  **/
import hljs from 'highlight.js';  

export default function App() {

   /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
   const routerparams = useParams(); 
   useEffect(()=> {	
    /** Set the environment for this App's CSS to be dominant on unreachable dom elements **/
    document.querySelector("html").setAttribute("id",routerparams.APPNAME);
    document.querySelector("body").classList = "";  // remove any previous classes added
    document.querySelector("body").classList.add(routerparams.APPNAME);
    document.title = `${routerparams.APPNAME} Demo App : 2022 Ed Murphy`;   // set a title for this app
    },[routerparams.APPNAME]);

    useEffect(()=>{
        document.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el);
        });
      },[])  

    // lazy state initialization - run once on load only
    const [notes, setNotes] = React.useState(
            ()=>{
                const oldnotes = localStorage.getItem("notes");
                return oldnotes !== null ? JSON.parse(oldnotes) : [];
            }
        )

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes));
    },[notes]);
    

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [...prevNotes, newNote])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        
        // organizes latest edited note to top of list

        setNotes(oldNotes=>{
            const oldNotesLen = oldNotes.length;
            let newNotesArray = [];
            for(let n=0; n<oldNotesLen; n++){
                const oldNote = oldNotes[n];
                if(oldNote.id === currentNoteId){
                    newNotesArray.unshift({...oldNote, body: text});
                }else{
                    newNotesArray.push(oldNote);
                }
            }
            return newNotesArray;
        });

    }

    function deleteNote(){
        setNotes((prevState)=>{
            return prevState.filter((note)=>{
                return note.id !== currentNoteId
            })
        })        
    }

    function confirmDeleteNote(){
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  <h2>Are you sure<br/>you want to delete<br/>this note?</h2>                  
                  <div className="flexbuttons">
                  <button onClick={onClose}>No</button>
                  <button
                    onClick={() => {
                      deleteNote();
                      onClose();
                    }}
                  >                      
                    Yes, Delete it!
                  </button>
                  </div>
                </div>
              );
            }
          });
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={confirmDeleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }

        <div className="viewcodeicon" title="View Markdown Editor Code" onClick={()=>showCode(routerparams.APPNAME)}>
                <img src="/img/viewcode-icon.png" alt="View Markdown Editor Code"/> 
        </div> 
        <Code apptype={routerparams.APPNAME} appname="Markdown Editor" hidecode={()=>hideCode(routerparams.APPNAME)}/>        
        </main>
    )
}

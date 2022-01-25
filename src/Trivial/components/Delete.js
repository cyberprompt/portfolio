import "../css/delete.css";
import GameButton from "./GameButton";

function Delete(props){

    return(
        <>
        <div id="shadescreen" className="delete"></div>
        <div id="deletescreen">
            <div id="deletescroll">
                <div id="deletecontent">
                    {props.deletetype === 0 &&
                    <>
                    <h2>Delete All Players?</h2> 
                    <GameButton text="YES" buttonclick={props.deletefunction} />
                    <GameButton text="NO" buttonclick={props.canceldelete} />
                    </>
                    }
                    {props.deletetype === 1 &&
                    <>
                    <h2>Delete Player <span className="capit">{props.player}</span>?</h2> 
                    <GameButton text="YES" buttonclick={props.deletefunction} />
                    <GameButton text="NO" buttonclick={props.canceldelete} />
                    </>
                    }
                    {props.deletetype === 2 &&                  
                    <>
                    <h2>Deletion Complete</h2> 
                    <GameButton text="OK" buttonclick={props.finishdelete} />
                    </>     
                    }               
                </div>
            </div>            
        </div>
        </>
    )

}

export default Delete
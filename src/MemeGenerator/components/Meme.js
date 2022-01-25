import React, {useEffect} from "react";
import memeimg from "../img/memeimg.png";

function Meme(){


// All memes data into state from fetch
    const [allMemes, setAllMemes] = React.useState({});     // start with empty object to be replaced with json after fetch

    useEffect(() => {
        const dataUrl = "https://api.imgflip.com/get_memes";    // single data call
        fetch(dataUrl)
            .then(res => res.json())                            // boilerplate. convert string in response to JSON
            .then(data => setAllMemes(data))                    // replace allMemes with JSON object
        return () => {
            //cleanup
        }
    }, []); // no dependency array

// Redo individual meme state data as object
    const [meme, setMeme] = React.useState({
        url: memeimg,
        memeName: "Futurama Fry",
        topText: "Shut Up",
        botText: "And take my money!"
    });

    function changeMeme(e){
        e.preventDefault();
        const memesArray = allMemes.data.memes;  
        const memescount = memesArray.length;
        const rndnum = Math.floor(Math.random() * memescount);                
        const rndmeme = allMemes.data.memes[rndnum];       
        setMeme(prevState => ({                  
                ...prevState,                        
                memeName: rndmeme.name,
                url: rndmeme.url
            })
        )
    }


    function changeText(e){
        const {name, value} = e.target;
            setMeme((prevState) => ({            // wrapping with parentheses allows implicit return of the object.
                ...prevState,                    // otherwise, remove them and put a return{...} inside the other braces                   
                [name] : value                
            }));
    }

    return(
        <main id="main">

        <form>
            <div className="flexrowbetween">
                <input  name="topText" type="text" placeholder={meme.topText} onChange={changeText} value={meme.topText}/>
                <input  name="botText" type="text" placeholder={meme.botText} onChange={changeText} value={meme.botText}/>
            </div>
            <br/>
            <div>
                <button className="purplebutton" onClick={changeMeme}>Get a new meme image</button>
            </div>
        </form>

        <p id="memename">{meme.memeName}</p>

        <div id="memedisplay">
            <div id="memetoptext">{meme.topText}</div>
            <img id="memeimg" src={meme.url} alt="your meme"/>
            <div id="memebottext">{meme.botText}</div>
        </div>

        </main>
    )
}

export default Meme

import trollface from "../img/trollface.png";

function Header(){
    return(
        <header className="purplegrad">
            <div className="projecttitle"><img alt="ragetroll" src={trollface}/> Meme Generator</div>
            <div>Ed Murphy 2021</div>
        </header>
    )
}

export default Header
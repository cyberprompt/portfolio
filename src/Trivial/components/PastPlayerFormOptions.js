function PastPlayerFormOptions(props){

    return(
        props.pastplayers.map((player,idx)=> {
            return(
                <option key={idx} value={player}>{player}</option>
            )
        })
    )

}

export default PastPlayerFormOptions
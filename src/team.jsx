import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid red',
        borderRadius: '12px',
        padding: '10px',
        margin: '10px',
    }
    const btnStyle = {
        border:'2px solid black',
    }
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button style={btnStyle} onClick={handleAdd}>Add</button>
            <button style={btnStyle} onClick={handleRemove}>Remove</button>
        </div>
    )
}
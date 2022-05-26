import styled from "styled-components";
import { useState } from "react"

export default function OptionsDay() {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <OptionsDays>
            {days.map((day)=><Days day={day}/> )}
        </OptionsDays>
    )
}

function Days(props) {
    const { day } = props;
    const [color, setColor] = useState("withouChanges")
    return (
        <button className={color} onClick={()=>{
            if(color == "changes") {
                setColor("withouChanges")
            } else {
                setColor("changes")
            }
        }}> <h1>{day}</h1></button>
    )
}
const OptionsDays = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    
    button {
        width:30px;
        height:30px;
        margin-right:5px;
        border-radius: 5px;
    }
    .withouChanges {
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        color: #DBDBDB;
    }
    .changes {
        background: #CFCFCF;
        border: 1px solid #CFCFCF;
        color: #FFFFFF;
    }

`;
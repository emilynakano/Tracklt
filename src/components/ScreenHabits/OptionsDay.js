import styled from "styled-components";
import { useState, useContext } from "react"
import DayContext from "../../contexts/DaysContext";

export default function OptionsDay(props) {
    const {loading, setLoading} = props;
    const dias = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <OptionsDays>
            {dias.map((dia, index)=><Days loading={loading} setLoading={setLoading} index={index} dia={dia}/> )}
        </OptionsDays>
    )
}

function Days(props) {
    const { dia, index, loading } = props;
    const [color, setColor] = useState("withouChanges")
    const {day, setDay} = useContext(DayContext)
    function ChangeColor() {
        if(color === "changes") {
            setColor("withouChanges")

        } else {
            setDay([...day, index])
            setColor("changes")
        }
    }
    return (
        <>
        {loading ?  
            <button disabled className={color}> 
            <h1>{dia}</h1>
            </button> 
            :  
            <button className={color} onClick={ChangeColor}> 
            <h1>{dia}</h1>
            </button>}
        </>
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
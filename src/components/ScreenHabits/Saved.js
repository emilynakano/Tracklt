import styled from "styled-components";
import UserContext from "../../contexts/UserContext"
import { useContext } from "react"
import axios from "axios"

export default function Saved(props) {
    const {user} = useContext(UserContext)
    const {habit, atualization, setAtualization} = props;
    function Delete() {
        if(window.confirm("deseja deletar?")) {
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          });
          promise.then(()=> {
            if(atualization === "changes") {
                setAtualization("AnotherChanges")
            } else {
                setAtualization("changes")
            }
          })
        }
        
    }
    return (
        <Container>
            <div className="header">
                <h2>{habit.name}</h2>
                <ion-icon onClick={Delete} name="trash-outline"></ion-icon>
            </div>
            <OptionsDay habit={habit}/>
        
        </Container>
    )
}
function OptionsDay(props) {
    const {habit} = props;
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    return (
        <OptionsDays>
            {days.map((day, index)=><Days habit={habit} index={index} day={day}/> )}
        </OptionsDays>
    )
}

function Days(props) {
    const { day, index, habit } = props;
    let color = "withouChanges";
    for(let i = 0; i < habit.days.length; i ++) {
        if(habit.days[i] === index) {
            color = "changes";
        }
    }
    return (
        <button className={color}> 
        <h1>{day}</h1>
        </button>
    )
}
const Container = styled.div`
    height: 100px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 20px;
    .header {
        display:flex;
        justify-content:space-between;
    }
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        color: #666666;
        word-wrap:wrap;
    }

`;
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
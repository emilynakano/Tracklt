import styled from "styled-components";
import { useState } from "react"
import UserContext from "../../contexts/UserContext"
import { useContext } from "react"
import axios from "axios"

export default function Saved(props) {
    const {user} = useContext(UserContext)
    const {habit, atualization, setAtualization} = props;
    return (
        <Container>
            <div className="header">
                <h2>{habit.name}</h2>
                <svg onClick={()=> {
                    console.log(user.token)
                    console.log(habit.id)
                    const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, {
                        headers: {
                          Authorization: `Bearer ${user.token}`
                        }
                      });
                      promise.then(()=> {
                        if(atualization == "changes") {
                            setAtualization("AnotherChanges")
                        } else {
                            setAtualization("changes")
                        }
                      })
                }} width={20} xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
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
        if(habit.days[i] == index) {
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
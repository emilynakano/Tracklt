import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useContext, useState, useEffect } from 'react';
import UserContext from "../contexts/UserContext";
import axios from "axios";
import {Link} from "react-router-dom";
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import percentageContext from "../contexts/percentageContext";

export default function ScreenToday () {
    const [atualization, setAtualization] = useState("")
    const {user} = useContext(UserContext);
    const [habitsToday, setHabitsToday] = useState([])
    const {percentage, setPercentage} = useContext(percentageContext)
    dayjs.extend(advancedFormat);
    const data = dayjs().format('DD/MM')
    let diasSemana = ['Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado']
    let dia = "";
    for(let i = 0; i < diasSemana.length; i ++) {
        dia = diasSemana[dayjs().day()]
    }
    useEffect(()=> {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then(res => {setHabitsToday(res.data)
       })
    }, [atualization])
    let feito = 0;
    for(let i = 0; i < habitsToday.length; i ++) {
        if(habitsToday[i].done) {
            feito += 1;
        }
    }
    setPercentage((feito / habitsToday.length) * 100);
    
    return (
        <Container>
            <Header>
                <h1>Tracklt</h1>
                <img src={user.image} alt={user.image}/>
            </Header>
            <Main>
                <h1>{dia}, {data}</h1>
                {feito === 0 ? <h2>Nenhum hábito concluído ainda</h2> : <h3>{parseInt(percentage)}% dos habitos concluidos</h3>}
            
                {habitsToday.map((habit)=> <HabitToday key={habit.id} setAtualization={setAtualization} atualization={atualization} habit={habit} />)}

            </Main>
            <Footer> 
                <Link style={{textDecoration:'none'}} to={"/habitos"}>
                <h1>Hábitos</h1>
                </Link>
                <div>
                <Link style={{textDecoration:'none'}} to={"/hoje"}>
                    <CircularProgressbar
                        value={percentage}
                        text={`hoje`}
                        styles={buildStyles({
                            rotation: 1,
                            strokeLinecap: 'butt',
                            textSize: '25px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#FFFFFF`,
                            textColor: '#FFFFFF',
                            trailColor: '#52B6FF',
                        })}
                    />
                </Link>
                </div>
                <Link style={{textDecoration:'none'}} to={"/historico"}>
                <h1>Histórico</h1>
                </Link>
            </Footer>

        
        </Container>
    )
}
function HabitToday(props) {
    const {habit, setAtualization, atualization} = props;
    const {user} = useContext(UserContext);
    
    function HabitReady() {
        if(habit.done) {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config);
            promise.then(()=> {
                if(atualization === "change") {
                    setAtualization("AnotherChange")
                } else {
                    setAtualization("change")
                }
                })
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config);
            promise.then(()=> {
                if(atualization === "change") {
                    setAtualization("AnotherChange")
                } else {
                    setAtualization("change")
                }
                })
        }
    }
    return (
    <Habito done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}>
        <div>
            <h1>{habit.name}</h1>
            <h2>Sequência atual: <h4>{habit.currentSequence} {habit.currentSequence === 1 ? 'dia' : 'dias'}</h4></h2>
            <h2>Seu recorde: <h5>{habit.highestSequence} {habit.currentSequence === 1 ? 'dia' : 'dias'}</h5></h2>
        </div>
        <Button color={habit.done} onClick={HabitReady}>
            <img src="./img/Vector.svg" alt="./img/Vector.svg"/>
        </Button>
    </Habito>
    )
}
const Button = styled.button`
    background-color: ${props => props.color ? '#8FC549' : '#EBEBEB'};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    width: 70px;
    height: 70px;
`
const Main = styled.div`
margin: 0 20px;
margin-top:70px;
margin-bottom:90px;
padding: 20px 0;
h1 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color:#126BA5;
}
h2 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;

}
h3 {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
}
`;
const Habito = styled.div`
    background-color:#ffffff;
    margin-top:20px;
    padding: 10px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    border-radius: 5px;
    h2 {
        display:flex;
    }
    h1 {
        color: #666666;
        font-size: 18px;
    }
    h4 {
        margin-left:5px;
        color:${props => props.done ? '#8FC549' : 'black'};
    }
    h5 {
        color: ${props => props.done ? props.currentSequence === props.highestSequence ? '#8FC549' : 'black' : 'black'}
    }
`;
const Container = styled.div`
    min-height: 600px;
    max-height: 100%;
    padding-bottom: 15px;
    background:#E5E5E5;
`;
const Footer = styled.footer`
    padding: 0 20px;
    width: 100%;
    height: 70px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom:0;
    position:fixed;
    background:#FFFFFF;
    Link {
        text-decoration:none;
    }
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    div {
        width: 91px;
        height: 91px;
        background-color:#52B6FF;
        padding: 5px;
        border-radius: 50px;
        margin-bottom: 40px;
    }
`;
const Header = styled.header`
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    h1 {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;
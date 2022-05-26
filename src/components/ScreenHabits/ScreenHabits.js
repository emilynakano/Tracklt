import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { React, useState } from 'react';
import CreateHabit from "./CreateHabit";
import Saved from "./Saved";


export default function ScreenHabits () {
    const [createHabit, setCreateHabit] = useState(false)
    const [saved, setSaved] = useState(false)

    const percentage = 80;
    return (
        <Container>
            <Header>
                <h1>Tracklt</h1>
                <img src="https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s900-c-k-c0x00ffffff-no-rj" />
            </Header>
            <Main>
                <Tittle>
                    <h1>Meus hábitos</h1> 
                    <button onClick={()=> setCreateHabit(true)}>+</button>
                </Tittle>
                {createHabit ? <CreateHabit setSaved={setSaved} /> : ""}
                {saved ? <Saved />: <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>}
              

            </Main>
            <Footer>
                <h1>Hábitos</h1>
                <div>
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
                </div>
                <h1>Histórico</h1>
            </Footer>

        
        </Container>
    )
}
const Container = styled.div`
    height: 600px;
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
const Main = styled.div`
    margin: 0 20px;
    margin-top:70px;
    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        word-wrap:wrap;
        line-height: 22px;

    }
`;
const Tittle = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 30px;
    h1 {
        margin-top:30px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    button {
        margin-top:30px;
        width: 40px;
        height: 35px;
        left: 317px;
        top: 92px;
        border: none;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size:27px;
        color: #FFFFFF;
    }
`;
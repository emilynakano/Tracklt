import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useContext } from 'react';
import UserContext from "../contexts/UserContext";
import {Link} from "react-router-dom";
import percentageContext from "../contexts/percentageContext";

export default function ScreenHistoric () {
    const {percentage} = useContext(percentageContext)
    const {user} = useContext(UserContext)
    return (
        <Container>
            <Header>
                <h1>Tracklt</h1>
                <img src={user.image} alt={user.image}/>
            </Header>
            <Main>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
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
    margin-top:10px;

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

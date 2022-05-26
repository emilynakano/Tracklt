import { React, useState } from 'react';
import styled from "styled-components";
import OptionsDay from "./OptionsDay";

export default function CreateHabit (props) {
    const {setSaved} = props;
    return (
        <Container>
            <input type='text' placeholder='nome do hábito' />
            <OptionsDay />
            <Finished setSaved={setSaved}/>
        
        </Container>
    )
}
function Finished(props) {
    const {setSaved} = props;
    return (
        <Buttons>
            <h1>Cancelar</h1>
            <button onClick={()=> setSaved(true)}>
                <h1>Salvar</h1>
            </button>
        </Buttons>
    )
}

const Container = styled.div`
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 20px;
    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 0 10px; 
        ::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 21px;
            color: #DBDBDB;
        }
    }

`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    justify-content: end;
    align-items: center;
    margin-bottom:20px;
    
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
        margin-right:15px;
    }
    button {
        border:none;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        h1 {
            margin: 5px;
            color:#FFFFFF;
        }
    }


`;
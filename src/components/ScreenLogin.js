import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState, React } from "react";
import axios from "axios"
import { useContext } from "react"
import UserContext from '../contexts/UserContext';

export default function ScreenLogin () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const  {setUser} = useContext(UserContext)

    const navigate = useNavigate()

    function Login() {
        const body = {
            email,
            password
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);
        promise.then(res => {
            setUser(res.data)
            navigate("/hoje")
        })
    }
    return (
        <>
            <Logo>
                <img src='img/logo.png'/>
            </Logo>
            <Container>
           
            <Input value={email} onChange={(e)=> setEmail(e.target.value) } type="email" placeholder='email' /> 
            <Input value={password} onChange={(e)=> setPassword(e.target.value) } type="password" placeholder='senha' />
            
                <button onClick={Login}>
                    <h1>Entrar</h1>
                </button>
                <Link style={{textDecoration:'none'}} to={"/cadastro"}>
                    <h2>Não tem uma conta? Cadastre-se!</h2>
                </Link>
            </Container>
        </>
        
    )
}
const Logo = styled.div`
    width: 180px;
    margin: 0 auto;
    margin-top: 70px
`;
const Container = styled.div`
    width: 305px;
    margin: 0 auto;
    button {
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        border: 1px solid #52B6FF;
        h1 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 21px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    h2 {
        margin: 25px auto;
        width: 235px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #52B6FF;
    }

`;
const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
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
`;
import styled from 'styled-components';
import { useState, React } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


export default function ScreenLogin () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate()

    function SignUp() {

        const body = {
            email,
            name,
            image,
            password
        }
        console.log(body)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)

        promise.then(res => {
            console.log(res.data)
            navigate("/")
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
                <Input value={name} onChange={(e)=> setName(e.target.value) } type="text" placeholder='nome' /> 
                <Input value={image} onChange={(e)=> setImage(e.target.value) } type="text" placeholder='foto' />
            
                <button onClick={SignUp}>
                    <h1>Cadastrar</h1>
                </button>
                <Link to={"/"}>
                    <h2>Já tem uma conta? Faça login!</h2>
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
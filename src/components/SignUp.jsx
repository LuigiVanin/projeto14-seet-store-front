import Input from '../styles/Input.jsx';
import Button from '../styles/Button.jsx';
import Payment from './Payment.jsx';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {

    const [confirm, setConfirm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    function openPayment(e) {
        e.preventDefault();
        setConfirm(true);
    }

    return (
        <>
            <Main>
                <img src={logo} alt="cupcake" />
                <h1>Sweet</h1>
                <form onSubmit={openPayment}>
                    <Input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <Input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <Input type='password' placeholder='Confirme sua senha' value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} required />
                    <Button type='submit'>Adicionar forma de pagamento</Button>
                </form>
                <Link to="/"><p>Já tem cadastro? Faça seu login</p></Link>
            </Main>
            <Payment confirm={confirm} setConfirm={setConfirm} name={name} email={email} password={password} confirmedPassword={confirmedPassword} />
        </>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 40px;
        width: 80px;
    }

    h1 {
        font-family: 'Dancing Script', cursive;
        font-size: 35px;
        margin: 10px 0 30px 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 50vh;
        width: 80%;
    }

    button {
        margin: 10px 0 10px 0;
    }

    p {
        margin-top: 10px;
        font-size: 15px;
        color: #212121;
        text-decoration: underline;
    }
`
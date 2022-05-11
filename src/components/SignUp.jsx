import Input from '../styles/Input.jsx';
import Button from '../styles/Button.jsx';
import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function SignUp() {
    return (
        <Main>
            <img src={logo} alt="cupcake" />
            <h1>Sweet</h1>
            <form>
                <Input placeholder='Nome' />
                <Input placeholder='E-mail' />
                <Input placeholder='Senha' />
                <Input placeholder='Confirme sua senha' />
                <Button >Cadastrar</Button>
            </form>
            <p>Já tem cadastro? Faça seu login</p>
        </Main>
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
        margin: 10px 0 20px 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 398px;
    }

    button {
        margin: 30px 0 10px 0;
    }

    p {
        font-size: 12px;
    }
`
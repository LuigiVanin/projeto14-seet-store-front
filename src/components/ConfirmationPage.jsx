import { useState, useContext } from "react";
import Input from "../styles/Input";
import Button from "../styles/Button";
import styled from 'styled-components';
import api from "../api";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage(props) {
    const {confirmation, setConfirmation} = props;

    const { token, user } = useContext(AuthContext);
    const [address, setAddress] = useState('');
    const [cep, setCep] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const body = {
        address,
        cep,
        district,
        city,
        state,
        email: user.email
    }

    function postData(e) {
        e.preventDefault();
        const promise = api.post("success/", body, config);
        promise.then(() => {navigate("/success"); console.log("Dados de endereço enviados com sucesso")});
        promise.catch(() => alert("Não foi possível enviar os dados!"));
    }

    return confirmation === true ? (
        <Main>
            <p onClick={() => setConfirmation(false)}>X</p>
            <form onSubmit={postData}>
                <Input type='text' placeholder='Endereço (Rua, nº, complemento)' value={address} onChange={(e) => setAddress(e.target.value)} required />
                <Input type='number' placeholder='CEP' value={cep} onChange={(e) => setCep(e.target.value)} required />
                <Input type='text' placeholder='Bairro' value={district} onChange={(e) => setDistrict(e.target.value)} required />
                <div>
                    <Input type='text' placeholder='Cidade' value={city} onChange={(e) => setCity(e.target.value)} required />
                    <Input type='text' placeholder='Estado' value={state} onChange={(e) => setState(e.target.value)} required />
                </div>
                <Button type="submit">Fazer pedido</Button>
            </form>
        </Main>
    ) : (
        <></>
    )
}

const Main = styled.main`
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    p {
        width: 20px;
        height: 20px;
        background-color: #FFFFFF;
        color: #000000;
        font-weight: 700;
        position: absolute;
        right: 10px;
        top: 60px;
        text-align: center;
        line-height: 20px;
    }

    form {
        width: 85%;
        height: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 80px;
    }

    button {
        font-weight: 600;
    }

    div {
        display: flex;
        justify-content: space-between;

        input {
            width: 47%
        }
    }
`
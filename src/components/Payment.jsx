import Input from "../styles/Input.jsx";
import Button from "../styles/Button.jsx";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api.js";
import { keyframes } from "styled-components";

export default function Payment(props) {
    const { confirm, setConfirm, name, email, password, confirmedPassword } =
        props;

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardCode, setCardCode] = useState("");
    const [cardExpire, setCardExpire] = useState("");
    const [cardType, setCardType] = useState("");
    const navigate = useNavigate();

    function postData() {
        const URL = "sign-up";
        const body = {
            name,
            email,
            password,
            confirmedPassword,
            cardName,
            cardNumber,
            cardCode,
            cardExpire,
            cardType,
        };

        const promise = api.post(URL, body);
        promise.then(navigate("/"));
        promise.catch(
            () => alert("Não foi possível realizar o cadastro"),
            setConfirm(false)
        );
    }

    return confirm === true ? (
        <Main>
            <p onClick={() => setConfirm(false)}>X</p>
            <form onSubmit={postData}>
                <Input
                    type="text"
                    placeholder="Nome escrito no cartão"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                />
                <Input
                    type="number"
                    placeholder="Número do cartão"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Forma de pagamento"
                    list="tipo"
                    onChange={(e) => setCardType(e.target.value)}
                    required
                />
                <datalist id="tipo">
                    <option value="debit">Débito</option>
                    <option value="credit">Crédito</option>
                </datalist>
                <div>
                    <Input
                        type="password"
                        placeholder="CVC"
                        value={cardCode}
                        onChange={(e) => setCardCode(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="MM/AAAA"
                        value={cardExpire}
                        onChange={(e) => setCardExpire(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit">Cadastrar</Button>
            </form>
        </Main>
    ) : (
        <></>
    );
}

const rollUp = keyframes`
    from {
        transform: translateY(-100vh);
    }
    to {
        transform: translateY(0);
    }
`;

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
    animation: 1s ${rollUp} ease-in-out;

    p {
        width: 25px;
        height: 25px;
        background-color: #ffffff;
        color: #000000;
        font-weight: 700;
        position: absolute;
        right: 10px;
        top: 10px;
        text-align: center;
        line-height: 25px;
        border-radius: 50%;
    }

    button {
        font-weight: 600;
    }

    form {
        width: 85%;
        height: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 80px;
    }

    div {
        display: flex;
        justify-content: space-between;

        input {
            width: 47%;
        }
    }
`;

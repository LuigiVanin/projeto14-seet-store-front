import styled from 'styled-components';
import Button from '../../styles/Button';
import { useEffect, useState, useContext} from 'react';
import api from '../../api';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Success() {

    const [infos, setInfos] = useState([]);
    const [payment, setPayment] = useState({})
    const { token, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {


        const promise = api.get("success/", config);
        promise.then((response) => {
            
            setInfos(response.data);
        });
        promise.catch((err) => {
            console.log("token is to old");
            localStorage.removeItem("token");
            navigate("/");
        });

        const successPromise = api.get("payment/", config);
        successPromise.then((response) => {
            
            setPayment(response.data);
        });

    }, []);

    function postSale() {
        const body = {
            products: infos,
            payment,
            email: user.email
        }
        
        const promise = api.post("conclude/", body, config);
        promise.then(() => {
            navigate("/");
            alert("Compra concluída com sucesso!");
        });
        promise.catch(() => alert("Erro na conclusão da compra."));
    }

    return (
        <Main>
            <h1>Confirmação de dados</h1>
            <h2>Produtos:</h2>
            <ul>
                {infos.map((info) => {
                    return (<li key={info.name}>{info.amount} {info.name}</li>)
                })}
            </ul>
            <h2>Dados de pagamento:</h2>
            <ul>
                <li>{payment.cardName}</li>
                <li>{payment.cardNumber}</li>
                <li>{payment.cardExpire}</li>
                <li>{payment.cardCode}</li>
                <li>{payment.cardType}</li>
            </ul>
            <Button onClick={postSale}>Confirmar dados e realizar pedido</Button>
        </Main>
    )
}

const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #FEEB70;
    height: 100vh;
    position: relative;

    h1 {
        font-weight: 600;
        font-size: 22px;
        line-height: 32px;
        text-align: center;
        color: #000000;
        margin-bottom: 10px;
    }

    h2 {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        width: 100%;
        text-align: start;
        color: #000000;
    }

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;

        li {
            font-style: italic;
            line-height: 20px;
            color: #4d4949;
        }
    }

    button {
        width: 80%;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 10px 0px #00000029;
        position: absolute;
        bottom: 30px;
        font-weight: 600;
    }
`
import styled from 'styled-components';
import Button from '../../styles/Button';
import BottomBar from '../BottomBar';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import api from '../../api';
import Header from '../Header';
import EmptyCart from "../../assets/cart-empty.png";
import ConfirmationPage from '../ConfirmationPage';

export default function Cart() {

    const [confirmation, setConfirmation] = useState(false);
    const [products, setProducts] = useState([]);
    const [address, setAddress] = useState('');
    const { token, user } = useContext(AuthContext);
    const navigate = useNavigate();
    let total = 0;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
    
        const promise = api.get("cart/", config);
    
        promise.then((response) => setProducts(response.data));

        promise.catch((err) => {
            console.log("token is to old");
            localStorage.removeItem("token");
            navigate("/");
        });
    }, []);

    function endShopping() {
        setConfirmation(true);
    }

    function decrease(product) {
        const body = {
            update: "decrease",
            itemId: product.itemId
        }
        const promise = api.put("cart/", body, config);
        promise.then(() => {
            api.get("cart/", config).then((response) => setProducts(response.data));
        });
        promise.catch(() => console.log("Deu ruim..."));
    }

    function increase(product) {
        const body = {
            update: "increase",
            itemId: product.itemId
        }
        const promise = api.put("cart/", body, config);
        promise.then(() => {
            api.get("cart/", config).then((response) => setProducts(response.data));
        });
        promise.catch(() => console.log("Deu ruim..."));
    }

    return products.length === 0 ? (
        <>
            <Header user={user}></Header>
            <Main>
                <h1>Carrinho</h1>
                <img className='img-empty' src={EmptyCart} alt='imagem de carrinho vazio' />
                <p className='empty'>Seu carrinho ainda está vazio!</p>
            </Main>
            <BottomBar />
        </>
    ) : (
        <>
            <Header user={user}></Header>
            <Main>
                <h1>Carrinho</h1>
                <div className='products'>
                    {products.map((product) => {
                        const {image, name, price, description, amount} = product;
                        total += parseInt(price)*parseInt(amount)
                        return(
                        <article key={name}>
                            <img src={image} alt={name} />
                            <div className='info'>
                                <p className='price'>R$ {price}</p>
                                <p className='description'>{description}</p>
                                <div className='buttons'>
                                    <button onClick={() => decrease(product)}>-</button>
                                    <p>{amount}</p>
                                    <button onClick={() => increase(product)}>+</button>
                                </div>
                            </div>
                        </article>)
                    })}
                </div>
                <h2>total: R$ {total.toFixed(2)}</h2>
                <Button onClick={endShopping} className='end-shopping'>Finalizar compra</Button>
            </Main>
            <BottomBar />
            <ConfirmationPage confirmation={confirmation} setConfirmation={setConfirmation} />
        </>
    )
}

const Main = styled.main`

    padding: 0 15px;
    height: 100vh;
    position: relative;
    overflow-x: hidden;

    .img-empty {
        position: absolute;
        top: 150px;
        right: 140px;
        width: 100px;
    }

    .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80vh;
    }

    h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 42px;
        color: #212121;
        position: fixed;
        top: 0;
        padding-top: 60px;
        background-color: #FFFFFF;
        width: 100vw;
        height: 70px;
        z-index: 1;
    }

    .products {
        padding-top: 110px;
        width: 100vw;
        height: 60vh;
    }

    article {
        width: 92vw;
        height: 30%;
        display: flex;
        margin-bottom: 24px;
        padding-left: 2px;

        img {
            width: 25vw;
            height: 100%;
            border-radius: 8px;
        }

        .info {
            display: flex;
            flex-direction: column;
            margin-left: 5%;
            position: relative;
        }

        .price {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #212121;
        }

        .description {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #9E9E9E;
            word-wrap: break-word;
        }

        .buttons {
            width: 98px;
            height: 25px;
            background-color: #F5F5F5;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            bottom: 0;

            button {
                border: none;
                width: 32px;
                height: 25px;
                font-size: 20px;
            }
        }
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #212121;
        position: fixed;
        bottom: 84px;
        background-color: #FFFFFF;
        width: 100vw;
        height: 15vh;
        z-index: 1;
    }

    .end-shopping {
        position: fixed;
        bottom: 80px;
        right: 0;
        left: 0;
        z-index: 1;
        width: 92%;
        margin: 0 auto;
    }
`
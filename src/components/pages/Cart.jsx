import styled from 'styled-components';
import Button from '../../styles/Button';

export default function Cart() {
    return (
        <Main>
            <h1>Carrinho</h1>
            <div className='products'>
                <article>
                    <img src='#' alt='' />
                    <div className='info'>
                        <p className='price'>preço</p>
                        <p className='description'>descrição</p>
                        <div className='buttons'>
                            <button>+</button>
                            <p>0</p>
                            <button>-</button>
                        </div>
                    </div>
                </article>
                <article>
                    <img src='#' alt='' />
                    <div className='info'>
                        <p className='price'>preço</p>
                        <p className='description'>descrição</p>
                        <div className='buttons'>
                            <button>+</button>
                            <p>0</p>
                            <button>-</button>
                        </div>
                    </div>
                </article>
                <article>
                    <img src='#' alt='' />
                    <div className='info'>
                        <p className='price'>preço</p>
                        <p className='description'>descrição</p>
                        <div className='buttons'>
                            <button>+</button>
                            <p>0</p>
                            <button>-</button>
                        </div>
                    </div>
                </article>
            </div>
            <h2>total: </h2>
            <Button className='end-shopping'>Finalizar compra</Button>
        </Main>
    )
}

const Main = styled.main`

    padding-left: 15px;
    height: 100vh;
    position: relative;
    overflow-x: hidden;

    h1 {
        font-weight: 600;
        font-size: 32px;
        line-height: 42px;
        color: #212121;
        position: fixed;
        top: 0;
        padding-top: 30px;
        background-color: #FFFFFF;
        width: 100vw;
        height: 70px;
        z-index: 1;
    }

    .products {
        padding-top: 120px;
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
            margin-bottom: 5px;
        }

        .description {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #9E9E9E;
        }

        .buttons {
            width: 98px;
            height: 36px;
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
                height: 36px;
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
        bottom: 64px;
        background-color: #FFFFFF;
        width: 100vw;
        height: 15vh;
        z-index: 1;
    }

    .end-shopping {
        position: fixed;
        bottom: 40px;
        right: 0;
        left: 0;
        z-index: 1;
        width: 92%;
        margin: 0 auto;
    }
`
import { Container } from "../components";
import styled from "styled-components";

const HomeContainer = styled(Container)`
    padding-top: 50px;
    align-items: flex-start;
    flex-wrap: wrap;
    height: auto;

    .item-box {
        padding-bottom: 75px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 25px;
    }
`;

const ItemBox = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: row;
    padding-inline: 5%;
    position: relative;
    z-index: 2;

    .info {
        position: absolute;
        right: 7%;
        top: 0px;
        color: #aaaaaa;
    }

    .info-box {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding-left: 5%;

        h1 {
            color: black;
            font-size: 19px;
            margin-bottom: 10px;
            font-weight: 700;
        }

        h2 {
            color: #383838;
            /* width: 50px; */
            display: inline-block;
            text-overflow: ellipsis;
            word-break: break-all;
            /* white-space: wrap; */
        }

        .button-wrapper {
            width: 100%;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: flex-end;

            button {
                width: 100%;
                height: 45px;
                border: none;
                border-radius: 5px;
                font-size: 15px;
                font-weight: 400;
                line-height: 16px;
                background-color: #fee440;
                font-family: "Poppins", sans-serif;
                box-shadow: 0px 0px 10px 0px #00000013;
            }
        }
    }
`;

const ItemImg = styled.div`
    height: 125px;
    width: 105px;
    border-radius: 8px;
    background-color: ${(props) => (!props.img ? "black" : "yellow")};
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
`;

const Cover = styled.div`
    position: fixed;
    inset: 0;
    background-color: #0000001d;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export { HomeContainer, ItemBox, ItemImg, Cover };

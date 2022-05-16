import styled from "styled-components";
import { keyframes } from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        !props.color ? "transparent" : props.color};
`;

const Search = styled.div`
    width: 90%;
    border-radius: 8px;
    background-color: #ececec;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    padding-inline: 10px;
    gap: 10px;

    svg {
        flex: 1;
    }

    input {
        flex: 9;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 23px;
        color: #838383;
        width: 90%;

        &::placeholder {
            color: #838383;
        }
    }
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #fffffff0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 10px;
    z-index: 10;

    .bar {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .inv-box {
        width: 40px;
    }

    h1 {
        font-size: 20px;
    }

    .wrapper {
        width: 40px;
        text-align: right;
        img {
            height: 30px;
            cursor: pointer;
        }
    }
`;

const Footer = styled.footer`
    position: fixed;
    bottom: 5px;
    left: 10px;
    right: 10px;
    height: 60px;
    background: #fffffff4;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px #00000029;
    z-index: 10;
    border-radius: 10px;

    .bar {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        svg {
            padding: 10px;
            border-radius: 10px;
            color: gray;
        }

        .selected {
            color: black;
            background-color: #fff09be6;
        }
    }
`;

const Title = styled.h1`
    width: 100%;
    padding-left: 5%;
    font-weight: 600;
    font-family: ${(props) =>
        props.decorative
            ? "'Dancing Script', cursive"
            : "'Poppins', sans-serif"};
    font-size: ${(props) => (props.decorative ? "38px" : "32px")};
    padding-block: 15px;
`;

const fade = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const PopUpBox = styled.div`
    width: 80%;
    position: relative;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    padding-block: 30px;
    animation: 0.5s ${fade} ease-in-out;

    svg {
        position: absolute;
        right: 10px;
        top: 6px;
        cursor: pointer;
    }

    h1 {
        font-weight: bold;
        font-size: 19px;
        text-align: center;
        margin-bottom: 13px;
    }

    h2 {
        line-height: 21px;
        margin-bottom: 5px;
        span {
            color: black;
            font-weight: 600;
            font-size: 18px;
        }

        a {
            background-color: red;
            padding: 4px;
            padding-inline: 8px;
            border-radius: 6px;
            color: black;
            background-color: #f7e063;
            cursor: pointer;
        }
        color: #5e5e5e;
    }
`;

export { Container, Header, Footer, Title, Search, PopUpBox };

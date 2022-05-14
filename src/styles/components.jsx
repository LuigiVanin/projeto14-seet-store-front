import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        !props.color ? "transparent" : props.color};
`;

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #fffffff4;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 10px;
    z-index: 10;
    box-shadow: 0px 0px 10px 0px #00000029;
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

export { Container, Header, Footer };

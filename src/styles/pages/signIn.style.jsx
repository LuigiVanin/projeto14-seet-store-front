import { Container } from "../components";
import styled from "styled-components";
import { keyframes } from "styled-components";

const logoTranslate = keyframes`
    from {
        transform: translateY(55px);
    }
    to {
        transform: translateY(0px);
    }
`;

const ContainerSignIn = styled(Container)`
    flex-direction: column;
    h1 {
        animation: 1s ${logoTranslate} ease-in-out;
        font-family: "Dancing Script", cursive;
        font-size: 55px;
        margin-bottom: 35px;
    }

    a {
        text-align: center;
        margin-top: 30px;
        width: 200px;
        color: #444343;
        text-decoration: underline;
    }
`;

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Form = styled.form`
    width: 80%;
    /* height: 10px; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 1.5s ease-in-out;
    animation: 1s ${fadeIn} ease-in-out;
    input {
        height: 50px;
        width: 100%;
        border: none;
        background-color: #74737324;
        font-weight: 600;
        font-size: 17px;
        color: #2b2b2b;
        border-radius: 8px;
        padding-inline: 20px;
        outline: none;

        &::placeholder {
            font-style: italic;
        }

        &:focus {
            outline: none;
            background-color: #ffffff;
        }
    }

    button {
        margin-top: 10px;
        height: 50px;
        width: 100%;
        background-color: white;
        border: none;
        font-weight: 600;
        font-size: 17px;
        color: #2b2b2b;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px #00000029;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export { ContainerSignIn, Form };

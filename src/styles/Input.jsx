import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 55px;
    border: none;
    background-color: #F5F5F5;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    border-radius: 8px;
    padding-left: 10px;
    box-shadow: 0px 0px 5px 0px #00000029;

    &&::placeholder {
        font-style: italic;
    }

    &&:focus {
        outline: none;
    }
`

export default Input
import styled from 'styled-components';

const Input = styled.input`
    width: 343px;
    height: 64px;
    border: none;
    background-color: #F5F5F5;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
    border-radius: 8px;
    padding-left: 10px;

    &&::placeholder {
        font-style: italic;
    }

    &&:focus {
        outline: none;
    }
`

export default Input
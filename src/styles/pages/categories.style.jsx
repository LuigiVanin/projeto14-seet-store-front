import { Container } from "../components";
import styled from "styled-components";

const CategoriesContainer = styled(Container)`
    padding-top: 60px;
    flex-direction: column;
    justify-content: start;

    .item-box {
        padding-bottom: 75px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-top: 1px #b6b6b6c7 solid;
        /* gap: 25px; */
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
    width: 100%;
    padding-inline: 5%;
    padding-block: 15px;
    border-bottom: 1px #b6b6b6c7 solid;

    h1 {
        font-size: 20px;
        &::first-letter {
            text-transform: uppercase;
        }
    }
`;

const ItemImg = styled.div`
    height: 65px;
    width: 65px;
    border-radius: 50%;
    background-color: ${(props) => (!props.img ? "black" : "yellow")};
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
`;

export { CategoriesContainer, Item, ItemImg };

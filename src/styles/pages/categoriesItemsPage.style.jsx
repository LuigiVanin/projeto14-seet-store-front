import { Container, Header } from "../components";
import styled from "styled-components";

const CategoriesItemsContainer = styled(Container)`
    flex-direction: column;
    justify-content: start;

    h1 {
        margin-block: 15px;
        font-size: 23px;
        &::first-letter {
            text-transform: uppercase;
        }
    }

    .item-box {
        padding-bottom: 75px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 25px;
    }
`;

const CategoriesHeader = styled(Header)`
    width: 100%;
    height: 75px;
    position: relative;

    .bar {
        height: 75px;
    }

    h1 {
        font-size: 29px;
        font-weight: 500;
    }
`;

export { CategoriesItemsContainer, CategoriesHeader };

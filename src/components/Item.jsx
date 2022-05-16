import { ItemBox, ItemImg, Cover } from "../styles/pages/home.style";
import { InformationCircleOutline } from "react-ionicons";
import { useState } from "react";
import PopUp from "./PopUp";

const Item = ({ item }) => {
    const [popUp, setPopUp] = useState(false);
    const toggleBox = () => {
        setPopUp(!popUp);
    };

    return (
        <>
            <ItemBox>
                <InformationCircleOutline
                    color={"#00000"}
                    height="23px"
                    width="23px"
                    cssClasses="info"
                    onClick={toggleBox}
                />
                <ItemImg img={item.image} />
                <div className="info-box">
                    <h1>R$ {item.price}</h1>
                    <h2>{item.name}</h2>
                    <div className="button-wrapper">
                        <button>Adicionar ao carrinho</button>
                    </div>
                </div>
            </ItemBox>
            {popUp ? (
                <Cover onClick={() => setPopUp(false)}>
                    <PopUp item={item} set={toggleBox} />
                </Cover>
            ) : (
                <></>
            )}
        </>
    );
};

export default Item;

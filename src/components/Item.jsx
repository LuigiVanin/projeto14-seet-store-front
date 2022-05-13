import { ItemBox, ItemImg, Cover } from "../styles/pages/home.style";
import { InformationCircleOutline } from "react-ionicons";
import { useState } from "react";

const Item = ({ item }) => {
    const [popUp, setPopUp] = useState(false);
    return (
        <>
            <ItemBox>
                <InformationCircleOutline
                    color={"#00000"}
                    height="23px"
                    width="23px"
                    cssClasses="info"
                    onClick={() => setPopUp(!popUp)}
                />
                <ItemImg img={item.image} />
                <div className="info-box">
                    <h1>{item.price}</h1>
                    <h2>{item.name}</h2>
                    <div className="button-wrapper">
                        <button>Adicionar ao carrinho</button>
                    </div>
                </div>
            </ItemBox>
            {popUp ? <Cover onClick={() => setPopUp(false)} /> : <></>}
        </>
    );
};

const PopUp = () => {};

export default Item;

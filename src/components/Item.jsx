import { ItemBox, ItemImg, Cover } from "../styles/pages/home.style";
import { InformationCircleOutline } from "react-ionicons";
import PopUp from "./PopUp";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import api from "../api";

const Item = ({ item }) => {
    const [popUp, setPopUp] = useState(false);
    const { token, user } = useContext(AuthContext);
    const toggleBox = () => {
        setPopUp(!popUp);
    };

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    function chooseItem() {

        const promise = api.post("cart/", {
            email: user.email, 
            itemId: item._id,
            amount: 1
        }, config);

        promise.then(() => alert("Produto adicionado ao carrinho!"));
        promise.catch(() => alert("Erro ao adicionar produto no carrinho"));

    }
  
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
                        <button onClick={chooseItem}>Adicionar ao carrinho</button>
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

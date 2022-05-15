import { PopUpBox } from "../styles/components";
import { CloseCircleOutline as Close } from "react-ionicons";
import { useEffect } from "react";
import api from "../api";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PopUp = ({ item, set }) => {
    const { token } = useContext(AuthContext);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = api.get("/categories/", config);
        promise.then((response) => {
            setCategory(response.data[item.categoryId - 1]);
        });
    }, [token]);

    console.log(item);
    return (
        <PopUpBox onClick={(event) => event.stopPropagation()}>
            <Close width="25px" height="25px" color={"#000000"} onClick={set} />
            <h1> {item.name}</h1>
            <h2>
                <span> Categoria: </span>
                {category ? (
                    <Link to="/categories/">{category.name}</Link>
                ) : (
                    "loading..."
                )}
            </h2>
            <h2>
                <span>Descrição:</span> {item.description}
            </h2>
        </PopUpBox>
    );
};

export default PopUp;

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { AuthContext } from "../../context/authContext";
import { HomeContainer } from "../../styles/pages/home.style";
import Header from "../Header";
import BottomBar from "../BottomBar";
import Item from "../Item";

const Home = () => {
    const { token, user } = useContext(AuthContext);
    const [items, setItems] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = api.get("items/", config);
        promise.then((reponse) => {
            console.log(reponse.data);
            setItems([...reponse.data]);
        });
        // This must go the potected Route component
        promise.catch((err) => {
            console.log("tokne is to old");
            localStorage.removeItem("token");
            navigate("/");
        });
    }, []);

    return (
        <>
            <Header user={user}></Header>
            <HomeContainer>
                <div className="item-box">
                    {items?.map((item) => (
                        <Item item={item} key={item._id} />
                    ))}
                </div>
            </HomeContainer>
            <BottomBar />
        </>
    );
};

export default Home;

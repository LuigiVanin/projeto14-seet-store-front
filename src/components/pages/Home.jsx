import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { AuthContext } from "../../context/authContext";
import { HomeContainer } from "../../styles/pages/home.style";
import Header from "../Header";
import BottomBar from "../BottomBar";
import Item from "../Item";
import { Title } from "../../styles/components";

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
            setItems(
                [...reponse.data].sort(() => (Math.random() > 0.5 ? 1 : -1))
            );
        });
        // This must go the potected Route component
        promise.catch((err) => {
            console.log("token is to old");
            localStorage.removeItem("token");
            navigate("/");
        });
    }, []);

    return (
        <>
            <Header user={user}></Header>
            <HomeContainer>
                <Title decorative>
                    Sweet <span>Home</span>
                </Title>
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

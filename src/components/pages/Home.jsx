import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { AuthContext } from "../../context/authContext";
import { HomeContainer } from "../../styles/pages/home.style";
import Header from "../Header";
import BottomBar from "../BottomBar";
import Item from "../Item";
import { Title } from "../../styles/components";
import SearchBar from "../Search";

const Home = () => {
    const { token, user } = useContext(AuthContext);
    const [items, setItems] = useState(null);
    const [search, setSearch] = useState("");
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
        promise.catch((err) => {
            console.log(err);
            alert("O seu Token expirou! faça login novamente.");
            localStorage.removeItem("token");
            navigate("/");
        });
    }, [token]);

    return (
        <>
            <Header user={user}></Header>
            <HomeContainer>
                <Title>Home</Title>
                <SearchBar placeholder="Pesquisar Item..." set={setSearch} />
                <div className="item-box">
                    {items?.map((item) => {
                        if (search === "") {
                            return <Item item={item} key={item._id} />;
                        }
                        return item.name.indexOf(search.toLowerCase()) != -1 ? (
                            <Item item={item} key={item._id} />
                        ) : (
                            <></>
                        );
                    })}
                </div>
            </HomeContainer>
            <BottomBar />
        </>
    );
};

export default Home;

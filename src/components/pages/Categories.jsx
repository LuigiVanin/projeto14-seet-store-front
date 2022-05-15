import { useEffect, useState, useContext } from "react";
import Header from "../Header";
import BottomBar from "../BottomBar";
import { AuthContext } from "../../context/authContext";
import { Title } from "../../styles/components";
import { CategoriesContainer as Container } from "../../styles/pages/categories.style";
import api from "../../api";

const Categories = () => {
    const { user, token } = useContext(AuthContext);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = api.get("categories/", config);
        promise.then((response) => {
            console.log(response);
            setCategories(response.data);
        });
        promise.catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <>
            <Header user={user} />
            <Container>
                <Title>Categories</Title>
            </Container>
            <BottomBar />
        </>
    );
};

export default Categories;

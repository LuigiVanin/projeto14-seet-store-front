import { useEffect, useState, useContext } from "react";
import Header from "../Header";
import BottomBar from "../BottomBar";
import { AuthContext } from "../../context/authContext";
import { Title } from "../../styles/components";
import { CategoriesContainer as Container } from "../../styles/pages/categories.style";
import api from "../../api";
import CategoryItem from "../CategoryItem";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const { user, token } = useContext(AuthContext);
    const [categories, setCategories] = useState(null);
    const navigate = useNavigate();

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
            alert("O seu Token expirou! faça login novamente.");
            localStorage.removeItem("token");
            navigate("/");
        });
    }, []);

    return (
        <>
            <Header user={user} />
            <Container>
                <Title>Categories</Title>

                <div className="item-box">
                    {categories?.map((category) => (
                        <CategoryItem key={category._id} item={category} />
                    ))}
                </div>
            </Container>
            <BottomBar />
        </>
    );
};

export default Categories;

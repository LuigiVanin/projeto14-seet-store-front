import { useContext, useEffect, useState } from "react";
import { ArrowBack } from "react-ionicons";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import api from "../../api";
import { AuthContext } from "../../context/authContext";
import {
    CategoriesHeader as Header,
    CategoriesItemsContainer as Container,
} from "../../styles/pages/categoriesItemsPage.style";
import Item from "../Item";

const CategoryItemsPage = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [items, setItems] = useState(null);
    const { token } = useContext(AuthContext);

    console.log(location);

    useEffect(() => {
        if (location.state?.name) {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const promise = api.get(`categories/${params.categoryId}`, config);
            promise.then((response) => {
                console.log(response);
                setItems(response.data);
            });
            promise.catch((err) => {
                console.log(err);
                alert("O seu Token expirou! faça login novamente.");
                localStorage.removeItem("token");
                navigate("/");
            });
        }
    }, []);

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <>
            <Container>
                <Header>
                    <div className="bar">
                        <ArrowBack
                            color={"#00000"}
                            height="30px"
                            width="30px"
                            onClick={handleClick}
                        />
                        <h1> Categories </h1>
                        <div className="inv-box"></div>
                    </div>
                </Header>
                <h1>{location?.state.name}</h1>
                <div className="item-box">
                    {items?.map((item) => (
                        <Item item={item} key={item._id} />
                    ))}
                </div>
            </Container>
            {/* <BottomBar /> */}
        </>
    );
};

export default CategoryItemsPage;

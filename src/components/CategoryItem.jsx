import { useNavigate } from "react-router-dom";
import { Item, ItemImg } from "../styles/pages/categories.style";

const CategoryItem = ({ item }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(item);
        navigate(`/categories/${item.categoryId}`, {
            state: { name: item.name },
        });
    };

    return (
        <Item onClick={handleClick}>
            <ItemImg img={item.image} />
            <h1>{item.name}</h1>
        </Item>
    );
};

export default CategoryItem;

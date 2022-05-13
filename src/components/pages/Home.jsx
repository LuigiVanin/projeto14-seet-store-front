import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Home = () => {
    const { token } = useContext(AuthContext);

    console.log(token);
    return <h1>Olá Home</h1>;
};

export default Home;

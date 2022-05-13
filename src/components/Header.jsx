import { Header as Headerbar } from "../styles/components";
import LogOutImg from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <Headerbar>
            <div className="bar">
                <div className="inv-box"></div>
                <h1>Olá, {user.name?.split(" ")[0]}</h1>
                <div className="wrapper">
                    <img src={LogOutImg} alt="logout" onClick={logOut} />
                </div>
            </div>
        </Headerbar>
    );
};

export default Header;

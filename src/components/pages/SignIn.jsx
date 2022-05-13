import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import api from "../../api";
import {
    ContainerSignIn as Container,
    Form,
} from "../../styles/pages/signIn.style";
import { AuthContext } from "../../context/authContext";

const SignIn = () => {
    const [signIn, setSignIn] = useState({ email: "", password: "" });
    const [request, setRequest] = useState(false);
    const { setUser, setToken, token } = useContext(AuthContext);
    const navigate = useNavigate();

    const changeHandle = (event) => {
        const target = event.target;
        signIn[target.name] = target.value;
        setSignIn({ ...signIn });
    };

    const logIn = () => {
        const promise = api.post("login/", signIn);
        setRequest(true);
        promise.then((response) => {
            console.log(response);
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                setUser({
                    name: response.data.name,
                    email: response.data.email,
                });
                setToken(response.data.token);
                navigate("/home");
            }
        });
        promise.catch((err) => {
            console.log(err);
            alert("Dados incorretos!");
            setRequest(false);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        logIn();
    };

    return (
        <Container color="#FEEB70">
            <h1>Sweet</h1>
            <Form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={signIn.email}
                    onChange={changeHandle}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={signIn.password}
                    onChange={changeHandle}
                    required
                />
                <button>
                    {!request ? (
                        "Entrar"
                    ) : (
                        <ThreeDots color="#fde545" width="85px" />
                    )}
                </button>
            </Form>
            <Link to="/sign-up">Não tem conta? faça cadastro!</Link>
        </Container>
    );
};

export default SignIn;

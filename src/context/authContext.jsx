import { createContext, useEffect, useState } from "react";
import api from "../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});

    const getUserData = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const promise = api.get("user/", config);
        promise.then((response) => {
            console.log(response);
            setUser({ ...response.data });
        });
        promise.catch((err) => console.log(err));
    };

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken) {
            localStorage.setItem("token", localToken);
            getUserData();
        }
    });

    return (
        <AuthContext.Provider value={{ token, setToken, user, getUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

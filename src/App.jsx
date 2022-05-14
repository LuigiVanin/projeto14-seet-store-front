import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reset from "./styles/reset.style";
import GlobalStyles from "./styles/global.style";
import { AuthProvider } from "./context/authContext";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/pages/SignIn";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Reset />
                <GlobalStyles />
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        {/* >
                      
                      <Route path="/categories" element={<Categories />} />
                      <Route path="/success" element={<Success />} /> */}
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
};

export default App;

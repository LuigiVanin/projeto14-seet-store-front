import { Footer } from "../styles/components";
import {
    BagHandleOutline,
    FileTrayStackedOutline,
    HomeOutline,
} from "react-ionicons";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
    const location = useLocation()?.pathname.replace("/", "").toLowerCase();
    const selected = {};
    selected[location] = true;
    const size = "50px";
    console.log(location);
    return (
        <Footer>
            <div className="bar">
                <Link to="/cart">
                    <BagHandleOutline
                        color={"#00000"}
                        height={size}
                        width={size}
                        cssClasses={selected["cart"] ? "selected" : ""}
                    />
                </Link>
                <Link to="/home">
                    <HomeOutline
                        color={"#00000"}
                        height={size}
                        width={size}
                        cssClasses={selected["home"] ? "selected" : ""}
                    />
                </Link>
                <Link to="/categories">
                    <FileTrayStackedOutline
                        color={"#00000"}
                        height={size}
                        width={size}
                        cssClasses={selected["categories"] ? "selected" : ""}
                    />
                </Link>
            </div>
        </Footer>
    );
};

export default BottomBar;

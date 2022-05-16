import { SearchOutline } from "react-ionicons";
import { Search } from "../styles/components";

const SearchBar = ({ placeholder, set }) => {
    const handleInput = (event) => {
        set(event.target.value);
    };

    return (
        <Search>
            <SearchOutline width="30px" height="30px" />
            <input
                type="text"
                placeholder={placeholder}
                onChange={handleInput}
            />
        </Search>
    );
};

export default SearchBar;

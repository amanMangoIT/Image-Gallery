import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./Context";

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

    return (
        <>
            <section className="toggle-container"></section>
            <button className="dark-toggle" onClick={toggleDarkTheme}>
                {isDarkTheme ? (
                    <BsFillMoonFill className="toggle-icon" />
                ) : (
                    <BsFillSunFill className="toggle-icon" />
                )}
            </button>
        </>
    );
};

export default ThemeToggle;

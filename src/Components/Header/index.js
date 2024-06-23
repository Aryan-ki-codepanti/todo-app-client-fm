import React, { useContext } from "react";
import ThemeContext from "../../Context/theme/ThemeContext";

import "./Header.css";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        if (theme === "light") setTheme(prev => "dark");
        else setTheme(prev => "light");
    };

    return (
        <div className="header">
            <h1>Todo</h1>
            <div onClick={handleThemeChange}></div>
        </div>
    );
};

export default Header;

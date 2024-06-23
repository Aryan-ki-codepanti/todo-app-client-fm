import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = ({ children }) => {
    // theme = {light , dark}
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;

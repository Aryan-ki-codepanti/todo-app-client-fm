import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import ThemeState from "./Context/theme/ThemeState";
import ThemeContext from "./Context/theme/ThemeContext";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`App ${theme}`}>
                <div className="container">
                    <Header />
                </div>
            </div>
        </>
    );
}

export default App;

import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import ThemeContext from "./Context/theme/ThemeContext";
import CreateTodo from "./Components/CreateTodo";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`App ${theme}`}>
                <div className="container">
                    <Header />
                    <CreateTodo />
                </div>
            </div>
        </>
    );
}

export default App;

import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import ThemeContext from "./Context/theme/ThemeContext";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";
import TodoFilter from "./Components/TodoFilter";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={`App ${theme}`}>
                <div className="container">
                    <Header />
                    <CreateTodo />
                    <TodoList />

                    <div className="mobile-filter">
                        <TodoFilter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

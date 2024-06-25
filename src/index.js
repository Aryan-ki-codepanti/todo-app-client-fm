import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import ThemeState from "./Context/theme/ThemeState";
import TodoState from "./Context/todo/TodoState";
import FilterState from "./Context/filter/FilterState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeState>
            <TodoState>
                <FilterState>
                    <App />
                </FilterState>
            </TodoState>
        </ThemeState>
    </React.StrictMode>
);

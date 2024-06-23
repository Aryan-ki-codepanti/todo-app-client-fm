import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import ThemeState from "./Context/theme/ThemeState";
import TodoState from "./Context/todo/TodoState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeState>
            <TodoState>
                <App />
            </TodoState>
        </ThemeState>
    </React.StrictMode>
);

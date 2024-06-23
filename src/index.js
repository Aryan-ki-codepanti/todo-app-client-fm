import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import ThemeState from "./Context/theme/ThemeState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeState>
            <App />
        </ThemeState>
    </React.StrictMode>
);

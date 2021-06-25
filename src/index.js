import React from "react";
import "normalize.css";
import "./styles/index.css";
import ThemeProvider from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

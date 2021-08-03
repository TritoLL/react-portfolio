import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyle } from "./styles/GlobalStyle";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import TicTacDogPage from "./pages/TicTacDogPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "darkTheme"
    );

    const toggleTheme = () => {
        theme === "darkTheme" ? setTheme("lightTheme") : setTheme("darkTheme");
    };

    // this happens once
    useEffect(() => {
        setTheme(
            localStorage.getItem("theme") === null
                ? "darkTheme"
                : localStorage.getItem("theme")
        );
        setTimeout(function () {
            document.getElementById("root").classList.add("transition");
        });
    }, []);

    // this happens whenever the theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home theme={theme} toggleTheme={toggleTheme} />
                    </Route>
                    <Route path="/tic-tac-dog">
                        <TicTacDogPage
                            theme={theme}
                            toggleTheme={toggleTheme}
                        />
                    </Route>
                    <Route path="/404">
                        <PageNotFound />
                    </Route>
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;

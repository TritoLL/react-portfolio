import React, { useState } from "react";
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
import PageNotFound from "./pages/PageNotFound";

function App() {
    const [theme, setTheme] = useState("darkTheme");

    const toggleTheme = () => {
        theme === "darkTheme" ? setTheme("lightTheme") : setTheme("darkTheme");
    };

    return (
        <ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home toggleTheme={toggleTheme} />
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

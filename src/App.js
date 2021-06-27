import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/404" component={PageNotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;

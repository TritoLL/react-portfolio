import React from "react";
import "normalize.css";
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
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

export default App;

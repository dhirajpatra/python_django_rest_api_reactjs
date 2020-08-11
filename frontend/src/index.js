import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch, Link,
    Route, Redirect
} from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Create from "./components/Create";


function App() {
    return (
        <Router>
            <div>
                <Layout>
                    <Switch>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/:articleId">
                            <Details />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
    return (
        <div>
            <Switch>
                {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
                <Route path="/:id">
                    <Details />
                </Route>

                {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
                {/* <Route path="/contact/:id">
                    <Contact />
                </Route>
                <Route path="/contact">
                    <AllContacts />
                </Route> */}

                {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
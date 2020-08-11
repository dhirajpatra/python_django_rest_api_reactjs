import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function Header() {
    return (
        <ul style={{ background: "#eeeeee", listStyleType: "none", padding: "20px" }}>
            <li style={{ display: "inline", padding: "20px" }}>
                <Link to="/">Home</Link>
            </li>
            <li style={{ display: "inline", padding: "20px" }}>
                <Link to="/create">Create</Link>
            </li>
        </ul>
    );
}

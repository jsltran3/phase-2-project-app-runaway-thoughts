import React from "react"; 
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact >Home</NavLink>
            <NavLink to="/tasks">Tasks</NavLink>
            <NavLink to="/supportnetwork">Support Network</NavLink>
        </div>
    );
}

export default NavBar;
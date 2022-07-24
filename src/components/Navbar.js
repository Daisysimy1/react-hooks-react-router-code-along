import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
    <NavLink to="/" exact="true" style={linkStyles} activestyle={{background: "darkblue"}}>Home</NavLink>
    <NavLink to="/about" exact="true" style={linkStyles} activestyle={{background: "darkblue"}}>About</NavLink>
    <NavLink to="/login" exact="true" style={linkStyles} activestyle={{background: "green"}}>Login</NavLink>
    <NavLink to="/messages" exact="true" style={linkStyles} activestyle={{background: "darkblue"}}>Messages</NavLink>
  </div>
  )
}

export default NavBar;
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="#">
          Logo
        </a>
        <ul>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link> */}
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

{
  /* <NavLink activeClassName="selected" to="/about">
  About
</NavLink>; */
}

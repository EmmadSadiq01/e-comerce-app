import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { nav } from "react-bootstrap";
const Navbar = () => {
const navMenu = [
  {
    title:"Home",
    path:""
  },
  {
    title:"About",
    path:"hoaboutme"
  },
  {
    title:"Shop",
    path:"shop"
  },
  {
    title:"Login",
    path:"login"
  }
]
  return (
    <nav>
      <div class="logo">
        <h4>LOGO</h4>
      </div>
      <ul className="nav-link">
        {navMenu.map((i,v)=>{
          return(

        <li className="header-Links">
          <Link to={"/"+i.path}>{i.title}</Link>
        </li>

          )
        })}
       
      </ul>
      <div className="burger ">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;

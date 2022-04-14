import React from "react";
import s from './Navbar.module.css';
import {NavLink, Link} from "react-router-dom";

const Navbar = () => {
   return (<nav className={s.nav}>
      <div className={s.item}>
         <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
         <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/News">News</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/Music">Music</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/Settings">Settings</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/Hello">Hello</NavLink>
      </div>
   </nav>);
}

export default Navbar;
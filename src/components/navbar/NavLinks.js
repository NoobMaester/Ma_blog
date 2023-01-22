import { Link, NavLink } from "react-router-dom";
import classes from './navbar.module.css'
import { useContext } from "react";
import { AuthContext } from '../../context/authContext';

const Nav = ({closeMenu}) => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className={classes.navlinks}>
      <NavLink to="/" onClick={() => closeMenu()}>Home</NavLink>
      <NavLink to="Services" onClick={() => closeMenu()} >Services</NavLink>
      <NavLink to="about" onClick={() => closeMenu()}>About Us</NavLink>
      {currentUser ? (<Link to= "/posts"> Posts</Link>) : (null)}
      <NavLink className="btn" onClick={() => closeMenu()} to="contact">
        Get in touch
      </NavLink>
    </div>
  );
};

export default Nav;

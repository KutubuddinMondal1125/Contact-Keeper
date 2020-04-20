import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
  <div className="navbar bg-primary">
      <h3>
      <i className={icon}></i> {title}
      </h3>
     <ul>
         <li>
             <Link to="/">Home</Link>
         </li>
         <li>
             <Link to="/about">About</Link>
         </li>
     </ul>  
  </div>);
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: "fa fa-id-card"
}

export default Navbar;

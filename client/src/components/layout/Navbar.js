import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ icon, title }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, userLogOut, user } = authContext;

  const onLogOut = () => {
    userLogOut();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name} </li>
      <li>
        <a href="#!" onClick={onLogOut}>
          <i className="fa fa-sign-out"></i>
          <span className="hide-sm">LogOut</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">SignUp</Link>
      </li>
      <li>
        <Link to="/login">LogIn</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h3>
        <i className={icon}></i> {title}
      </h3>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fa fa-id-card",
};

export default Navbar;

import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/auth/authContext";

const LogIn = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const {
    userLogIn,
    isAuthenticated,
    error,
    clearErrors,
    loadUser,
  } = authContext;
  const { setAlerts } = alertContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
      loadUser();
    }
    if (error === "Email is not found") {
      setAlerts(error, "danger");
      clearErrors();
    } else if (error === "Password doesn't match") {
      setAlerts(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [isAuthenticated, error, props.history]);

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlerts("Please enter all the fields", "danger");
    } else {
      userLogIn({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h2>
        User <span className="text-primary">LogIn</span>
      </h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="LogIn"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default LogIn;

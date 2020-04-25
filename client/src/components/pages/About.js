import React from "react";

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className="my-1" style={{ fontSize: "22px" }}>
        This is a Full Stack React App for Store your Contacts
      </p>
      <p className="bg-dark p-1">
        <strong>Version:</strong>
        <span className="badge badge-light">
          <strong>1.0.0</strong>
        </span>
      </p>
      <div className="bg-success my-2 p-1">
        <strong>Designed & Created by:</strong>
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <span className="badge badge-danger">Name:</span>
          <a href="https://github.com/KutubuddinMondal1125">
            <span className="badge badge-light">
              <strong>Kutubuddin Mondal</strong>
            </span>
          </a>
        </div>
        <div>
          <span className="badge badge-danger">Email:</span>
          <span className="badge badge-light">
            <strong>kutubuddin2528@gmail.com</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

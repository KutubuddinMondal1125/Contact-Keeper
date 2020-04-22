import React, { useContext } from "react";
import AlertContext from "../../context/alerts/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  const { setAlerts, alerts } = alertContext;

  return (
    <div className="form-container">
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className="fa fa-info-circle"></i> {alert.msg}
          </div>
        ))}
    </div>
  );
};

export default Alerts;

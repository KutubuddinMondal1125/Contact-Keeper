import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h4 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (type === "personal" ? "badge-success" : "badge-primary")
          }
        >
          {/* {type} */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h4>
      <ul className="list">
        {email && (
          <li>
            <i
              className="fa fa-envelope-open"
              style={{ marginRight: "4px" }}
            ></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fa fa-phone" style={{ marginRight: "4px" }}></i>
            {phone}
          </li>
        )}
      </ul>
      <button
        className="btn btn-dark btn-sm"
        style={{ marginRight: "8px" }}
        onClick={() => setCurrent(contact)}
      >
        Edit
      </button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;

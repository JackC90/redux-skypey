import React from "react";
import User from "../user/User";
import "./Sidebar.css";
import _ from "lodash";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>
  );
};

export default Sidebar;
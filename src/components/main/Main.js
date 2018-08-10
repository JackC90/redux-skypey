import React from "react";
import "./Main.css";
import Empty from "../empty/Empty";
import store from '../../store';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    const { user } = store.getState();

    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />
    } else {
      return <main className="Main">{renderMainContent()}</main>;
    };
  }

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
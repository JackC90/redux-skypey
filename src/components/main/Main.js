import React from "react";
import "./Main.css";
import Empty from "../empty/Empty";
import ChatWindow from "../../containers/chatWindow/ChatWindow";
import store from '../../store';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    const { user, activeUserId } = store.getState();

    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    };
  }

  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
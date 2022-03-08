import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar mt-5">
        <h1>
          <i className="fa fa-user">
            <span> Marco</span>
          </i>
        </h1>
        
        <button className="btn logout"><i className="fa fa-power-off" ></i> Logout</button>
      </div>

      <div className="journal__new-entry">
          <i className="fa fa-calendar-plus fa-4x"></i>
            <p className="mt-1">New entry</p>
        <button className="btn"></button>
      </div>

      <JournalEntries />
    </aside>
  );
};

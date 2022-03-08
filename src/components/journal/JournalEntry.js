import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry util-pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://vivaldi.com/wp-content/uploads/note-taking-apps-980x551.png)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-body_title">un nuevo día</p>
        <p className="journal__entry-body_content">
          asjdnsjdsd sdjkdsidsjsdjsddddddddddddjsdjds
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h2>28</h2>
      </div>
    </div>
  );
};

import React from "react";

const NotesData = ({ selectedNote }) => {
  return (
    <div>
      <h1 className="text-4xl">{selectedNote.title}</h1>
      <p className="text-xl">{selectedNote.description}</p>
    </div>
  );
};

export default NotesData;

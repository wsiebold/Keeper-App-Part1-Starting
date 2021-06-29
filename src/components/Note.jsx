import React from "react";

function Note() {
  const noteTitle = "Note Title";
  const noteContent = "Note Content";

  return (
    <div className="note">
      <h1>{noteTitle}</h1>
      <p>{noteContent}</p>
    </div>
  );
}

export default Note;

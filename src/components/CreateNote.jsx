import React, { useState } from "react";

const CreateNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);

  const submitNote = (event) => {
    event.preventDefault();
    onAdd({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleTitleChange}
          value={title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleContentChange}
          value={content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateNote;

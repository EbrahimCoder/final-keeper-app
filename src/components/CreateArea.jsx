import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleInput(event) {
    setTitle(event.target.value);
  }

  function handleContentInput(event) {
    setContent(event.target.value);
  }

  function handleClick(event) {
    props.onClickAdd(title, content);
    setTitle("");
    setContent("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitleInput}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContentInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

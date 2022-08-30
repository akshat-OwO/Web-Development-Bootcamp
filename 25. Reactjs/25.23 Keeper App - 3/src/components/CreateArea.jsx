import React from "react";

function CreateArea(props) {
  
  function handleAdd(e) {
    e.preventDefault();
    props.onAdd(props.value);
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={props.handleChange} value={props.value.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange} value={props.value.content} />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [list, setList] = useState([]);

  function handleChange(e) {
    const {name, value} = e.target;
    setNote((prev) =>{
      return {
        ...prev,
        [name]: value
      }
    });
  }

  function addNote(note){
    setList(prev => {
      return [
        ...prev,
        note
      ]
    });
    setNote({
      title: "",
      content: ""
    });
  }

  function deleteNote(id) {
    setList((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
        handleChange={handleChange} 
        value={note}
        onAdd={addNote}
      />
      {list.map((note, index) =>{
        return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;

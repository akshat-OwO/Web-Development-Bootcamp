import React, {useState} from "react";

function App() {

  const [heading, setHeading] = useState('Hello');
  const [style, setStyle] = useState({});

  const handleClick = () => {
    setHeading('Clicked');
  }

  const handleOver = () => {
    setStyle({backgroundColor: "black"});
  }

  const handleOut = () => {
    setStyle({backgroundColor: "white"});
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={handleOver} onMouseOut={handleOut} style={style}>Submit</button>
    </div>
  );
}

export default App;

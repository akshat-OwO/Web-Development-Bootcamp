import React, { useState } from "react";

function App() {

  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setHeading(name);
  }

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {heading}</h1>
        <input type="text" placeholder="What's your name?" onChange={handleChange} value={name}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

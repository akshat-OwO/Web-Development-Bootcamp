import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={setInterval}>Get Time</button>
    </div>
  );
}

export default App;

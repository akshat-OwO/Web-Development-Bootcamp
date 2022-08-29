import React, { useState } from "react";

function App() {

  const [fullName, setFName] = useState({
    fName: '',
    lName: ''
  });

  const handleChange = (e) => {
    const {value, name} = e.target;

    if(name === 'fName'){
      setFName({fName: value, lName: fullName.lName});
    } else if(name === 'lName'){
      setFName({lName: value, fName: fullName.fName});
    }
    
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange}/>
        <input name="lName" placeholder="Last Name" onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

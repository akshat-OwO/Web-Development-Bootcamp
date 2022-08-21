import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Akshat';
const lName = 'Singh';
const num = 7;

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <div>
        <h1>{`Hello ${fName} ${lName}!`}</h1>
        <p>{`Your Lucky Number is ${num}`}</p>
    </div>
);

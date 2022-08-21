import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Akshat';
const date = new Date();
const year = date.getFullYear();

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <div>
        <p>{`Created by ${name}`}</p>
        <p>{`Copyright ${year}`}</p>
    </div>
);

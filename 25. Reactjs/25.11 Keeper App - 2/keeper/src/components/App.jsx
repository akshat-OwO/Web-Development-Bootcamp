import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notes from '../notes';

const noteDetails = (note) => {
    return (
        <Note 
            key={note.id}
            title={note.title}
            content={note.content}
        />
    )
}

const App = () => {
    return (
        <div>
            <Header />
            {notes.map(noteDetails)}
            <Footer />
        </div>
    );
};

export default App;

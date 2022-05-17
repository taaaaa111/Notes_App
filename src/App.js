import { useState } from 'react';
import {nanoid} from 'nanoid';
import NoteList from './components/NoteList';


const App = () => {
    const [note, setNote] = useState([
        {
        id: nanoid(),
        text: 'this is note 1',
        date: '05/11/2022',
    },
    {
        id: nanoid(),
        text: 'this is note 2',
        date: '04/12/2022',
    },
    {
        id: nanoid(),
        text: 'this is note 3',
        date: '07/23/2020',
    },
    {
        id: nanoid(),
        text: 'this is note 4',
        date: '05/10/2022',
    },
]);

    const addNote =(text)=> {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        };
        const newNotes =[...note, newNote];
        setNote(newNotes);

    };

    return (
    <div className="container">
        <NoteList note={note} handleAddNote={addNote}/>
        
    </div>
    );
};

export default App;
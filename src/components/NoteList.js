import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({note, handleAddNote})=>{
    return (
        <div className="note-list">
            {note.map((note) =>(
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                />
            ))}
            
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NoteList; 
import {MdDeleteForever} from 'react-icons/md';
const Note =() => {
    return (
        <div className="note">
            <span>This is my first note</span>
            <div className="note-footer">
                <small>05/12/2022</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
};

export default Note;
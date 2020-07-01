import React from 'react';

import NoteListItem from '../note-list-item';
import './note-list.css';

const NoteList = () => {
    return (
        <ul className = "app-list list-group">
            <NoteListItem />
            <NoteListItem />
            <NoteListItem />
        </ul>
    )
}

export default NoteList;
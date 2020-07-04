import React from 'react';

import NoteListItem from '../note-list-item';
import './note-list.css';

const NoteList = ({ notes, onDeleteNote }) => {

    const elements = notes.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className='list-group-item'>
                <NoteListItem id={id} {...itemProps} onDeleteNote={() => onDeleteNote(id)} />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default NoteList;
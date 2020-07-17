import React from 'react';

import NoteListItem from '../note-list-item';
import './note-list.css';

const NoteList = ({ notes, onDeleteItem, onToggleLiked, onToggleImportant }) => {

    if (notes.length === 0) {
        return 'Загрузка...';
    }

    const elements = notes.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className='list-group-item'>
                <NoteListItem id={id} {...itemProps} onDeleteItem={() => onDeleteItem(id)} onToggleLiked={() => onToggleLiked(id)} onToggleImportant={() => onToggleImportant(id)} />
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
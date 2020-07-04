import React from 'react';

import './app-header.css'

const AppHeader = ({allNotes, liked}) => {
    
    return (
        <div className="app-header d-flex">
            <h1>Заметки</h1>
            <h2>{allNotes} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;
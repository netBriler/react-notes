import React from 'react';

import './note-add-form.css'

const NoteAddForm = ({onAddItem}) => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new-note-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAddItem('Hello')}
                >
                Добавить</button>
        </form>
    )
}

export default NoteAddForm;
import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import NoteStatusFilter from '../note-status-filter';
import NoteList from '../note-list';
import NoteAddForm from '../note-add-form';

import './app.css';

export default class App extends Component {

    state = {
        data: [
            { label: 'Going to learn react', important: true, id: 1 },
            { label: 'Getting food', important: false, id: 2 },
            { label: 'Training 18:20', important: false, id: 3 }
        ]
    }

    onDeleteNote = id => {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            console.log(before);
            console.log(after);

            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }


    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <NoteStatusFilter />
                </div>
                <NoteList notes={this.state.data} onDeleteNote={this.onDeleteNote}/>
                <NoteAddForm />
            </div>
        )
    }

}
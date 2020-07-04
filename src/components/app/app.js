import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import NoteStatusFilter from '../note-status-filter';
import NoteList from '../note-list';
import NoteAddForm from '../note-add-form';

import axios from 'axios';

import './app.css';

export default class App extends Component {

    state = {
        nodes: []
    }

    constructor(props) {
        super(props);
        axios.get('http://localhost:3001/nodes').then(({ data }) => {
            this.setState(() => { return { nodes: data } });
        });
    }

    deleteNote = id => {
        axios.delete(`http://localhost:3001/nodes/${id}`);
        this.setState(({ nodes }) => {
            const index = nodes.findIndex((elem) => elem.id === id);

            const before = nodes.slice(0, index);
            const after = nodes.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                nodes: newArr
            }
        });
    }

    addNode = text => {
        console.log(text);
    }


    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <NoteStatusFilter />
                </div>
                <NoteList notes={this.state.nodes} onDeleteNote={this.deleteNote} />
                <NoteAddForm onAddItem={this.addNode} />
            </div>
        )
    }

}
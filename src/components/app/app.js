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
        notes: [],
        term: '',
        filter: 'all'
    }

    constructor(props) {
        super(props);
        axios.get('http://localhost:3001/notes').then(({ data }) => {
            this.setState(() => { return { notes: data } });
        });
    }

    deleteNote = id => {
        axios.delete(`http://localhost:3001/notes/${id}`);
        this.setState(({ notes }) => {
            const index = notes.findIndex((elem) => elem.id === id);

            const before = notes.slice(0, index);
            const after = notes.slice(index + 1);

            const newArr = [...before, ...after];
            return {
                notes: newArr
            }
        });
    }

    addNode = text => {
        const newNote = {
            text: text,
            important: false,
            like: false
        }
        axios.post('http://localhost:3001/notes', newNote).then(({ data }) => {
            this.setState(({ notes }) => {
                return {
                    notes: [...notes, data]
                }
            });
        });
    }

    onToggleImportant = id => {
        this.setState(({ notes }) => {
            const index = notes.findIndex(elem => elem.id === id);

            const old = notes[index];
            const newItem = { ...old, important: !old.important };

            const newArr = [...notes.slice(0, index), newItem, ...notes.slice(index + 1)];

            axios.patch('http://localhost:3001/notes/' + id, {
                important: !old.important
            }).catch(() => {
                alert('Error');
            });
            return {
                notes: newArr
            }
        });
    }

    onToggleLiked = id => {
        this.setState(({ notes }) => {
            const index = notes.findIndex(elem => elem.id === id);

            const old = notes[index];
            const newItem = { ...old, like: !old.like };

            const newArr = [...notes.slice(0, index), newItem, ...notes.slice(index + 1)];

            axios.patch('http://localhost:3001/notes/' + id, {
                like: !old.like
            }).catch(() => {
                alert('Error');
            });

            return {
                notes: newArr
            }
        });
    }

    render() {
        const {notes} = this.state;
        const liked = notes.filter(item => item.like).length;
        const allNotes = notes.length;

        return (
            <div className='app'>
                <AppHeader allNotes={allNotes} liked={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <NoteStatusFilter />
                </div>
                <NoteList notes={this.state.notes} onDeleteItem={this.deleteNote} onToggleLiked={this.onToggleLiked} onToggleImportant={this.onToggleImportant} />
                <NoteAddForm onAddItem={this.addNode} />
            </div>
        )
    }

}
import React, { Component } from 'react';
import axios from 'axios';

import './note-list-item.css';

export default class NoteListItem extends Component {
    state = {
        important: this.props.important ? this.props.important : false,
        like: this.props.like ? this.props.like : false
    }

    onImportant = () => {
        this.setState(({ important }) => {
            axios.patch('http://localhost:3001/nodes/' + this.props.id, {
                important: !important
            }).catch(() => {
                alert('Error');
            });
            return { important: !important }
        });
    }

    onLike = () => {
        this.setState(({ like }) => {
            axios.patch('http://localhost:3001/nodes/' + this.props.id, {
                like: !like
            }).catch(() => {
                alert('Error');
            });
            return { like: !like }
        });
    }

    render() {
        const { label, onDeleteNote } = this.props,
            { important, like } = this.state;

        console.log(this.props);

        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button className="btn-trash btn-sm" onClick={onDeleteNote}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart" onClick={this.onLike}></i>
                </div>
            </div>
        )
    }
}
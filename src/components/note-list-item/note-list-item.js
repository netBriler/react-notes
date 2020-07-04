import React, { Component } from 'react';

import './note-list-item.css';

export default class NoteListItem extends Component {
    state = {
        important: this.props.important ? this.props.important : false,
        like: false
    }

    onImportant = () => {
        this.setState(({ important }) => {
            return { important: !important }
        });
    }

    onLike = () => {
        this.setState(({ like }) => {
            return { like: !like }
        });
    }

    render() {
        const { label, onDeleteNote } = this.props,
            { important, like } = this.state;

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
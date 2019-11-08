import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  onMarkImportant = (e) => {
    e.stopPropagation();
    this.props.onMarkImportant(e);
  };
  
  onDelete = (e) => {
    e.stopPropagation();
    this.props.onDelete(e);
  };

  render() {
    const { text, done, important, onLabelClick } = this.props;
    
    let classNames = ['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'];

    if (done) classNames.push('done');
    if (important) classNames.push('important');

    return (
        <li className = {classNames.join(' ')}
            onClick = {onLabelClick}>
          <span className="todo-list-item__label">{ text }</span>
          <div className="list-item-buttons">
            <button className="btn btn-outline-danger mx-2"
                    onClick = {this.onDelete}>
              <i className="fa fa-trash"></i>
            </button>
            <button className="btn btn-outline-success"
                    onClick = {this.onMarkImportant}>
              <i className="fa fa-exclamation"></i>
            </button>
          </div>
        </li>
    );
  }
};
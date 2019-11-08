import React from 'react';

import TodoListItem from "../todo-list-item";

import './todo-list.css';


const TodoList = ({ labels, onMarkDone, onMarkImportant, onDelete }) => {

  const listItems = labels.map(item => {
    const {id, ...itemProps} = item;
    return <TodoListItem
              {...itemProps }
              key={id}
              onLabelClick={() => onMarkDone(id)}
              onMarkImportant={() => onMarkImportant(id)}
              onDelete={() => onDelete(id)}
            />;
  });

  return (
      <div className="row mt-3 todo-list">
        <div className="col">
          <ul className="list-group">
            { listItems }
          </ul>
        </div>
      </div>
  );
};

export default TodoList;
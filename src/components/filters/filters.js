import React from 'react';

import './filters.css';

const Filters = ({ keyword, is_done, onKeywordChange, onDoneChange, onResetFilters }) => {

  const buttons = [
    { type: 'all', label: 'All' },
    { type: 'active', label: 'Active' },
    { type: 'done', label: 'Done' }
  ];

  const renderedButtons = buttons.map(({ label, type }) => {
    const clazz = is_done === type ? 'btn-primary' : 'btn-outline-primary';
    return (
        <button
            className={`btn ${clazz}`}
            onClick={ () => onDoneChange(type) }
            key={type}>{ label }</button>
    )
  });

  return (
      <div className="row filters mt-3">
        <div className="col">
          <div className="d-flex justify-content-between">
            <input type="text"
                   className="form-control"
                   placeholder="Enter keyword"
                   onChange={ onKeywordChange }
                   value={ keyword } />
            <div className="btn-group ml-3">{ renderedButtons }</div>

            <button className="btn btn-danger text-nowrap ml-3"
                    onClick={ onResetFilters }>Reset filters</button>
          </div>
        </div>
      </div>
  );
}

export default Filters;
import React from 'react';

import './app-header.css';

const AppHeader = ({ in_progress, done }) => {
  return (
    <div className="row mt-5 app-header">
      <div className="col">
        <div className="d-flex justify-content-between align-items-end">
          <h1>My Todo list</h1>
          {
            (in_progress || done) ? (
                <h2 className="text-secondary">{ in_progress } more to do, { done } done</h2>
            ) :
            ('')
          }
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
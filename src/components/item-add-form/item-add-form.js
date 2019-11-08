import React from 'react';

import './item-add-form.css';


export default class ItemAddForm extends React.Component {

  state = {
    text: ''
  };

  onLabelChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewItem(this.state.text);

    this.setState({
      text: ''
    })
  };

  render() {
    const { text } = this.state;

    return (
        <div className="row">
          <div className="col">
            <form className="d-flex justify-content-between align-items-center mt-3 item-add-form"
                  onSubmit={this.onSubmit}>
              <input type="text"
                     className="form-control input-add-task"
                     placeholder="Enter new task"
                     onChange={this.onLabelChange}
                     value={text}/>
              <button className="btn btn-success ml-3">Add task</button>
            </form>
          </div>
        </div>
    );
  }
};
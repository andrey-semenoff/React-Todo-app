import React, { Component } from 'react';

import AppHeader from '../app-header';
import Filters from '../filters';
import TodoList from '../todo-list';
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css';

export default class App extends Component {

  maxId = 1;

  state = {
    labels: [
        this.createNewLabel('Drink coffee'),
        this.createNewLabel('Create awesome Todo app'),
        this.createNewLabel('Have a lunch'),
    ],
    filters: {
      keyword: '',
      is_done: 'all',
    }
  };


  createNewLabel(text) {
    return {
      text,
      done: false,
      important: false,
      id: this.maxId++
    }
  };

  getProgressItems = () => {
    return this.state.labels.filter(item => !item.done).length;
  };

  getDoneItems = () => {
    return this.state.labels.filter(item => item.done).length;
  };

  onMarkDone = (id) => {
    this.toggleProp(id, 'done');
  };

  onMarkImportant = (id) => {
    this.toggleProp(id, 'important');
  };

  toggleProp(id, prop) {
    this.setState(({ labels }) => {
      const updatedLabels = labels.map(label => {
        if( label.id === id ) {
          label[prop] = !label[prop];
        }
        return label;
      });

      return {
        labels: updatedLabels
      }
    })
  };

  onDelete = (id) => {
    this.setState(({ labels }) => {
      const updatedLabels = labels.filter(label => {
        return label.id !== id;
      });

      return {
        labels: updatedLabels
      }
    })
  };

  onAddItem = (text) => {
    this.setState(({ labels }) => {
      const updatedLabels = labels.slice(),
            newLabel = this.createNewLabel(text);
      updatedLabels.unshift(newLabel);

      return {
        labels: updatedLabels,
        filteredLabels: updatedLabels
      }
    } )
  };

  onKeywordChange = (e) => {
    const value = e.target.value;
    this.setState(({ filters }) => {
      return {
        filters: {...filters,
            keyword: value
        }
      }
    });
  };

  onDoneChange = (is_done) => {
    this.setState(({ filters }) => {
      return {
        filters: {...filters,
          is_done
        }
      }
    });
  };

  filterLabels() {
    const { labels, filters } = this.state;

    return labels.filter(label => {
      return label.text.toLowerCase().indexOf(filters.keyword.toLowerCase()) > -1 &&
             (filters.is_done === 'all' || (label.done === true && filters.is_done === 'done') ||
                                           (label.done === false && filters.is_done === 'active'));
    });
  }

  onResetFilters = () => {
    this.setState({
      filters: {
        keyword: '',
        is_done: null
      }
    });
  };

  render() {
    const { filters } = this.state;
    const filteredLabels = this.filterLabels();
    
    return (
        <div className="container">
          <AppHeader
              in_progress={this.getProgressItems()}
              done={this.getDoneItems()}/>

          { this.state.labels.length ? (
              <div>
                <Filters
                    {...filters}
                    onKeywordChange={this.onKeywordChange}
                    onDoneChange={this.onDoneChange}
                    onResetFilters={this.onResetFilters}/>
                <TodoList
                    labels={filteredLabels}
                    onMarkDone = {this.onMarkDone}
                    onMarkImportant = {this.onMarkImportant}
                    onDelete = {this.onDelete} />
              </div>
          ) : (
           <p className="text-danger">No tasks yet!</p>
          )}

          <ItemAddForm addNewItem={this.onAddItem}/>
        </div>
    );
  }
}
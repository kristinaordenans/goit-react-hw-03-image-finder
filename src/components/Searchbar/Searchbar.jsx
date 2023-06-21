import css from "./Searchbar.module.css";
import React, { Component } from 'react';

export class Searchbar extends Component{

  state = {
    searchRequest: '',
  }

  handleChange = ({target:{value}}) => {
    this.setState({ value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

    render() {return (
        <header className={css.searchbar}>
        <form className={css.form}
          omSubmit={this.handleSubmit}
        >
                <button type="submit" className={css.button}>
                <span className={css.buttonLabel}>Search</span>
                </button>
              <input
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            searchRequest={this.state.searchRequest}
              />
            </form>
          </header>
    )}
}
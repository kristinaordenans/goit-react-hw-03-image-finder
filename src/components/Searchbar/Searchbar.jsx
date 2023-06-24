import css from "./Searchbar.module.css";
import { Component } from "react";
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { SearchbarCSS, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
// import PropTypes from "prop-types"

export class Searchbar extends Component {
    state = {
        searchWord: '',
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { handleSubmit } = this.props;
        const { searchWord } = this.state;
        
        if (searchWord.trim() === '') {
            return ('The field cannot be empty. Please enter a search query')
        }

        handleSubmit(searchWord);
        this.setState({searchWord: ''})
    }

    render() {
        const { searchWord } = this.state;
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        onChange={this.handleChange}
                        name="searchWord"
                        value={searchWord}
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}


// ______________________-

// import React, { Component } from 'react';

// export class Searchbar extends Component{

//   state = {
//     searchRequest: '',
//   }

//   handleChange = ({target:{value}}) => {
//     this.setState({value});
//     // console.log(value);
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//   }

//   render() {
    
//     return (
//         <header className={css.searchbar}>
//         <form className={css.form} onClick={this.handleSubmit}>
//                 <button type="submit" className={css.button}>
//                 <span className={css.buttonLabel}>Search</span>
//                 </button>
//               <input
//                 className={css.input}
//                 type="text"
//                 autoComplete="off"
//                 autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             searchRequest={this.searchRequest}
//               />
//             </form>
//           </header>
//     )}
// }
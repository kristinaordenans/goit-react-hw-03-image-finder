import React from "react";
import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

export class App extends Component {

  state = {
    images: [],
    total: 0,
    largeImageURL: '',
    alt: '',
    loading: false,
    showModal: false,
  }

   toggleModal = () =>{
     this.setState(({ showModal }) => ({
       showModal: !showModal,
     }));
   }
  
  // handleSubmit = () => {
    
  // }

  // componentDidMount() {
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=35192963-4124dd642b3fb461106fa319d&image_type=photo&orientation=horizontal&per_page=20')
  //     .then(res => res.json())
  //     .than(images => this.setState({images}));
  // }

  render() {
    const { showModal } = this.state;
    
    return (
    <div>
      <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery />
        {showModal && <Modal onClose={this.toggleModal} />}
      <Button/> 
    </div>
    );
  }
};

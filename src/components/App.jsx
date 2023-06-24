import React from "react";
import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PixabayAPI } from './FetchPic/FetchPic';
import { LoadMoreBtn } from './Button/Button';
import css from "./App.module.css";


const pixabayAPI = new PixabayAPI(); 

export class App extends Component{
  state = {
    keyWord: '',
    isLoading: false,
    error: false,
    images: [],
    page: 1,
    hasMore: false,
    showModal: false,
  }

  // togleModal = () =>{
  //    this.setState(({ showModal }) => ({
  //      showModal: !showModal,
  //    }));
  //  }

  handleSearchImg = searchWord => {
    this.setState({
      keyWord: searchWord,
      page: 1,
    })
  }

  hamdleLoadMoreButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }


  componentDidUpdate = async (_, prevState) => {
    const { keyWord, page } = this.state;
    if (prevState.keyWord !== keyWord || prevState.page !== page) {

      pixabayAPI.q = keyWord.trim();
      pixabayAPI.page = page;

      try { 
        if (prevState.keyWord !== keyWord) {
          this.setState({
            images: [],
          })
        }
        
        this.setState({
          error: false,
          isLoading: true,
        })

        const { data: { totalHits, hits } } = await pixabayAPI.fetchPhotos()
          if (totalHits > 0) {
            const newHits = hits.map(({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL }))
            this.setState(pverState => ({
              images: [...pverState.images, ...newHits],
            }))

          const totalPage = Math.ceil(totalHits / pixabayAPI.perPage);
          this.setState({hasMore: totalPage !== page,})
        }
      }
      catch (error) {
        this.setState({
          error,
          images: [],
          hasMore: false,
        })
      } finally {
        this.setState({ isLoading: false })
      };
    }
  }
  
  render() {
    const { images, error, hasMore } = this.state;
    return (
      <div>
        <Searchbar handleSubmit={this.handleSearchImg} />
        <div className={css.container}>
          {!error && <ImageGallery images={images}/>}
          {hasMore && <LoadMoreBtn handleClick={this.hamdleLoadMoreButton} />}
        </div>
      </div>
  );
  }
};
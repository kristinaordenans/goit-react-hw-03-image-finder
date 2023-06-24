import React from "react";
import { Component } from 'react';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Searchbar} from './Searchbar/Searchbar';
// import { ToastContainer } from 'react-toastify';
// import { Component } from 'react';
import { PixabayAPI } from './FetchPic/FetchPic';
// import { LoaderWrapper, LoaderCSS } from './Loader/Loader.styled';
// import { ErrorMessage } from './ErrorMessage.styled';
import { LoadMore } from './Button/Button'
// import { Container } from './App.styled';
// import { Button } from "./Button/Button";
// import { Modal } from "./Modal/Modal";
// import { fetchPic } from "./FetchPic/FetchPic";

// ______________

const pixabayAPI = new PixabayAPI(); 

export class App extends Component{
  state = {
    keyWord: '',
    isLoading: false,
    error: false,
    res: [],
    page: 1,
    hasMore: false,
  }

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
            res: [],
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
              res: [...pverState.res, ...newHits],
            }))

          const totalPage = Math.ceil(totalHits / pixabayAPI.perPage);
          this.setState({hasMore: totalPage !== page,})
        } else {
          throw new Error(`Nothing was found for your query "${keyWord}".`)
        }
      }
      catch (error) {
        this.setState({
          error,
          res: [],
          hasMore: false,
        })
      } finally {
        this.setState({ isLoading: false })
      };
    }
  }
  
  render() {
    const { isLoading, res, error, hasMore } = this.state;
    return (
      <div>
        <Searchbar handleSubmit={this.handleSearchImg} />
        {/* {isLoading && <LoaderWrapper>                 
                        <LoaderCSS />
                      </LoaderWrapper>
        } */}
          {/* {error && <ErrorMessage>{error.message}</ErrorMessage>} */}
          {!error && <ImageGallery res={res} />}
          {hasMore && <LoadMore handleClick={this.hamdleLoadMoreButton} />}
      </div>
  );
  }
};

// ______________

// export class App extends Component {

//   state = {
//     images: [],
//     total: 0,
//     largeImageURL: '',
//     alt: '',
//     loading: false,
//     showModal: false,
//   }

//    toggleModal = () =>{
//      this.setState(({ showModal }) => ({
//        showModal: !showModal,
//      }));
//    }
  
//   handleSearchImg = searchWord => {
//     this.setState({
//       keyWord: searchWord,
//       page: 1,
//     })
//   }

//   hamdleLoadMoreButton = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   }

//   componentDidUpdate = async (_, prevState) => {
//     const { keyWord, page } = this.state;
//     if (prevState.keyWord !== keyWord || prevState.page !== page) {

//       fetchPic.q = keyWord.trim();
//       fetchPic.page = page;

//       try { 
//         if (prevState.keyWord !== keyWord) {
//           this.setState({
//             images: [],
//           })
//         }
        
//         this.setState({
//           error: false,
//           isLoading: true,
//         })

//         const { data: { totalHits, hits } } = await fetchPic.fetchPic()
//           if (totalHits > 0) {
//             const newHits = hits.map(({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL }))
//             this.setState(pverState => ({
//               images: [...pverState.images, ...newHits],
//             }))

//           const totalPage = Math.ceil(totalHits / fetchPic.perPage);
//           this.setState({hasMore: totalPage !== page,})
//         } else {
//           throw new Error(`Nothing was found for your query "${keyWord}".`)
//         }
//       }
//       catch (error) {
//         this.setState({
//           error,
//           res: [],
//           hasMore: false,
//         })
//       } finally {
//         this.setState({ isLoading: false })
//       };
//     }
//   }
  
  
  

//   render() {
//     const { showModal } = this.state;
//     const { isLoading, images, error, hasMore } = this.state;

    
//     return (
//     <div>
//       <Searchbar onSubmit={this.handleSubmit}/>
//         {/* <ImageGallery /> */}
//         {!error && <ImageGallery images={images} />}
//         {hasMore && <Button onClick={this.hamdleLoadMoreButton} />}
//         {showModal && <Modal onClose={this.toggleModal} />}
//       <Button/> 
//     </div>
//     );
//   }
// };



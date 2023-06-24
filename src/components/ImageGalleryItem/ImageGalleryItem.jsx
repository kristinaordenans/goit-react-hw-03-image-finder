import css from "./ImageGalleryItem.module.css";
import { Component } from "react"
import { Modal } from "./Modal/Modal"
// import PropTypes from "prop-types"

export class ImageGalleryItem extends Component {
    state = {
        visibleModal: false,
    }
    
    handleClick() {
        this.setState({
            visibleModal: true,
        })
    }

    handleKeyDown = isVisible => {
            this.setState({
                visibleModal: isVisible,
            })
        }
    
    handleClickOnOverlay = e => {
        if (e.target !== e.currentTarget) { 
            return
        }
        this.setState({
            visibleModal: false,
        })
    }

    render() {
        const { smallImg, largeImg } = this.props;
        const { visibleModal } = this.state;
        return (
        <li className={css.galleryItem}>
                <img onClick={() => this.handleClick()} src={smallImg} alt={`name: ${smallImg}`} />
                {visibleModal && <Modal handleOnKeyDown={this.handleKeyDown} escapeFromModal={this.handleClickOnOverlay} srcLarge={largeImg} altText={smallImg} />}
        </li>
    )
    }
}

// _________

// import { Component } from "react"
// import { Modal } from "components/Modal/Modal";

// export class ImageGalleryItem extends Component {
// state = {
//         visibleModal: false,
// }
    
//     handleClick() {
//         this.setState({
//             visibleModal: true,
//         })
//     }

//      handleKeyDown = isVisible => {
//             this.setState({
//                 visibleModal: isVisible,
//             })
//         }
    
//     handleClickOnOverlay = e => {
//         if (e.target !== e.currentTarget) { 
//             return
//         }
//         this.setState({
//             visibleModal: false,
//         })
//     }

//     render() {
//         const { smallImg, largeImg } = this.props;
//         const { visibleModal } = this.state;
//         return (
//        <li className={css.galleryItem}>
//                 <img onClick={() => this.handleClick()} src={smallImg} alt={`name: ${smallImg}`}/>
//                 {visibleModal && <Modal handleOnKeyDown={this.handleKeyDown} escapeFromModal={this.handleClickOnOverlay} srcLarge={largeImg} altText={smallImg} />}
//        </li>
//     )}
// }
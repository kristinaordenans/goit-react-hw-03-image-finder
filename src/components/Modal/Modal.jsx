import css from "./Modal.module.css"
// import React, { Component } from 'react'

import { Component } from "react"
// import { ModalOrevlay, ModalWindow } from "./Modal.styled"
// import PropTypes from "prop-types"

export class Modal extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = e => {
        const { handleOnKeyDown } = this.props;
            if (e.key === "Escape") {
            handleOnKeyDown(false);
        }
    };

    render() {
        const { srcLarge, altText, escapeFromModal } = this.props;
      return (
          <div className={css.overlay} onClick={this.handleBackDropClick}>
              <div className={css.modal}>
                <img src={srcLarge} alt={`name: ${altText}`} />
            </div>
          </div>
      )  
    }
}



// ____________________

// import { createPortal } from "react-dom";

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown)
//   }
  
//   componentWillUnmount() {
//     window.removeEventListener('keydown',this.handleKeyDown)
//   }

//   handleKeyDown = (e) => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   }

//   handleBackDropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   }

//   render() { 
//     const { srcLarge, altText } = this.props;

//     return createPortal(
//       <div className={css.overlay} onClick={this.handleBackDropClick}>
//         <div className={css.modal}>
//           <img src={srcLarge} alt={`name: ${altText}`}/>
//         </div>
//       </div>, modalRoot
//     );
// }
// }


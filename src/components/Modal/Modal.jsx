import css from "./Modal.module.css"
import React, { Component } from 'react'
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown',this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() { 
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackDropClick}>
        <div className={css.modal}>
          <img src="" alt="" />
        </div>
      </div>, modalRoot
    );
}
}


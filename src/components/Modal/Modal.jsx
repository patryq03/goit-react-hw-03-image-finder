import { BasicLightBox } from 'basiclightbox';
import css from './Modal/Modal.module.css';
import propTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {

    
  render() {
    return (
      <div class={css.overlay}>
        <div class={css.modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

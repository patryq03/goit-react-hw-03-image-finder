import css from './Modal.module.css';

const Modal = ({handleClick, src}) => {

    return (
      <div class={css.overlay} onClick={handleClick}>
        <div class={css.modal}>
          <img src={src} alt="" />
        </div>
      </div>
    );
  };


export default Modal;
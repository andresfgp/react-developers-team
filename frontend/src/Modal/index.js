import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/Modal.scss';

const Modal = (props) => {
  const { children } = props;
  return ReactDOM.createPortal(
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className='ModalBackground'>{children}</div>,
    document.getElementById('modal'),
  );
};

export default Modal;

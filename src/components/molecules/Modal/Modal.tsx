import React from 'react';
import { createPortal } from 'react-dom';

interface IModal {
  children: React.ReactElement;
  wrapperId: string;
}

const Modal = ({ children, wrapperId = 'modal-root' }: IModal) => {
  const element = document.getElementById(wrapperId);
  return createPortal(<div>{children}</div>, element!);
};

export default Modal;

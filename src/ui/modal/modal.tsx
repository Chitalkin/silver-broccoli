import React from 'react';
import styled, { css } from 'styled-components';
import { fadeIn, fadeOut, slideIn, slideOut } from '@/styles/animations';

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalOverlay = styled.div<Pick<ModalProps, 'visible'>>`
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  animation: ${(props) =>
    props.visible
      ? css`
          ${fadeIn} 0.3s cubic-bezier(0, 0, 0.2, 1) forwards
        `
      : css`
          ${fadeOut} 0.3s cubic-bezier(0, 0, 0.2, 1) forwards
        `};

  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
`;

const ModalInner = styled.div<Pick<ModalProps, 'visible'>>`
  animation: ${(props) =>
    props.visible
      ? css`
          ${slideIn} 0.3s cubic-bezier(0, 0, 0.2, 1)
        `
      : css`
          ${slideOut} 0.3s cubic-bezier(0, 0, 0.2, 1)
        `};

  position: relative;
  z-index: 10001;
  width: 100%;
  max-width: 550px;
  padding: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
  will-change: transform;
`;

export const Modal: React.FC<ModalProps> = ({ children, visible, onClose }) => {
  const handleStopPropagation = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
  };

  return (
    <ModalOverlay
      data-testid="base-modal-overlay"
      onClick={onClose}
      visible={visible}
    >
      <ModalInner
        data-testid="base-modal-content"
        onClick={handleStopPropagation}
        visible={visible}
      >
        {children}
      </ModalInner>
    </ModalOverlay>
  );
};

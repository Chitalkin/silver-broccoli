import React, { useState } from 'react';
import { Modal } from '@/ui/modal';
import { LoginForm, LoginFormProps, LoginFormData } from '../../login-form';

interface LoginModalProps extends LoginFormProps {
  afterClose?: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  onSubmit,
  afterClose,
}) => {
  const [show, setIsShow] = useState(true);

  const handleClose = () => {
    if (show) {
      setIsShow(false);
      afterClose?.();
    }
  };

  const handleSubmit = (data: LoginFormData) => {
    onSubmit?.(data);
    handleClose();
  };

  return (
    <Modal visible={show} onClose={handleClose}>
      <LoginForm onSubmit={handleSubmit} />
    </Modal>
  );
};

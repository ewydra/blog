import React, { useState } from 'react';
import SnackbarContext from './SnackbarContext';
import Snackbar from './Snackbar';

export const SnackbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('success')

  const showSnackbar = (message, status) => {
    setIsOpen(true)
    setMessage(message)
    setStatus(status)
    setTimeout(() => setIsOpen(false), 3000);
  };

  return (
    <SnackbarContext.Provider
      value={{isOpen, message, status, showSnackbar}}
    >
      <Snackbar />
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarProvider;

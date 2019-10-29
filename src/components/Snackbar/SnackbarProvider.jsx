import React, { useState, useCallback, useMemo } from 'react';
import SnackbarContext from './SnackbarContext';
import Snackbar from './Snackbar';

export const SnackbarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('success')

  const showSnackbar = useCallback((message, status) => {
    setIsOpen(true)
    setMessage(message)
    setStatus(status)
    setTimeout(() => setIsOpen(false), 3000);
  }, []);

  const value = useMemo(() => ({
    isOpen,
    message,
    status,
    showSnackbar,
  }), [isOpen, message, status, showSnackbar])

  return (
    <SnackbarContext.Provider value={value}>
      <Snackbar />
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarProvider;

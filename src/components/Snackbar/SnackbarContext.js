import React from 'react';

const SnackbarContext = React.createContext({
  message: '',
  isOpen: false,
  showSnackbar: () => {},
  status: 'success',
});

export default SnackbarContext;

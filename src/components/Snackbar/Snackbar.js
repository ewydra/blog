import React from 'react';
import classnames from 'classnames';
import SnackbarContext from './SnackbarContext';

const getClasses = status => (
  classnames(
    'snackbar',
    { 'snackbar--error': status === 'error' },
    { 'snackbar--success': status === 'success' }
  )
);

const Snackbar = () => (
  <SnackbarContext.Consumer>
    {({ isOpen, message, status }) => isOpen && (
      <div className={getClasses(status)}>
        {message}
      </div>
    )}
  </SnackbarContext.Consumer>
);

export default Snackbar;

import React from 'react';
import classnames from 'classnames';
import { SnackbarConsumer } from './SnackbarContext';

const getClasses = status => (
  classnames(
    'Snackbar',
    { 'Snackbar--error': status === 'error' },
    { 'Snackbar--success': status === 'success' }
  )
);

const Snackbar = () => (
  <SnackbarConsumer>
    {({ isOpen, message, status }) => isOpen && (
      <div className={getClasses(status)}>
        {message}
      </div>
    )}
  </SnackbarConsumer>
);

export default Snackbar;

import React from 'react';
import Spinner from './Spinner';

const withLoading = WrappedComponent => {
  return ({ isLoading, ...props }) => {
    if (isLoading === true) return <Spinner />;
    return <WrappedComponent {...props} />
  }
}

export default withLoading;

import React, { Component } from 'react';
import Snackbar from './Snackbar';

export const SnackbarContext = React.createContext({
  message: '',
  isOpen: false,
  showSnackbar: () => {},
  status: 'success',
});

export class SnackbarProvider extends Component {
  showSnackbar = (message, status) => {
    this.setState({
      message,
      status,
      isOpen: true,
    });
    setTimeout(() => this.setState({ isOpen: false}), 3000);
  };

  state = {
    isOpen: false,
    message: '',
    status: 'success',
    showSnackbar: this.showSnackbar,
  };

  render() {
    const { children } = this.props;

    return (
      <SnackbarContext.Provider value={this.state}>
        <Snackbar />
        {children}
      </SnackbarContext.Provider>
    );
  }
}

export const SnackbarConsumer = SnackbarContext.Consumer;

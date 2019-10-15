import React, { Component } from 'react';
import Snackbar from './Snackbar';

export const SnackbarContext = React.createContext();

export class SnackbarProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      message: '',
      status: 'success',
    };
  }

  showSnackbar = (message, status) => {
    this.setState({
      message,
      status,
      isOpen: true,
    });
    setTimeout(() => this.setState({ isOpen: false}), 3000);
  };

  render() {
    const { children } = this.props;

    return (
      <SnackbarContext.Provider
        value={{
          showSnackbar: this.showSnackbar,
          isOpen: this.state.isOpen,
          message: this.state.message,
          status: this.state.status,
        }}
      >
        <Snackbar />
        {children}
      </SnackbarContext.Provider>
    );
  }
}

export const SnackbarConsumer = SnackbarContext.Consumer;

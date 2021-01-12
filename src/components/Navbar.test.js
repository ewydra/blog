import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from "react-router";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import { NetworkConnectionProvider } from '../contexts/NetworkConnectionContext';

const store = configureStore([
  thunk,
])({
  users: {
    isLoggedIn: true,
    loading: false,
    error: null
  }
});

describe('Navbar', () => {
  it('should include links to home page and new article page', () => {                                       
    const component = mount(
      <Provider store={store}>
        <NetworkConnectionProvider>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </NetworkConnectionProvider>
      </Provider>
    );
    expect(component).toContainReact(<Link className="navbar__link" to={{ pathname: "/" }}>Home page</Link>);
    expect(component).toContainReact(<Link className="navbar__link" to={{pathname: "/article/new" }}>New article</Link>);
  });
});

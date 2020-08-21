import React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from "react-router";
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
  });

  it('should include links to home page and new article page', () => {                                       
    const component = mount(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(component).toContainReact(<Link className="navbar__link" to="/">Home page</Link>);
    expect(component).toContainReact(<Link className="navbar__link" to="/article/new">New article</Link>);
  });
});

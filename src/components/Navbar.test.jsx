import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render correctly', () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
  });

  it('should include links to home page and new article page', () => {                                       
    const component = mount(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(component).toContainReact(<Link className="Navbar__link" to="/">Home page</Link>);
    expect(component).toContainReact(<Link className="Navbar__link" to="/article/new">New article</Link>);
  });
});

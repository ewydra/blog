import React from 'react';
import { shallow } from 'enzyme';
import AddArticlePage from './AddArticlePage';

describe('AddArticlePage', () => {
  it('should render correctly', () => {
    const component = shallow(<AddArticlePage />);
    expect(component).toMatchSnapshot();
  });
});

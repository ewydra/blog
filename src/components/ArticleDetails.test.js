import React from 'react';
import { shallow } from 'enzyme';
import { ArticleDetails } from './ArticleDetails';

const setup = () => {
    const article = 
      { 
        id: 1,
        title: 'Article one',
        date: 'January 1, 2019 13:00:00',
        abstract: 'Test abstract',
        text: 'Test text'
      };
    return { article };
  }

describe('ArticleDetails', () => {
  const props = setup();
  it('should render correctly with passed props', () => {
    const component = shallow(<ArticleDetails {...props} />);
    expect(component.text()).toContain(props.article.title);
    expect(component.text()).toContain(props.article.date);
    expect(component.text()).toContain(props.article.text);
  });
});

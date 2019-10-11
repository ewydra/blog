import React from 'react';
import { shallow } from 'enzyme';
import ArticleListItem from './ArticleListItem';

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

describe('ArticleListItem', () => {
  const props = setup();
  it('should render correctly with passed props', () => {
    const component = shallow(<ArticleListItem {...props} />);
    expect(component.text()).toContain(props.article.title);
    expect(component.text()).toContain(props.article.date);
    expect(component.text()).toContain(props.article.abstract);
  });
});

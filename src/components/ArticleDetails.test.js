import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ArticleDetails } from './ArticleDetails';
import { Provider } from 'react-redux';

const article = {
  id: 1,
  title: 'Article one',
  date: 'January 1, 2019 13:00:00',
  abstract: 'Test abstract',
  text: 'Test text',
  comments: []
}

const store = configureStore([
  thunk,
])({
  article: {
    article,
    isLoading: false,
    error: null,
  }
});

const setup = () => {
  return { match: { params: { id: 1 }} };
}

describe('ArticleDetails', () => {
  const props = setup();
  it('should render correctly with passed props', () => {
    const component = mount(<Provider store={store}><ArticleDetails {...props} /></Provider>);
    expect(component.text()).toContain(article.title);
    expect(component.text()).toContain(article.date);
    expect(component.text()).toContain(article.text);
  });
});

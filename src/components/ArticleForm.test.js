import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { ArticleForm } from './ArticleForm';
import { NetworkConnectionProvider } from '../contexts/NetworkConnectionContext';

const store = configureStore([
  thunk,
])();

const setupData = () => ({
  addArticle: jest.fn(),
  history: { push: jest.fn() },
});

const setupComponent = (props) => {
  return mount(
  <NetworkConnectionProvider>
    <ArticleForm store={store} {...props} />
    </NetworkConnectionProvider>
  );
}

describe('ArticleForm', () => {
  it('should update inputs when they are changed', () => {
    const props = setupData();
    const component = setupComponent(props);
    component.find('#title').simulate('change', {
      target: { name: 'title', value: 'title' },
    });
    component.find('#abstract').simulate('change', {
      target: { name: 'abstract', value: 'abstract' },
    });
    component.find('#text').simulate('change', {
      target: { name: 'text', value: 'text' },
    });

    expect(component.find('#title').props().value).toEqual('title');
    expect(component.find('#abstract').props().value).toEqual('abstract');
    expect(component.find('#text').props().value).toEqual('text');
  });

  it('should disable button when submitting', () => {
    const props = setupData();
    const component = setupComponent(props);
    component.find('button[type="submit"]').simulate('click');
    expect(component.find('button[type="submit"]').props().disabled).toBe(true)
  })
 
  it('should show error messages when submitting empty form', async () => {
    const props = setupData();
    const component = setupComponent(props);
    component.find('button[type="submit"]').simulate('click');
    
    await new Promise(resolve => setTimeout(resolve, 0));
    component.update();

    const errors = component.find('.text-field__message--error');
    expect(errors).toHaveLength(3);
    expect(component.update().find('button[type="submit"]').props().disabled).toBe(false);
  })
});

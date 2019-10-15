import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { ArticleForm } from './ArticleForm';

const store = configureStore([
  thunk,
])();

const submit = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

const setup = () => ({
  addArticle: jest.fn(),
  history: { push: jest.fn() },
});

describe('ArticleForm', () => {
  let component;
  beforeEach(() => {
    const props = setup();
    component = mount(<ArticleForm store={store} {...props} />);
  });
  afterEach(() => {
    component.unmount();
  });

  it('should update inputs when they are changed', () => {
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
    component.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(component.find('button[type="submit"]').props().disabled).toBe(true)
  })
 
  it('should show error messages when submitting empty form', async () => {
    component.find('form').simulate('submit', {
      preventDefault: () => {}
    });

    await submit();
    component.update();

    const errors = component.find('.Text-field__message--error');
    expect(errors).toHaveLength(3);
    expect(component.update().find('button[type="submit"]').props().disabled).toBe(false);
  })
});

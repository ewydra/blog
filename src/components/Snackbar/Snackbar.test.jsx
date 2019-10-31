import React from 'react';
import { mount } from 'enzyme';
import Snackbar from './Snackbar';

const mockContext = jest.fn();
jest.mock('./SnackbarContext', () => ({
  Consumer: ({ children }) => children(mockContext()),
}));

const setup = () => {
  const isOpen = true;
  const message = 'Test';
  const status = 'success';
  return { isOpen, message, status };
}

describe('Snackbar', () => {
  beforeEach(() => {
    mockContext.mockReset();
  });

  it('should pass proper context to Snackbar div', () => {
    const contextValues = setup();
    mockContext.mockReturnValue(contextValues);

    const component = mount(<Snackbar />);

    expect(component.find('div').prop('children')).toEqual('Test');
    expect(component.find('div').hasClass('Snackbar--success')).toEqual(true);
  })

  it('should not be displayed when isOpen is false', () => {
    const contextValues = setup();
    contextValues.isOpen = false;
    mockContext.mockReturnValue(contextValues);

    const component = mount(<Snackbar />);

    expect(component.find('div')).not.toExist();
  })
})

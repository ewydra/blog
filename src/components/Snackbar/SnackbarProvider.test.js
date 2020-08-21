import React from 'react';
import { mount } from 'enzyme';
import SnackbarProvider from './SnackbarProvider';

jest.useFakeTimers();

describe('SnackbarProvider', () => {
  it('should display snackbar when showSnackbar() is called', () => {
    const component = mount(<SnackbarProvider />);
    component.state().showSnackbar('test', 'success');
    
    expect(component.state('message')).toEqual('test');
    expect(component.state('status')).toEqual('success');
    expect(component.state('isOpen')).toEqual(true);
    expect(component.find('Snackbar')).toExist();

    jest.runAllTimers();

    expect(component.state('isOpen')).toEqual(false);
  })
})

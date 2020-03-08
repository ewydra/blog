import React from 'react';
import { shallow } from 'enzyme';
import TextField, { InputFeedback } from './TextField';

const setup = () => {
    const field = { name: 'field' };
    const form = { touched: {}, errors: {} };
    const placeholder = 'field';
    return { field, form, placeholder };
  }

describe('TextField', () => {
  it('should render correctly with passed props', () => {
    const props = setup();
    const component = shallow(<TextField {...props} />);
    expect(component.find('textarea').prop('rows')).toEqual(1);
    expect(component.find('textarea').prop('id')).toEqual('field');
    expect(component.find('textarea').prop('placeholder')).toEqual('field');
    expect(component.find('textarea').hasClass('Text-field__input')).toEqual(true);
    expect(component.find('textarea').hasClass('Text-field__input--error')).toEqual(false);
    expect(component.find('span')).not.toExist();
  });

  it('should dispaly error when touched and has passed errors', () => {
    const props = setup();
    props.rows = 2;
    props.form = { touched: { field: true }, errors: { field: 'Required' }}
    const component = shallow(<TextField {...props} />);
    expect(component.find('textarea').prop('rows')).toEqual(2);
    expect(component.find('textarea').hasClass('Text-field__input')).toEqual(true);
    expect(component.find('textarea').hasClass('Text-field__input--error')).toEqual(true);
    expect(component.find(InputFeedback).prop('children')).toEqual('Required');
    expect(component.find(InputFeedback).prop('type')).toEqual('error');
  });
});

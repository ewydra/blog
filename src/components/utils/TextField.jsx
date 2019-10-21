import React from 'react';
import classnames from 'classnames';

export const InputFeedback = ({ type, children }) => {
  const classes = classnames(
    'Text-field__message',
    { 'Text-field__message--error': type === 'error' }
  );
  return (
    <span className={classes}>{children}</span>
  )
}

const TextField = ({
  field: { name, ...field },
  form: { touched, errors },
  placeholder,
  rows,
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];
  const classes = classnames(
    'Text-field__input',
    { 'Text-field__input--error': !!error && touch }
  );
  return (
    <div className="Text-field">
      <textarea
        id={name}
        type="text"
        className={classes}
        placeholder={placeholder}
        rows={rows || 1}
        {...props}
        {...field}
      />
      {touch && error && <InputFeedback type="error">{error}</InputFeedback>}
    </div>
  );
};

export default TextField;

import React from 'react';
import classnames from 'classnames';

export const InputFeedback = ({ type, children }) => {
  const classes = classnames(
    'text-field__message',
    { 'text-field__message--error': type === 'error' }
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
    'text-field__input',
    { 'text-field__input--error': !!error && touch }
  );
  return (
    <div className="text-field">
      {rows ? 
        <textarea
          id={name}
          type="text"
          className={classes}
          placeholder={placeholder}
          rows={rows}
          {...props}
          {...field}
        /> : 
        <input 
          id={name}
          className={classes}
          placeholder={placeholder}
          {...props}
          {...field} 
        />
      }
      {touch && error && <InputFeedback type="error">{error}</InputFeedback>}
    </div>
  );
};

export default TextField;

import React from 'react';
import './Input.css';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  size?: 'small' | 'medium' | 'large';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
  errorMessage?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  name,
  id,
  size = 'medium',
  onChange,
  onFocus,
  onBlur,
  className = '',
  error = false,
  errorMessage,
}) => {
  const inputClasses = `input input--${size} ${error ? 'input--error' : ''} ${className}`.trim();

  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        className={inputClasses}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && errorMessage && (
        <div className="input-error">{errorMessage}</div>
      )}
    </div>
  );
}; 
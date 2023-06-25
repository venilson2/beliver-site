import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  size?: number;
  maxLength?: number;
  required?: boolean;
  positionColumn?: 'first-column' | 'last-column' | null;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type =  "text",
  value = "",
  size = 30,
  maxLength = 100,
  required,
  positionColumn = null,
}) => {
  const className = `${positionColumn} no-margin-bottom`;

  return (
    <p className={className}>
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>{' '}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        size={size}
        maxLength={maxLength}
        required={required}
      />
    </p>
  );
};

export default Input;

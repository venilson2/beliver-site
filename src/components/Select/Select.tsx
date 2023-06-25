import React from 'react';

interface SelectProps {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  positionColumn?: 'first-column' | 'last-column' | null;
  label: string;
  required?: boolean;
}

const Select = ({
  name,
  options,
  value,
  onChange,
  positionColumn,
  label,
  required,
}: SelectProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  const className = `${positionColumn} no-margin-bottom`;
  return (
    <p className={className}>
        <label htmlFor={name}>
            {label} {required && <span className="required">*</span>}
        </label>{' '}
        <select name={name} value={value} onChange={handleOnChange} required={required}>
            {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
        </select>
    </p>
  );
};

export default Select;
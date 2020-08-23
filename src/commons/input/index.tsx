import React from 'react';
import Icon from '@mdi/react';

import './styles.scss';

interface InputProps {
  label?: string;
  type: string;
  placeholder: string;
  name?: string;
  path?: any;
  color?: string;
  size?: number;
  inputClass?: string;
  iconClass?: string;
  iconStyle?: {};
  inputContainer?: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  label_class?: string
}

export default (props: InputProps) => {
  const {
    label,
    type,
    placeholder,
    name,
    path,
    color,
    size,
    inputClass,
    iconClass,
    iconStyle,
    inputContainer,
    value,
    onChange,
    label_class
  } = props;
  return (
    <div className={`input_container ${inputContainer}`}>
      <label className={`label_class ${label_class}`}>{label}</label>
      <br />
      <div className="input_div">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={`input ${inputClass}`}
          onChange={onChange}
          required
        />
        <Icon
          path={path}
          size={size}
          color={color}
          className={`input_icon ${iconClass}`}
          style={iconStyle}
        />
      </div>
    </div>
  );
};

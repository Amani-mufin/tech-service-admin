import React from 'react';
import { CSSProperties } from 'styled-components';
import Styled from 'styled-components';

export enum ButtonType {
  Primary,
  Secondary,
  Custom,
  Reject,
}

interface ButtonProps {
  value: string;
  buttonClass?: string;
  disabled?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  onSubmit?:  (event: React.FormEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  type?: ButtonType;
}

export default (props: ButtonProps) => {
  const { value, buttonClass, disabled, onClick, id, onSubmit, type } = props;

  if (type === ButtonType.Primary) {
    return (
      <ButtonPrimary style={{ ...props.style }} onClick={onClick}>
        {value}
      </ButtonPrimary>
    );
  }

  if (type === ButtonType.Reject) {
    return (
      <ButtonReject style={{ ...props.style }} onClick={onClick}>
        {value}
      </ButtonReject>
    );
  }

  return (
    <button
      className={buttonClass}
      type="submit"
      id={id}
      disabled={disabled}
      onClick={onClick}
      onSubmit={onSubmit}
      style={{ ...props.style }}
    >
      {value}
    </button>
  );
};

const ButtonPrimary = Styled.button`
    background: #1B51E5;
    border-radius: 8px;
    color: #fff;
    width: 100%;
    border: none;
    font-weight: 900;
    font-size: 14px;
    margin-bottom: 10px;
`;

const ButtonReject = Styled.button`
    background: #1C1D21;
    border-radius: 8px;
    color: #fff;
    width: 100%;
    border: none;
    font-weight: 900;
    font-size: 14px;
    margin-bottom: 10px;
`;

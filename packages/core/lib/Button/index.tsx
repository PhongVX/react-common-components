import React from 'react';
import clsx from 'clsx';
import './styles.scss';

export interface ButtonProps {
  children?: any
  size?: 'medium' | 'large' | 'small'
  color?: 'primary' | 'secondary'
  variant?: 'contained' | 'outlined' | 'text'
  disabled?: boolean
  style?: object
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string
}

const defaultProps:ButtonProps = {
  children: '',
  size: 'medium',
  color: 'primary',
  variant: 'text',
  disabled: false,
  style: undefined,
  onClick: undefined,
  className: '',
};

const Button:React.FC<ButtonProps> = (props) => {
  const { children, color, size, disabled, style, onClick, className, ...restProps } = props;
  return (
    <button
      className={clsx('pure-material-button-contained', color || 'primary', `btn-${size}`, className || '')}
      style={{...style}}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
};

Button.defaultProps = defaultProps;

export default Button;
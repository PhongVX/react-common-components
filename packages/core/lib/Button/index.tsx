import React from 'react';
import { combineClasses } from '../../../utils/UIUtil';
import './styles.scss';

interface ButtonProps {
  children?: any
  size?: 'medium' | 'large' | 'small'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  style?: object
  onClick?: (e: any) => void
  className?: string
}

const Button = (props: ButtonProps) => {
  const { children, color, size, disabled, style, onClick, className } = props;
  return (
    <button
      className={combineClasses('btn', color || 'primary' ,'waves-effect', 'waves-light', `btn-${size}`, className || '')}
      style={{...style}}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

export default Button;
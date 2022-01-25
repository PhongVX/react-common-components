import React from 'react';
import './styles.scss';
export interface ButtonProps {
    children?: any;
    size?: 'medium' | 'large' | 'small';
    color?: 'primary' | 'secondary';
    variant?: 'contained' | 'outlined' | 'text';
    disabled?: boolean;
    style?: object;
    onClick?: (e: any) => void;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

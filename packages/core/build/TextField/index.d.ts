import React from 'react';
import './textField.scss';
export interface TextFieldProps {
    label?: string;
    id?: string;
    type?: string;
    style?: object;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
}
declare const TextField: React.FC<TextFieldProps>;
export default TextField;

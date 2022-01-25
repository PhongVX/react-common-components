import React from 'react';
export interface TextFieldProps {
    name: string;
    id?: string;
    type?: string;
    label?: string;
}
declare const TextField: React.FC<TextFieldProps>;
export default TextField;

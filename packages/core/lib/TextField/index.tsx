import React from 'react';
import './textField.scss';

export interface TextFieldProps {
  name: string
  id?:string
  type?: string
  label?: string
}

const TextField:React.FC<TextFieldProps> = (props) => {
  const { id, name, type, label } = props;
  return (
    <label className='pure-material-textfield-standard'>
      <input placeholder=" " id={id} type={type || 'text'} />
      {!!label ?<span>Textfield</span> : null }
    </label>
  )
};

export default TextField;
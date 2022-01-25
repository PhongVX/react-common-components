import React from 'react';

export interface TextFieldProps {
  name: string
  id?:string
  type?: string
  label?: string
}

const TextField:React.FC<TextFieldProps> = (props) => {
  const { id, name, type, label } = props;
  return (
    <div className='input-field'>
      <input id={id} type={type || 'text'} />
      {!!label ? <label htmlFor={id}>{label}</label> : null }
    </div>
  )
};

export default TextField;
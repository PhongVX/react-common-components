import React from 'react';
import clsx from 'clsx';

import './textField.scss';

export interface TextFieldProps {
  label?:string
  id?:string
  type?: string
  style?: object
  fullWidth?: boolean
  error?: boolean
  helperText?: string
  disabled?:boolean
}

const TextField:React.FC<TextFieldProps> = (props) => {
  const { id, type, label, style, fullWidth, error, helperText, ...restProps } = props;
  return (
    <>
      <label style={{width:fullWidth?'100%':'',...style}} className={clsx('pure-material-textfield-standard', error?'pure-textfield-error':'')}>
        <input {...restProps} placeholder=" " id={id} type={type || 'text'} />
        {!!label ?<span>{label}</span> : null }
      </label><br/>
      {!!helperText?<label className={clsx('pure-textfield-helpertext', error?'pure-textfield-helpertext-error':'')}>{helperText}</label>:null}
    </>
  )
};

export default TextField;
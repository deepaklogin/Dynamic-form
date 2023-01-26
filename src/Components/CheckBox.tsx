import React, { useContext } from 'react'
import {Form} from 'react-bootstrap';
import { FormContext } from '../FormContext';
const CheckBox = ({field_id,field_label,field_value,field_type,field_selected}:any) => {
  const { handleChange }:any = useContext(FormContext);
//   console.log(field_id);
  return (
    <div>
        <Form.Check inline type={field_type}  value={field_label} label={field_label} onChange={(event)=> handleChange(field_id, event)} />
    </div>
  )
}

export default CheckBox
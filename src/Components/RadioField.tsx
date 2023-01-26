import React, { useContext } from 'react'
import {Form} from 'react-bootstrap';
import { FormContext } from '../FormContext';
const RadioField = ({field_id,field_label,field_value,field_type,field_selected}:any) => {
  // console.log(field_label);
  const { handleChange }:any = useContext(FormContext);
  return (
    <div>
        <Form.Check type={field_type} value={field_label} checked={field_value} name="Radio" label={field_label} onChange={(event)=> handleChange(field_id, event)} />
    </div>
  )
}

export default RadioField
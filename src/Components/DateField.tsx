import React, { useContext } from 'react'
import {Form} from 'react-bootstrap';
import { FormContext } from '../FormContext';
const InputField = ({field_id,field_label,field_value,field_type,field_selected}:any) => {
  // console.log(field_value)
  const { handleChange }:any = useContext(FormContext);

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <input type={field_type} onChange={(e) =>handleChange(field_id,e)} name={"date"} value={field_value} />
    </Form.Group>
  )
}

export default InputField;
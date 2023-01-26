import React, { useContext } from 'react'
import {Form} from 'react-bootstrap';
import { FormContext } from '../FormContext';
const InputField = ({field_id,field_label,field_value,field_type,field_selected}:any) => {
  const { handleChange }:any = useContext(FormContext);

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type={field_type} onChange={(event) =>handleChange(field_id,event)} name={"name"} value={field_value} />
    </Form.Group>
  )
}

export default InputField;
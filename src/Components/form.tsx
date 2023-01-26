import React from "react";
import '../css/style.css';
import InputField from '../Components/InputField';
import RadioField from '../Components/RadioField';
import DateField from '../Components/DateField';
import CheckBox from '../Components/CheckBox';

const FormModal = ({field:{optionid,optionvalue,selected,field_value},inputType}:any) => {
    // console.log(field_value);
    switch(inputType){
        case 'Radio':
            return(
                <RadioField
                    field_id={optionid}
                    field_label={optionvalue}
                    field_type={inputType}
                    // field_placeholder={field_placeholder}
                    field_selected={selected}
                    field_value={field_value}
                    // field_options={value}
                />
            ) 
        case 'Checkbox':
            return(
                <CheckBox
                    field_id={optionid}
                    field_label={optionvalue}
                    field_type={inputType}
                    // field_placeholder={field_placeholder}
                    field_selected={selected}
                    field_value={field_value}
                />
            )
        case 'Textarea':
            return(
                <InputField
                    field_id={optionid}
                    field_label={optionvalue}
                    field_type={inputType}
                    // field_placeholder={field_placeholder}
                    field_value={field_value}
                />
            ); 
        case 'Date':
            return(
                <DateField
                    field_id={optionid}
                    field_label={optionvalue}
                    field_type={inputType}
                    // field_placeholder={field_placeholder}
                    field_value={field_value}
                />
            );
        default:
            return null;
    }
}

export default FormModal;
import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({...props})=>{
    const [field, meta] = useField(props);
    return (
        <div className='mb-2'>
            <input  className={`form-control shadow-none ${meta.error && meta.touched && 'is-invalid'}`} {...field} {...props} autoComplete='off'/>
            <ErrorMessage component="div" name={field.name} className='flex error text-xs text-red-500 italic'/>    
        </div>
    )
}
export const AreaField = ({...props})=>{
    const [field, meta] = useField(props);
    return (
        <div className='mb-2'>
            <textarea  className={`form-control shadow-none ${meta.error && meta.touched && 'is-invalid'}`} {...field} {...props} autoComplete='off'/>
            <ErrorMessage component="div" name={field.name} className='flex error text-xs text-red-500 italic'/>    
        </div>
    )
}
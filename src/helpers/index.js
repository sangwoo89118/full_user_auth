import React from 'react';

export function renderInput({input, type, placeholder, meta: {error, touched, active}}){
    return (
        <div className="input-field">
            <input {...input} type={type} placeholder={placeholder}/>
            <p className="red-text">{ touched && !active && error }</p>
        </div>
    )
}

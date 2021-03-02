import React from 'react';
import {Field} from "redux-form";


export const Textarea = (props) => {
    const error = props.meta.error && props.meta.touched;
    return(
        <div>
            {error && <div className={'alert alert-danger'} role={"alert"}>{props.meta.error}</div>}

            <textarea className={error ? 'form-control is-invalid' : 'form-control'} {...props.input} {...props}/>
        </div>
    )
}


export const Input = (props) => {
    const error = props.meta.error && props.meta.touched;
    return(
        <div>
            {error && <div className={'alert alert-danger'} role={"alert"}>{props.meta.error}</div>}

            <input className={error ? 'form-control is-invalid' : 'form-control'} {...props.input} {...props}/>
        </div>
    )
}
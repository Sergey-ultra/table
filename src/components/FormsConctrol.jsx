import React from "react";
import styles from './FormsConctrol.module.css'

export const Input = ({input, label, type, meta: { touched, error, warning }, ...props}) => {
    return (

        <div className ={touched && error ? styles.error: ""}>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type}/>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>

    )
}


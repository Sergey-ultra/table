import React from "react";
import styles from './FormsConctrol.module.css'

export const Input = ({input,  placeholder, type, meta: { touched, error, warning }, ...props}) => {
    return (

        <div className ={touched && error ? styles.error: ""}>
            <div>
                <input {...input} placeholder={placeholder} type={type}/>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>

    )
}
export const Textarea = ({input,  placeholder, type, meta: { touched, error, warning }, ...props}) => {
    return (

        <div className ={touched && error ? styles.error: ""}>
            <div>
                <textarea {...input} placeholder={placeholder} type={type}/>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>

    )
}


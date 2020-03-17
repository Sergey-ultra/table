import {Field, reduxForm} from "redux-form";
import {} from "../../validation/validator";
import {Input} from "../FormsConctrol";
import React from "react";
import {required} from "../../validation/validator";
import {maxLength15} from "../../validation/validator";
import {minLength2} from "../../validation/validator";
import f from './filter.mobile.css'
import {email} from "../../validation/validator";
import {phoneNumber} from "../../validation/validator";
import {number} from "../../validation/validator";



const Filter = (props) => {
    return (
        <div className = {f.common}>
            <div >
                <FilterReduxForm  resetFilter ={props.resetFilter} onSubmit={value => {
                    if (value.fname === undefined) value.fname = '';
                    if (value.lname === undefined) value.lname = '';
                    if (value.email === undefined) value.email = '';
                    if (value.tel === undefined) value.tel = '';
                    props.filter(value);
                }}/>
            </div>

        </div>
    )
}


let KeyForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, resetFilter } = props
    return (
        <div >
           <form className = {f.userInput} onSubmit={handleSubmit}>
               <div>
                   <button type="submit" disabled={submitting}>поиск</button>
                   <button type="button" disabled={pristine || submitting}
                           onClick={() => {
                       reset();
                       resetFilter();}
                           }>сброс </button>
               </div>
            <div><Field name="fname" type="text" placeholder='имя' label='Имя'
                        validate={[ maxLength15 ]} component={Input}/></div>
            <div><Field name="lname" type="text" placeholder='фамилия'label='Фамилия'
                        validate={[ maxLength15 ]} component={Input}/></div>
            <div><Field name="email" type="text" placeholder='email'label='Email'
                        validate={[ email ]} component={Input}/></div>
            <div><Field name="tel" type="text" placeholder='телефон'label='Телефон'
                        validate={[ number]} component={Input}/></div>



        </form>
    </div>
    )
}
let FilterReduxForm = reduxForm({form: 'filter'})(KeyForm)
export default Filter;
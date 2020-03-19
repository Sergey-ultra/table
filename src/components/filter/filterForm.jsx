import {Field, reduxForm} from "redux-form";

import {Input} from "../FormsConctrol";
import React from "react";

import {maxLength15} from "../../validation/validator";

import f from './filterForm.module.css'
import {email} from "../../validation/validator";
import {number} from "../../validation/validator";




let Form = (props) => {
    const { handleSubmit, pristine, reset, submitting, resetFilter } = props
    return (
        <div className = {f.common}>
           <form className = {f.userInput} onSubmit={handleSubmit}>
               <div>
                   <button type="submit" disabled={submitting}>
                       поиск</button>
                   <button type="button" disabled={pristine || submitting}
                           onClick={() => {
                       reset();
                       resetFilter();}
                           }>сброс </button>
               </div>
            <div className = {f.userInputItem}><Field name="fname" type="text" placeholder='имя'
                        validate={[ maxLength15 ]} component={Input}/></div>
            <div className = {f.userInputItem}><Field name="lname" type="text" placeholder='фамилия'
                        validate={[ maxLength15 ]} component={Input}/></div>
            <div className = {f.userInputItem}><Field name="email" type="text" placeholder='email'
                        validate={[ email ]} component={Input}/></div>
            <div className = {f.userInputItem}><Field name="tel" type="text" placeholder='телефон'
                        validate={[ number]} component={Input}/></div>
        </form>
    </div>
    )
}
let FilterForm = reduxForm({form: 'filter'})(Form);
export default FilterForm;
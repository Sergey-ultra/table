import f from "./userForm.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsConctrol";
import {email, maxLength15, minLength2, number, phoneNumber, required} from "../../validation/validator";
import React from "react";
import icon from '../../assets/Cross-lines.png'


let UserForm = (props) => {
    const {handleSubmit, pristine, reset, submitting, changeDisplayAddForm} = props
    return (
        <form className={f.userInput} onSubmit={handleSubmit}>
            <div onClick = {()=> props.changeDisplayAddForm(false)}><img className ={f.icon}src={icon} alt="Close"/></div>
            <button type="submit" disabled={submitting}>загрузить</button>
            <button type="button" disabled={pristine || submitting} onClick={() => {
                reset()
            }}>сброс
            </button>
            <label htmlFor="fname">Имя</label>
            <div className={f.item}>
                <Field name="fname" type="text" component={Input}
                       placeholder='имя' validate={[required, maxLength15, minLength2]}/>
            </div>
            <label htmlFor="lname">Фамилия</label>
            <div className={f.item}>
                <Field name="lname" type="text" component={Input}
                       placeholder='фамилия' validate={[required, maxLength15, minLength2]}/>
            </div>
            <label htmlFor="email">Email</label>
            <div className={f.item}>
                <Field name="email" type="text" component={Input}
                       placeholder='email' validate={[required, maxLength15, minLength2, email]}/>
            </div>
            <label htmlFor="tel">Телефон</label>
            <div className={f.item}>
                <Field name="tel" type="text" component={Input}
                       placeholder='телефон' validate={[required, maxLength15, minLength2, phoneNumber]}/>
            </div>
            <label htmlFor="streetAddress">Адрес проживания</label>
            <div className={f.item}>
                <Field name="streetAddress" type="text" component={Input}
                       placeholder='Адрес проживания' validate={[required, maxLength15, minLength2]}/>
            </div>
            <label htmlFor="city">Город</label>
            <div className={f.item}>
                <Field name="city" type="text" component={Input}
                       placeholder='Город' validate={[required, maxLength15, minLength2]}/>
            </div>
            <label htmlFor="state">Провинция</label>
            <div className={f.item}>
                <Field name="state" type="text" component={Input}
                       placeholder='провинция' valdate={[required, maxLength15]}/>
            </div>
            <label htmlFor="zip">Индекс</label>
            <div className={f.item}>
                <Field name="zip" type="text" component={Input}
                       placeholder='Индекс' valdate={[required, maxLength15, number]}/>
            </div>
        </form>
    )
}
let ReduxUserForm = reduxForm({form: 'user'})(UserForm);
export default ReduxUserForm;
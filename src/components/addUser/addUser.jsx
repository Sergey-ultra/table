import React, {useState} from "react";
import a from './addUser.module.css'
import {Field, reduxForm} from "redux-form";
import {required, maxLength15, minLength2, email, phoneNumber, number} from "../../validation/validator";
import {Input} from "../FormsConctrol";



let AddUser = (props) => {
    let [displayAddForm, changeDisplayAddForm] = useState(false);
    return (
        <div className={a.common}>
            <div className ={displayAddForm ? a.userInput :a.userInputHidden} >
                <ReduxUserForm  onSubmit={(value) => {
                    changeDisplayAddForm(false);
                    props.addNewUserToRedux(value)
                }}/>
            </div>
            <div className={a.Block}>
            <button onClick ={()=> changeDisplayAddForm(true)}>
                Новый пользователь
            </button>
        </div>
        </div>
    )
}


let UserForm = (props) => {
    return (
        <form   onSubmit={props.handleSubmit}>
            <button >загрузить</button>
               <div className ={a.forma}>
                   <Field name="fname" type="text" label='Имя'component={Input}
                          placeholder='имя' validate={[required, maxLength15,  minLength2 ]} />
               </div>
                <div className ={a.forma}>
                    <Field name="lname" type="text" label='Фамилия'component={Input}
                           placeholder='фамилия' validate={[required, maxLength15,  minLength2 ]} />
                </div>
               <div className ={a.forma}>
                     <Field name="email" type="text" label='Email'component={Input}
                            placeholder='email' validate={[required, maxLength15,  minLength2, email]} />
               </div>
                <div className ={a.forma}>
                    <Field name="tel" type="text" label='Телефон' component={Input}
                           placeholder='телефон' validate={[required, maxLength15,  minLength2, phoneNumber]}/>
                </div>

                <div className ={a.forma}>
                    <Field name="streetAddress" type="text"  label='Адрес проживания'component={Input}
                           placeholder='Адрес проживания' validate={[required, maxLength15,  minLength2 ]} />
                </div>
            <div className ={a.forma}>
                <Field name="city" type="text" label='Город'component={Input}
                       placeholder='Город' validate={[required, maxLength15,  minLength2 ]} />
            </div>
               <div className ={a.forma}>
                   <Field name="state" type="text" label='Провинция'component={Input}
                          placeholder='провинция' valdate={[required, maxLength15]} />
               </div>
               <div className ={a.forma}>
                   <Field name="zip" type="text" label='Индекс'component={Input}
                          placeholder='Индекс' valdate={[required, maxLength15, number]} />
               </div>
        </form>
    )
}
let ReduxUserForm = reduxForm({
    form: 'user'
})(UserForm)
export default AddUser;
import React, {useState} from "react";
import a from './addUser.module.css'
import ReduxUserForm from './userForm'


let AddUser = (props) => {
    let [displayAddForm, changeDisplayAddForm] = useState(false);
    return (
        <div className={a.common}>
            <button onClick={() => changeDisplayAddForm(true)}>
                Добавить пользователя
            </button>
            <div className={displayAddForm ? a.userInput : a.userInputHidden}>
                <ReduxUserForm changeDisplayAddForm ={changeDisplayAddForm}onSubmit={(value) => {
                    changeDisplayAddForm(false);
                    props.addNewUserToRedux(value)
                }}/>
            </div>
        </div>
    )
}


export default AddUser;
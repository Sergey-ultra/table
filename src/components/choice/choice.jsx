import React from "react";
import {getTable, setTotalCount} from "../../state/table-reducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {choice} from './choice.module.css'

let Choice = (props) => {

    let loadUsers = (event) => {
        const {value} = event.target;
        props.setTotalCount(value);


    }


    return (
        <div className={choice}>
            <h2>Выберете количество пользователей в базе данных</h2>
            <NavLink to={'/table/'}>

                <button onClick={loadUsers} name="users" type="button" value="32">
                    <h3> 32 пользователя</h3>
                </button>

            </NavLink>

            <NavLink to={'/table/'}>

                <button onClick={loadUsers} name="users" type="button" value="1000">
                    <h3>1000 пользователей</h3>
                </button>

            </NavLink>


        </div>
    )

}
let mapStateToProps = (state) => {
    return {
        totalCount: state.tablePage.totalCount,
    }
}
export default connect(mapStateToProps, {getTable, setTotalCount})(Choice);
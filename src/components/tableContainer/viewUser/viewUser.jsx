import styles from "./viewUser.module.css";
import React from "react";
import Preloader from "../../common/preloader";

let ViewUser = (props) => {
    console.log(props.currentUser);

    if (!props.currentUser) {
        return (
           <Preloader/>
        )
    }
    if (!props.currentUser.address) {
        return (
            <Preloader/>
        )
    }
    return (
        <div className={styles.user}>


            <table>

                <tbody>

                <tr className={styles.selectedUser}>
                    <td>Выбран пользователь:</td>
                    <td>{props.currentUser.fname} {props.currentUser.lname}</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>{props.currentUser.id}</td>
                </tr>
                <tr>
                    <td>Адрес проживания:</td>
                    <td>{props.currentUser.address.streetAddress}</td>
                </tr>
                <tr>
                    <td>Город:</td>
                    <td>{props.currentUser.address.city}</td>
                </tr>
                <tr>
                    <td>Провинция/штат:</td>
                    <td>{props.currentUser.address.state}</td>
                </tr>
                <tr>
                    <td>Индекс:</td>
                    <td>{props.currentUser.address.zip}</td>
                </tr>


                </tbody>
            </table>
            <div className ={styles.description}>{props.currentUser.description}</div>
        </div>
    )

}
export default ViewUser;
import React from "react";
import styles from "./table.module.css";
import Preloader from "../common/preloader";
import ViewUser from "./viewUser/viewUser";


let Table = (props) => {

    let sortTable = (event) => {
        const key = event.target.id;
        if (key !== props.sortKey) {
            props.sortTable(props.isFiltered, key, props.currentPage, props.pageSize);
        } else props.reverse(props.isFiltered, key, props.currentPage, props.pageSize);
    }
    /*{(props.isLoading) ? <Preloader/> : null}*/
    return (<div className = {styles.tableCont}>
            <div className={styles.tableBlock}>
                <table>
                    <thead>
                    <tr>
                        <th className={(props.sortKey === 'id') && styles.selectedSortKey}
                            onClick={sortTable} id='id'> {props.reverseKey.id ? '↑' : '↓'}id
                        </th>
                        <th className={(props.sortKey === 'fname') && styles.selectedSortKey}
                            onClick={sortTable} id='fname'> {props.reverseKey.fname ? '↑' : '↓'} firstName
                        </th>
                        <th className={(props.sortKey === 'lname') && styles.selectedSortKey}
                            onClick={sortTable} id='lname'>{props.reverseKey.lname ? '↑' : '↓'} lastName
                        </th>
                        <th className={(props.sortKey === 'email') && styles.selectedSortKey}
                            onClick={sortTable} id='email'>{props.reverseKey.email ? '↑' : '↓'} email
                        </th>
                        <th className={(props.sortKey === 'tel') && styles.selectedSortKey}
                            onClick={sortTable} id='tel'>{props.reverseKey.tel ? '↑' : '↓'} phone
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.table.map(d =>

                            <tr

                                className={(props.selectedUserId === d.id) && styles.selectedUser}
                                onClick={(event) => {
                                    props.setSelectedUserId(d.id);
                                    props.setCurrentUser(d.id);
                                }
                                }>
                                <td><span>id</span> {d.id}</td>
                                <td><span>firstName</span> {d.fname} </td>
                                <td><span>lastName</span> {d.lname}</td>
                                <td><span>email</span> {d.email}</td>
                                <td><span>phone</span> {d.tel}</td>

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className={styles.viewUserBlock}>
                <ViewUser currentUser={props.currentUser}/>
            </div>

        </div>
    )

}
export default Table;
import React from "react";
import {connect} from "react-redux";
import Table from './table'
import {
    getTable,
    setCurrentPage,
    setSelectedUserId,
    setCurrentUser,
    addNewUserToRedux,
    sortTable,
    setSortKey, OnPageNumberChange, toggleIsLoading, filter, toggleIsFiltered, resetFilter, reverse,
} from "../../state/table-reducer";
import ViewUser from "./viewUser/viewUser";
import Pagination from "../pagination/pagination";
import AddUser from "../addUser/addUser";
import tableContainer from './tableContainer.module.css'
import Filter from "../filter/filter";


/*import Preloader from "../common/preloader/preloader";
import {withAuthComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";*/


class TableContainer extends React.Component {

    /*  updateNewUserInfo(event) {
          let {value,name} = event.target;
          this.props.({newUser:{[name]: value}})
      }*/


    componentDidMount() {
        this.props.getTable(this.props.totalCount);
        console.log(this.props.selectedUserId)
        this.props.setCurrentUser(this.props.selectedUserId);
        console.log(this.props.currentUser)


    }

    OnPageNumberChange = (currentPage) => {
        this.props.setCurrentPage(currentPage, this.props.pageSize);
        this.props.setCurrentUser(this.props.selectedUserId)
    }

    render() {
        let pointSlice = (this.props.currentPage - 1) * this.props.pageSize;
        let pointSlice2 = pointSlice + this.props.pageSize;

        return (
            <div classname={tableContainer}>
                <div className={tableContainer.header}>
                    <Pagination
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        isFiltered={this.props.isFiltered}
                        OnPageNumberChange={this.props.OnPageNumberChange}
                        paginationPortionSize={this.props.paginationPortionSize}
                        selectedUserId={this.props.selectedUserId}
                    />

                    <AddUser
                        addNewUserToRedux={this.props.addNewUserToRedux}
                    />


                    <div className={tableContainer.filter}>
                        <Filter
                            selectedUserId={this.props.selectedUserId}
                            setCurrentUser={this.props.setCurrentUser}
                            filter={this.props.filter}
                            resetFilter={this.props.resetFilter}
                        />
                    </div>
                </div>
                <div className={tableContainer.table}>
                    <Table table={(this.props.isFiltered)
                        ? this.props.filteredTable.slice(pointSlice, pointSlice2)
                        : this.props.table.slice(pointSlice, pointSlice2)}

                           isLoading={this.props.isLoading}
                           isFiltered={this.props.isFiltered}
                           reverseKey={this.props.reverseKey}
                           setSelectedUserId={this.props.setSelectedUserId}
                           selectedUserId={this.props.selectedUserId}
                           setCurrentUser={this.props.setCurrentUser}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           sortTable={this.props.sortTable}
                           setSortKey={this.props.setSortKey}
                           sortKey={this.props.sortKey}
                           reverse={this.props.reverse}
                           currentUser={this.props.currentUser}

                    />

                </div>
            </div>
        )


    }
}


let mapStateToProps = (state) => {
    return {
        table: state.tablePage.table,
        isLoading: state.tablePage.isLoading,
        filteredTable: state.tablePage.filteredTable,
        isFiltered: state.tablePage.isFiltered,
        reverseKey: state.tablePage.reverseKey,
        totalCount: state.tablePage.totalCount,
        pageSize: state.tablePage.pageSize,
        paginationPortionSize: state.tablePage.paginationPortionSize,
        currentPage: state.tablePage.currentPage,
        selectedUserId: state.tablePage.selectedUserId,
        currentUser: state.tablePage.currentUser,
        sortKey: state.tablePage.sortKey

        /*totalUsersCount: state.tablePage.totalUsersCount,

        isFetching: state.tablePage.isFetching,
        followingInProgress: state.tablePage.followingInProgress*/
    }
}


export default connect(mapStateToProps, {
    getTable, toggleIsLoading, setCurrentPage, setSelectedUserId, setCurrentUser,
    addNewUserToRedux, OnPageNumberChange, filter, resetFilter, toggleIsFiltered,
    setSortKey, reverse,
    sortTable
})
(TableContainer);




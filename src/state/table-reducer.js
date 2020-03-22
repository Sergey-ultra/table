import React from "react";
import localData from '../localData.json'
import localData1000 from '../localData1000.json'


const SET_DATA = 'SET_DATA';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const ADD_NEW_USER_TO_REDUX = 'ADD_NEW_USER_TO_REDUX';
const SORT_TABLE = 'SORT_TABLE';
const SET_SORT_KEY = 'SET_SORT_KEY';
const FILTER = 'FILTER';
const RESET_FILTER ='RESET_FILTER';
const TOGGLE_IS_FILTERED = 'TOGGLE_IS_FILTERED';
const REVERSE ='REVERSE';

/*const TOGGLE_IS_FETCHING = 'TOGGLE _IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';*/


let initialState = {
    table: [
        /*{id: 0, fname: 'Sergey', lname: 'Morozov', email: 'gdsusuy@tet.ru', tel: '(456)9787'},
        {id: 1, fname: 'Stanislav', lname: 'Popov', email: 'gdsusuy@tet.ru', tel: '(4589)9787'},
        {id: 2, fname: 'Dennis', lname: 'Kozlov', email: 'gdsusuy@tet.ru', tel: '(4509)09787'},
        {id: 3, fname: 'Alex', lname: 'Sidorov', email: 'gdsusuy@tet.ru', tel: '45679787'}*/
    ],

    sortKey: 'id',
    filteredTable: [],
    reverseKey: {
        id:false,
        fname: false,
        lname: false,
        email: false,
        tel: false
    },
    isFiltered: false,
    isLoading: false,
    pageSize: 20,
    paginationPortionSize: 10,
    currentPage: 1,
    totalCount: 0,
    selectedUserId: 0,
    currentUser: []

    /*    isFetching: false,
    followingInProgress: []*/
};


const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            action.array.forEach((item, index) => item.id = index)
            return {
                ...state,
                table: [...action.array],
                currentUser: action.array[state.selectedUserId]
            }
        }
        case TOGGLE_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case TOGGLE_IS_FILTERED: {
            return {...state, isFiltered: action.isFiltered}
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            let user;
            let userId;
            let index = (action.currentPage - 1) * action.pageSize;
            if (action.isFiltered)  {
                userId = state.filteredTable[index].id;
                user =state.filteredTable[index]
            } else{
                userId = state.table[index].id;
                user =state.table[index]
            }
            return {
                ...state, currentPage: action.currentPage,
                selectedUserId: userId,
                currentUser: user
            }
        }
        case SET_CURRENT_USER: {
            let userIndex;
            state.table.forEach((item, index) => {if (item.id ===action.selectedUserId) {userIndex = index}});
            return {
                ...state, currentUser: state.table[userIndex],
            }
        }
        case SET_SELECTED_USER_ID: {
            return {...state, selectedUserId: action.selectedUserId}
        }

        case FILTER: {

            let include = (item) => {
                if (item.fname.toLowerCase().includes(action.keys.fname) &&
                    item.lname.toLowerCase().includes(action.keys.lname) &&
                    item.email.toLowerCase().includes(action.keys.email) &&
                    item.tel.toLowerCase().includes(action.keys.tel))
                    return true;
            }
            let arr = state.table.filter(include);
            console.log(arr);
            if (arr.length !== 0) {
                return {...state,
                    filteredTable: arr,
                    isFiltered: true,
                    currentPage:1,
                    totalCount: arr.length,
                    selectedUserId: arr[0].id,
                    currentUser: arr[0]
                }
            }
            return {...state,
                filteredTable: arr,
                isFiltered: true,
                currentPage:1,
                totalCount:0
            }

        }
        case RESET_FILTER: {
            let func = (a, b) => {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            }
            let array = state.table.sort(func);

            return{...state,
                table: [...array],
                isFiltered: false,
                selectedUserId: 0,
                currentPage:1,
                totalCount: state.table.length,
                sortKey: 'id'}
        }
        case SET_SORT_KEY: {
            return {...state, sortKey: action.key}
        }
        case REVERSE: {
            let arr;
            let m;
            const key = action.key;
            let index = (action.currentPage - 1) * action.pageSize;
            if (key ==='id') {
                (state.reverseKey.id) ? m = false : m = true;
                if (action.isFiltered) {
                    arr = state.filteredTable.reverse();
                    return {...state,
                        filteredTable: [...arr],
                        reverseKey: {...state.reverseKey, id: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]

                    }
                } else {
                    arr = state.table.reverse();
                    return {...state,
                        table: [...arr],
                        reverseKey: {...state.reverseKey, id: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                }
            }
            if (key ==='fname') {
                (state.reverseKey.fname) ? m = false : m = true;
                if (action.isFiltered) {
                    arr = state.filteredTable.reverse();
                    return {...state,
                        filteredTable: [...arr],
                        reverseKey: {...state.reverseKey, fname: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                } else {
                    arr = state.table.reverse();
                    return {...state,
                        table: [...arr],
                        reverseKey: {...state.reverseKey, fname: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                }
            }
            if (key ==='lname') {
                (state.reverseKey.lname) ? m = false : m = true;
                if (action.isFiltered) {
                    arr = state.filteredTable.reverse();
                    return {...state,
                        filteredTable: [...arr],
                        reverseKey: {...state.reverseKey, lname: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                } else {
                    arr = state.table.reverse();
                    return {...state,
                        table: [...arr],
                        reverseKey: {...state.reverseKey, lname: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                }
            }
            if (key ==='email') {
                (state.reverseKey.email) ? m = false : m = true;
                if (action.isFiltered) {
                    arr = state.filteredTable.reverse();
                    return {...state,
                        filteredTable: [...arr],
                        reverseKey: {...state.reverseKey, email: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                } else {
                    arr = state.table.reverse();
                    return {...state,
                        table: [...arr],
                        reverseKey: {...state.reverseKey, email: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                }
            }
            if (key ==='tel') {
                (state.reverseKey.tel) ? m = false : m = true;
                if (action.isFiltered) {
                    arr = state.filteredTable.reverse();
                    return {...state,
                        filteredTable: [...arr],
                        reverseKey: {...state.reverseKey, tel: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                } else {
                    arr = state.table.reverse();
                    return {...state,
                        table: [...arr],
                        reverseKey: {...state.reverseKey, tel: m},
                        selectedUserId: arr[index].id,
                        currentUser: arr[index]
                    }
                }
            }
        }

        case SORT_TABLE: {
            console.log(action.key)
            let funcId = (a, b) => {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            }
            let funcFname = (a, b) => {
                if (a.fname.toLowerCase() < b.fname.toLowerCase()) return -1;
                if (a.fname.toLowerCase() > b.fname.toLowerCase()) return 1;
                return 0;
            }
            let funcLname = (a, b) => {
                if (a.lname.toLowerCase() < b.lname.toLowerCase()) return -1;
                if (a.lname.toLowerCase() > b.lname.toLowerCase()) return 1;
                return 0;
            }
            let funcEmail = (a, b) => {
                if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
                if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
                return 0;
            }
            let funcTel = (a, b) => {
                if (a.tel < b.tel) return -1;
                if (a.tel > b.tel) return 1;
                return 0;
            }
            let arr;
            let index = (action.currentPage - 1) * action.pageSize;
            if (action.isFiltered) {
                arr = state.filteredTable;
                if (arr.length !== 0) {
                    if (action.key === 'id')arr.sort(funcId);
                    if (action.key === 'fname')arr.sort(funcFname);
                    if (action.key === 'lname')arr.sort(funcLname);
                    if (action.key === 'email')arr.sort(funcEmail);
                    if (action.key === 'tel')arr.sort(funcTel);
                    return {
                        ...state,
                        filteredTable: [...arr],
                        selectedUserId: arr[index].id,
                        currentUser: arr[index],
                        sortKey: action.key
                    }
                } else return;
            } else {
                arr = state.table;
                if (action.key === 'id')arr.sort(funcId);
                if (action.key === 'fname')arr.sort(funcFname);
                if (action.key === 'lname')arr.sort(funcLname);
                if (action.key === 'email')arr.sort(funcEmail);
                if (action.key === 'tel')arr.sort(funcTel);
                return {
                    ...state,
                    table: [...arr],
                    selectedUserId: arr[index].id,
                    currentUser: arr[index],
                    sortKey: action.key
                }
            }
        }


        case
        ADD_NEW_USER_TO_REDUX: {
            let newElement = {
                id: 0,
                lname: action.newUser.lname,
                fname: action.newUser.fname,
                email:action.newUser.email,
                tel: action.newUser.tel,
                description: action.newUser.description,
                address:{
                    streetAddress:action.newUser.streetAddress,
                    city: action.newUser.city,
                    state: action.newUser.state,
                    zip:action.newUser.zip
                }
            };
            let newTable = [newElement, ...state.table];
            newTable.forEach((item, index) => {
                item.id = index
            });
            return {
                ...state,
                table: [...newTable],
                selectedUserId: 0,
                currentUser: newTable[0]

            }
        }
        default:
            return state;
    }
}

export const setData = (array) => ({type: SET_DATA, array});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const setCurrentPage = (isFiltered, currentPage, pageSize) =>
    ({type: SET_CURRENT_PAGE, isFiltered, currentPage, pageSize});

export const setSelectedUserId = (selectedUserId) => ({type: SET_SELECTED_USER_ID, selectedUserId});
export const setCurrentUser = (selectedUserId) => ({type: SET_CURRENT_USER, selectedUserId});

export const setSortKey = (key) => ({type: SET_SORT_KEY, key});
export const reverse = (isFiltered, key, currentPage, pageSize) =>
    ({type: REVERSE, isFiltered, key, currentPage, pageSize});

export const sortTable = (isFiltered, key, currentPage, pageSize) =>
    ({type: SORT_TABLE, isFiltered, key, currentPage, pageSize});
export const filter = (keys) => ({type: FILTER, keys});


export const addNewUserToRedux = (newUser) => ({type: ADD_NEW_USER_TO_REDUX, newUser});

export const toggleIsFiltered = (isFiltered) => ({type: TOGGLE_IS_FILTERED, isFiltered});

export const resetFilter = () => ({type: RESET_FILTER});


/*export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});*/

export const getTable = (totalCount) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true));
       (totalCount == 32) ? dispatch(setData(localData)) : dispatch(setData(localData1000));
        /*let r = new XMLHttpRequest();
        r.open("GET", `http://www.filltext.com?rows=${totalCount}&id={index}&fname={firstName}&lname={lastName}&email={email}&tel={phone|format}&address={addressObject}&description={lorem|32}`, true);

        r.onreadystatechange = () => {
            if (r.readyState != 4 || r.status != 200) return;
            let data = JSON.parse(r.responseText);
            dispatch(setData(data));
        };
        r.send();*/
        dispatch(toggleIsLoading(false));
    }
}


export const OnPageNumberChange = (currentPage, isFiltered, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(isFiltered, currentPage, pageSize))

    }
}


export default tableReducer;
